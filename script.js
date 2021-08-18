let drawingArea = document.querySelector('.drawingArea');


function createOneSixGrid() {

    let oneSix = document.createElement('div'); 
    oneSix.classList.add('oneSix')

    for (let i = 0; i < 16*16; i++) {   
        let pixel = document.createElement('div');

        pixel.classList.add('pixel');

        oneSix.appendChild(pixel);
    }
   
    drawingArea.appendChild(oneSix);

};

createOneSixGrid();





function draw(e) {
    e.target.style.cssText = "background-color: black";
}


let allPixels = document.querySelectorAll('.pixel');
allPixels.forEach(pixel => pixel.addEventListener("mouseenter", draw));










function clearGrid() {
    allPixels.forEach(pixel => pixel.style.cssText = "background-color: ");
}


let clearBtn = document.querySelector('.clearButton');
clearBtn.addEventListener('click', clearGrid);








function newInputtedGrid() {
    drawingArea.innerHTML = ""; //deletes the previous Grid div

    let gridResInput = document.querySelector('.gridResInput').value;

    console.log(gridResInput);


    function createNewGrid() {

        let grid = document.createElement('div'); 
        grid.classList.add('grid')
        grid.style.cssText = `grid-template-columns: repeat(${gridResInput}, 1fr);
        grid-template-rows: repeat(${gridResInput}, 1fr)`;    



        for (let i = 0; i < gridResInput*gridResInput; i++) {   
            let pixel = document.createElement('div');
    
            pixel.classList.add('pixel');
    
            grid.appendChild(pixel);
        }
       
        drawingArea.appendChild(grid);
    
    };
    
    createNewGrid();
    
  // HAD TO REDECLARE THESE VARIABLE AND FUNCTIONS, NOT SURE WHY. (it might not recognize the .pixel class anymore for these new divs)
  
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(pixel => pixel.addEventListener("mouseenter", draw));



    function clearGrid() {
        allPixels.forEach(pixel => pixel.style.cssText = "background-color: ");
    }
    

    let clearBtn = document.querySelector('.clearButton');
    clearBtn.addEventListener('click', clearGrid);
    

}




let gridResBtn = document.querySelector('.gridResBtn');
gridResBtn.addEventListener('click', newInputtedGrid);