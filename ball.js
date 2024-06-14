document.addEventListener("DOMContentLoaded", 
function(){
  const ball1 = document.getElementById('quadro3');
  const ball2 = document.getElementById('quadro4');
  const ball3 = document.getElementById('quadro5');
  const ball4 = document.getElementById('quadro6');
  
  let position1 = 0;
  let position2 = 0;
  let position3 = 0;
  let position4 = 0;
  
  let speed1 = 4;
  let speed2 = 4;
  let speed3 = 4;
  let speed4 = 4;
  
  function moveBall(ball, position, speed){
    position += speed;
    if(position > window.innerHeight - 50 || position < 0){
        speed += -speed;
    }
    ball.style.marginTop = position + 'px';
    return{position, speed};
  }
  function animationBall(){
    let result1 = moveBall(ball1, speed1, position1);
    position1 = result1.position;
    speed1 = result1.speed;
    
    let result2 = moveBall(ball2, speed2, position2);
    position2 = result2.position;
    speed2 = result2.speed;
    
    let result3 = moveBall(ball3, speed3, position3);
    position3 = result3.position;
    speed3 = result3.speed;
    
    let result4 = moveBall(ball4, speed3, position4);
    position4 = result4.position;
    speed4 = result4.speed;
  }
  setInterval(animationBall, 530)
});
