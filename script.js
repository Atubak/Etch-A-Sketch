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

