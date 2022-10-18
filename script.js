const slidingLeft = document.querySelector('#device-left');
const slidingRight = document.querySelector('#device-right');

window.addEventListener('scroll', () =>{
    const{scrollTop, clientHeight} = document.documentElement;
    const TopSlidingLeftToTopViewport = slidingLeft.getBoundingClientRect().top;
    const TopSlidingRightToTopViewport = slidingRight.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + TopSlidingLeftToTopViewport).toFixed()-clientHeight *0.80){
        slidingLeft.classList.add('active-left');
    }
    if(scrollTop > (scrollTop + TopSlidingRightToTopViewport).toFixed()-clientHeight *0.80){
        slidingRight.classList.add('active-right');
    }
})