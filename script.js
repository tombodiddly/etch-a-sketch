let gameboard = document.getElementById('gameboard');
let height = 500;
let width = height;
gameboard.style.height = height+'px';
gameboard.style.width = width+'px'


let sliderRange = document.getElementById('sliderRange');
let sliderCurrentValue = document.getElementById('sliderCurrentValue');
sliderCurrentValue.textContent = 'Grid Size: '+sliderRange.value;
let gridSize = sliderRange.value;



//set button controls to allow switching fill modes
let classic = document.getElementById('classic');
let opacity = document.getElementById('opacity');
let rainbow = document.getElementById('rainbow');

//set default square fill mode to classic
let mode = 'black';
classic.className = "activeButton";
//classic.style.backgroundColor = 'red';

const options = document.getElementById('options');
options.addEventListener('click',(event)=>{
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton){
        return;
    }
    if(event.target.id === 'classic'){
        mode = 'black';
        classic.className = "activeButton";
        opacity.className = "none";
        rainbow.className = "none";
    }else if(event.target.id === 'opacity'){
        mode = 'transparent';
        classic.className = "none";
        opacity.className = "activeButton";
        rainbow.className = "none";
    }else if(event.target.id === 'rainbow'){
        mode = randomColor();
        classic.className = "none";
        opacity.className = "none";
        rainbow.className = "rainbowButton";
    }
})

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }


//main grid build function
function grid (gridSize){
    for(let i = 0; i < gridSize ** 2; i++){
        let square = document.createElement('div');
        square.style.height = height/gridSize+'px';
        square.style.width = width/gridSize+'px';
        square.style.backgroundColor = 'white';
        square.style.border = '1px solid rgb(0, 0, 0,.1)'
        document.getElementById('gameboard').appendChild(square);
        gameboard.style.gridTemplateColumns = 'repeat('+gridSize+','+(width/gridSize)+'px)';
        gameboard.style.gridTemplateRows = 'repeat('+gridSize+','+(height/gridSize)+'px)';
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = mode;
        })   
    }
}
grid(gridSize);


//function to clear all divs before drawing new grid
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


//Slider change draws new grid at new size
sliderRange.addEventListener('change', ()=>{
    sliderCurrentValue.textContent = 'Grid Size: '+ sliderRange.value;
    gridSize = sliderRange.value;
    removeAllChildNodes(gameboard);
    let rand = Math.floor(Math.random() * 100);
    gameboard.style.backgroundImage = `url(https://picsum.photos/500?random=${rand})`
    grid(gridSize);
})


//clear changes button draws new blank grid
let clearChanges = document.getElementById('clearChanges');
clearChanges.addEventListener('click', () => {
    sliderRange.value = 16;
    sliderCurrentValue.textContent = 'Grid Size: '+ sliderRange.value;
    gridSize = 16
    removeAllChildNodes(gameboard);
    let rand = Math.floor(Math.random() * 100);
    gameboard.style.backgroundImage = `url(https://picsum.photos/500?random=${rand})`
    grid(gridSize);
})
