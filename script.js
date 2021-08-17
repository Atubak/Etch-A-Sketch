let drawingArea = document.querySelector('.drawingArea');

function createPixels() {
    for (let i = 0; i < 256; i++) {    
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.textContent = 'a';


        drawingArea.appendChild(pixel);
    }
};

createPixels();