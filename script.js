function svgmove(){
    anime({
        targets:'#demo-svg path',
        strokeDashoffset:[anime.setDashoffset,0],
        easing:'easeInOutQuad',
        duration:5000,
        direction:'alternate',
        loop:true,
    });
}

let svg=document.querySelector("#demo-svg");
window.addEventListener('load',function(){
  svgmove();  
})