function openMenu(){
    document.getElementById(`sideMenu`).style.marginRight = 0;
    document.body.style.backgroundColor = `rgba(24, 14, 13, 0.18)`;

}

function closeMenu(){
    document.getElementById(`sideMenu`).style.marginRight = -80;
    document.body.style.backgroundColor = `transparent`;
}
var startingX, startingY, movingX , movingY ;
function touchStart(evt){
    startingX = evt.touches[0].clientX ;
    startingY = evt.touches[0].clientY ;
}
function touchmove(evt){
    movingX = evt.touches[0].clientX ;
    movingY = evt.touches[0].clientY ;
}
function touchend(evt){
    if(startingX+100 < movingX){
        console.log('right');
        closeMenu();

} else if(startingX-100 > movingX){
        console.log('left');
        openMenu();

 }
}