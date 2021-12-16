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
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = 'black';
        })

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
    removeAllChildNodes(gameboard);
    grid(gridSize);
})



let clearChanges = document.getElementById('clearChanges');
clearChanges.addEventListener('click', () => {
    sliderRange.value = 16;
    sliderCurrentValue.textContent = sliderRange.value;
    gridSize = 16
    removeAllChildNodes(gameboard);
    grid(gridSize);
    
})
