
let openMenu = document.querySelector('#menuBtn');



function clickMenu(){

    let navMenu = document.querySelector('#navMenu');
    let overlayBlur = document.querySelector('#blurOvelay');
    


    navMenu.classList.toggle('left-[0px]');
    overlayBlur.classList.toggle('left-[0px]');
}
openMenu.addEventListener('click',clickMenu);