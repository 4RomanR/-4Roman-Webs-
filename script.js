/*VAR LET CONST*/


//BURGER
const burgerMenu = document.querySelector('.burger-nav-content');
const imgBurger  = document.querySelector('.burger-img');

imgBurger.addEventListener('click', openBurgerMenu);

function openBurgerMenu (){
    burgerMenu.classList.toggle('inactive');
}

//CTA
const cta1 = document.querySelector('.cta-change-1');
const cta2 = document.querySelector('.cta-change-2');
const cta3 = document.querySelector('.cta-change-3');

const ctaGreen = document.querySelector('.cta-green-content');
const ctaRed   = document.querySelector('.cta-red-content');
const ctaBlue  = document.querySelector('.cta-blue-content');

cta1.addEventListener('mouseover', openCta);

    function openCta (){
        ctaGreen.classList.remove('inactive-cta');
        ctaRed.classList.add('inactive-cta');
        ctaBlue.classList.add('inactive-cta');
    };

cta2.addEventListener('mouseover', openCta);

    function openCta (){
        ctaRed.classList.remove('inactive-cta');
        ctaGreen.classList.add('inactive-cta');
        ctaBlue.classList.add('inactive-cta');
    };


cta3.addEventListener('mouseover', openCta);

    function openCta (){
        ctaBlue.classList.remove('inactive-cta');
        ctaRed.classList.add('inactive-cta');
        ctaGreen.classList.add('inactive-cta');
    };
    