let gameboard = document.getElementById('gameboard');
let height = 500;
let width = height;
gameboard.style.height = height+'px';
gameboard.style.width = width+'px'


let sliderRange = document.getElementById('sliderRange');
let sliderCurrentValue = document.getElementById('sliderCurrentValue');
sliderCurrentValue.textContent = sliderRange.value;
let gridSize = sliderRange.value;


function grid (gridSize){
    for(let i = 0; i < gridSize ** 2; i++){
        let square = document.createElement('div');
        //square.style.border = '1px solid rgba(0, 0, 0, .3)';
        square.style.height = height/gridSize+'px';
        square.style.width = width/gridSize+'px';
        document.getElementById('gameboard').appendChild(square);
        gameboard.style.gridTemplateColumns = 'repeat('+gridSize+','+(width/gridSize)+'px)';
        gameboard.style.gridTemplateRows = 'repeat('+gridSize+','+(height/gridSize)+'px)';
        
    }
}
grid(gridSize);


function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


sliderRange.addEventListener('change', ()=>{
    sliderCurrentValue.textContent = sliderRange.value;
    gridSize = sliderRange.value;
    //remove all divs from gameboard
    removeAllChildNodes(gameboard);
    grid(gridSize);
})




