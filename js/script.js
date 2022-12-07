const slidingLeft = document.querySelector('#device-left');
const slidingRight = document.querySelector('#device-right');
const phoneRight1 = document.querySelector('.phone1-right');
const phoneLeft1 = document.querySelector('.phone1-left');
const macRight1 = document.querySelector('.mac1-right');
const macLeft1 = document.querySelector('.mac1-left');
const pp = document.querySelector('#pp');

window.addEventListener('scroll', () =>{
    const{scrollTop, clientHeight} = document.documentElement;
    const TopSlidingLeftToTopViewport = slidingLeft.getBoundingClientRect().top;
    const TopSlidingRightToTopViewport = slidingRight.getBoundingClientRect().top;
    const TopPpToTopvwp = pp.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + TopSlidingLeftToTopViewport).toFixed()-clientHeight *0.70){
        slidingLeft.classList.add('active-overall-devices');
        phoneLeft1.classList.add('active-specific-devices');
        macLeft1.classList.add('active-specific-devices');
    }
    if(scrollTop > (scrollTop + TopSlidingRightToTopViewport).toFixed()-clientHeight *0.70){
        slidingRight.classList.add('active-overall-devices');
        phoneRight1.classList.add('active-specific-devices');
        macRight1.classList.add('active-specific-devices');
    }
})

document.addEventListener("DOMContentLoaded", ready);

function ready(){
    pp.classList.add('pp-onload');
}

function sendbtn(){
    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    });
}