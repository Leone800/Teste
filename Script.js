function TelaFechada(){
  if(screen.orientation){
    screen.orientation.lock('landscape').catch(function(error){
      console.log('orientacao de tela fechada, error')
    });
  }
}

function teladejogo(){
const tela = document.getElementById("raiz");
if(window.innerHeight > window.innerWidth){
  tela.style.display = 'none';
}
else{
  tela.style.display = 'block';
}

window.addEventListener('resize', teladejogo);

}
window.addEventListener("orientationchange", function telacheia() {
    if (window.orientation === 0 || window.orientation === 360) {
        alert("Por favor, use o dispositivo no modo paisagem.");
    }
});
telacheia()
teladejogo()
telacheia()
