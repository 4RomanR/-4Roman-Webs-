(function (){

//BURGER
var burgerMenu = document.querySelector('.burger-nav-content');
var imgBurger  = document.querySelector('.burger-img');

imgBurger.addEventListener('click', openBurgerMenu);
closeOnBody.addEventListener('click', closeBurgerMenu);
function openBurgerMenu (){
    burgerMenu.classList.toggle('inactive');
    
}

}())


//CTA

const ctaChange = document.querySelector('.main-cta-container');


const cta1 = document.querySelector('.cta-change-1');
const cta2 = document.querySelector('.cta-change-2');
const cta3 = document.querySelector('.cta-change-3');

const ctaGreen = document.querySelector('.img-content-green');
const ctaRed   = document.querySelector('.img-content-red');
const ctaBlue  = document.querySelector('.cta-blue-content');

cta1.addEventListener('mouseover', openCta);

    function openCta (){
        ctaGreen.classList.remove('inactcta');
        ctaRed.classList.add('inactcta');
        ctaBlue.classList.add('inactive-cta');
    };

cta2.addEventListener('mouseover', openCta);

    function openCta (){
        ctaRed.classList.remove('inactcta');
        ctaGreen.classList.add('inactcta');
        ctaBlue.classList.add('inactive-cta');
    };


cta3.addEventListener('mouseover', openCta);

    function openCta (){
        ctaBlue.classList.remove('inactive-cta');
        ctaRed.classList.add('inactive-cta');
        ctaGreen.classList.add('inactive-cta');
    };