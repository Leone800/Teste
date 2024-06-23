const palco = document.getElementById('raiz');

palco.style.height = '100vh';
palco.style.width = '100%';
palco.style.position = 'absolute';
palco.style.backgroundColor = 'black';
palco.style.overflow = 'hidden';
palco.style.backgroundSize = 'cover';
palco.style.backgroundPosition = '0.0';
palco.style.border = 'none';

const letters = 'あア いイ うウ えエ おオ かカ きキ くク けケ こコ さサ しシ すス せセ そソ たタ ちチ つツ てテ とト なナ にニ ぬヌ ねネ のノ はハ ひヒ ふフ へヘ ほホ まマ みミ むム めメ もモ やヤ ゆユ よヨ らラ りリ るル れレ ろロ わワ をヲ んン';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const scoreElement = document.getElementById('score');
let pontos = 0;

function updateScore(){
    scoreElement.textContent = `Pontuação: ${pontos}`;
}


function createLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    const randomLetter = letters.charAt(getRandomInt(0, letters.length));
    letter.textContent = randomLetter;

    // Atribui um valor de pontos baseado na letra
    const points = letters.indexOf(randomLetter) + 1; // Exemplo de pontuação baseada na posição
    letter.setAttribute('data-points', points);

    letter.style.top = `${getRandomInt(0, window.innerHeight - 50)}px`;

    const duration = getRandomInt(3, 10);
    letter.style.animationDuration = `${duration}s`;

    letter.style.animationName = `fly${Date.now()}`;

    letter.style.position = 'absolute';
    letter.style.fontSize = '4rem';
    letter.style.whiteSpace = 'nowrap';
    letter.style.animationTimingFunction = 'linear';
    letter.style.animationIterationCount = '1';

    function geradorDeCor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    letter.style.color = geradorDeCor();

    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes fly${Date.now()} {
            0% {
                transform: translateX(100vw);
            }
            100% {
                transform: translateX(-100vw);
            }
        }
    `;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    letter.addEventListener('click', () => {
        letter.style.opacity = '0';
        pontos += parseInt(letter.getAttribute('data-points'));
        updateScore();

        setTimeout(() => {
            palco.removeChild(letter);
        }, 500);
    });

    palco.appendChild(letter);

    setTimeout(() => {
        if (palco.contains(letter)) {
            palco.removeChild(letter);
        }
    }, duration * 1000);
}

setInterval(createLetter, 500);