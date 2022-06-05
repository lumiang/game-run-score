const darth_vader = document.querySelector('.darth-vader');
const x_wing = document.querySelector('.x-wing');

const jump = () => {
 darth_vader.classList.add('jump');

 setTimeout(() => {

    darth_vader.classList.remove('jump');

 }, 1000);
}

const loop = setInterval(() => {

   const x_wingPosition = x_wing.offsetLeft;
   const darth_vaderPosition = +window.getComputedStyle(darth_vader).bottom.replace('px', '')

   if (x_wingPosition <= 125 && x_wingPosition > 0 && darth_vaderPosition < 50) {

     x_wing.style.animation = 'none';
     x_wing.style.left = `${x_wingPosition}px`;

     darth_vader.style.animation = 'none';
     darth_vader.style.bottom = `${darth_vaderPosition}px`;

     darth_vader.src = './imagens/morte-darth-vader.gif';

   }

}, 10);

document.addEventListener('keydown' , jump);