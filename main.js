const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");

function changeLights(){
    setTimeout(() => {
        redLight();
        setTimeout(() => {
            yellowLight();
            setTimeout(() => {
                turnOffLights();
                greenLight();
            }, 4000);
        }, 4000);
    }, 8000);
}

function greenLight(){
    green.classList.add('active');
    setTimeout(() => {
        green.classList.remove('active');
    }, 6000);
}

function yellowLight() {
    const interval = setInterval(() => {
      yellow.classList.toggle('active');
    }, 500); 
  
    setTimeout(() => {
      clearInterval(interval);
      yellow.classList.remove('active');
    }, 4000); 
}

function redLight(){
    red.classList.add('active');
    setTimeout(() => {
        red.classList.remove('active');
    }, 8000);
}

function turnOffLights(){
    red.classList.remove('active');
    yellow.classList.remove('active');
}

changeLights();
setInterval(changeLights, 16000);