const littleSquare=document.querySelector('.little')

let position=0;
function move (){
    position++
    if(position>450){
        return
    }
    littleSquare.style.left=position+'px'
    animation()
}
function animation () {
    setTimeout(move,10)
}
animation()
