// document.querySelector('#app1').innerHTML = '<p>Contenido de la Aplicación 1</p>';

//Initial References
let draggableObjects;
let dropPoints;

const contenedorg1 = document.getElementById("container-g1");

const startButton = document.getElementById("start");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const dragContainer = document.querySelector(".draggable-objects");
const dropContainer = document.querySelector(".drop-points");
const data = [
    // "baile",
    "dolor",
    "fiebre",
    "herida",
    "hospital",
    "inyeccion",
    "operacion",
    // "georgia",
    // "germany",
    // "hong-kong",
];
let directoryVideos = ['videos-senas/hospital.mp4',
    'videos-senas/fiebre.mp4',
    'videos-senas/herida.mp4',
    'videos-senas/dolor.mp4',
    'videos-senas/inyeccion.mp4',
    'videos-senas/operacion.mp4'];
let directoryVideosBW = ['videos-senas-bw/hospital-bw.mp4',
    'videos-senas-bw/fiebre-bw.mp4',
    'videos-senas-bw/herida-bw.mp4',
    'videos-senas-bw/dolor-bw.mp4',
    'videos-senas-bw/inyeccion-bw.mp4',
    'videos-senas-bw/operacion-bw.mp4'];
let textoVideos = ['HOSPITAL:',
    'FIEBRE:',
    'HERIDA:',
    'DOLOR:',
    'INYECCION:',
    'OPERACION:'];
let descripcionVideos = ['Haga una cruz en la parte inferior de su hombro',
    'Toque su mejilla con la parte posterior de su mano con un gesto facial de preocupacion',
    'Con un dedo de su mano, toque la parte posterior de su mano, y haga una linea en su mano hacia usted',
    'Acerque su dedo pulgar y medio, una y otra vez',
    'Con su dedo indice haga una linea hacia usted, sobre la cara interior de su antebrazo',
    'Con el pulgar de su mano, haga una línea hacia usted en la palma de su mano'
];
let positionVideo = 0;
contenedorVidInduccion = document.querySelector(".induccion-container");
contenedorIndVideo = document.querySelector(".induccion-videos");
// contenedorIndTexto = document.querySelector(".induccion-textos");
contenedorIndTexto = document.querySelector(".termino-sena");
contenedorIndDescripcion = document.querySelector(".descripcion-sena");
// contenedorIndImagegBW = document.querySelector(".imagen-bw-sena");
//--------------
siguienteIndButton = document.getElementById("flechaSiguiente");
anteriorIndButton = document.getElementById("flechaAnterior");
siguienteIndButton.addEventListener("click", pasarSiguiente);
anteriorIndButton.addEventListener("click", pasarAnterior);

function pasarSiguiente() {
    // contenedorVidInduccion.innerHTML = '';

    // positionVideo = (positionVideo - 1 + dirVideos.length) % dirVideos.length;
    if (positionVideo < 5) {
        positionVideo++;
        // console.log("sig: " + positionVideo);
        actualizarContenido();
    } else {
        positionVideo = 5;
        // console.log("else sig: " + positionVideo);
        actualizarContenido();
    }
}
function pasarAnterior() {
    if (positionVideo > 0) {
        positionVideo--;
        // console.log("ant: " + positionVideo);
        actualizarContenido();
    } else {
        positionVideo = 0;
        // console.log(" else ant: " + positionVideo);
        actualizarContenido();
    }

}
function actualizarContenido() {
    contenedorIndVideo.innerHTML = '';
    contenedorIndTexto.innerHTML = '';
    contenedorIndDescripcion.innerHTML = '';
    // contenedorIndImagegBW.innerHTML = '';
    contenedorIndVideo.innerHTML = `<video src="${directoryVideosBW[positionVideo]}" width="420" height="240" controls />`;
    contenedorIndTexto.innerHTML = `<p>${textoVideos[positionVideo]}</p>`;
    contenedorIndDescripcion.innerHTML = `<p>${descripcionVideos[positionVideo]}</p>`;
    // contenedorIndImagegBW.innerHTML = `<img src="imagenes-senas-bw/${data[positionVideo]}-bw.png" />`;
    // positionVideo++;
}

let deviceType = "";
let initialX = 0,
    initialY = 0;
let currentElement = "";
let moveElement = false;

//Detect touch device
const isTouchDevice = () => {
    try {
        //We try to create Touch Event (It would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

let count = 0;
let contarTotalEjericio = 0;

//Random value from Array
const randomValueGenerator = () => {
    return data[Math.floor(Math.random() * data.length)];
};

//PASAR A LA APLICACION SIGUIENTE #####
const nextButton = document.getElementById('next-button');
console.log(nextButton);
//###################

//Win Game Display
const stopGame = () => {

    if (contarTotalEjericio === 1) {
        // console.log("hola");
        // dragContainer.classList.add("hide");
        // dropContainer.classList.add("hide");
        // contenedorg1.classList.add("hide");
        nextButton.click();
    } else {
        // contarTotalEjericio++; // Aumenta el contador en uno cuando se hay completado una ronda de 3
        controls.classList.remove("hide");
        startButton.classList.remove("hide");
        dragContainer.classList.add("hide"); //ULTIMO UPDATE
    }
};

//Drag & Drop Functions
function dragStart(e) {
    if (isTouchDevice()) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        //Start movement for touch
        moveElement = true;
        currentElement = e.target;
    } else {
        //For non touch devices set data to be transfered
        e.dataTransfer.setData("text", e.target.id);
        // console.log("target-id: " + e.dataTransfer.getData("text"));
    }
}

//Events fired on the drop target
function dragOver(e) {
    e.preventDefault();
}

//For touchscreen movement
const touchMove = (e) => {
    if (moveElement) {
        e.preventDefault();
        let newX = e.touches[0].clientX;
        let newY = e.touches[0].clientY;
        let currentSelectedElement = document.getElementById(e.target.id);
        currentSelectedElement.parentElement.style.top =
            currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
        currentSelectedElement.parentElement.style.left =
            currentSelectedElement.parentElement.offsetLeft -
            (initialX - newX) +
            "px";
        initialX = newX;
        initialY - newY;
    }
};

const drop = (e) => {
    e.preventDefault();
    //For touch screen
    if (isTouchDevice()) {
        moveElement = false;
        //Select country name div using the custom attribute
        const currentDrop = document.querySelector(`div[data-id='${e.target.id}']`);
        //Get boundaries of div
        const currentDropBound = currentDrop.getBoundingClientRect();
        //if the position of flag falls inside the bounds of the countru name
        if (
            initialX >= currentDropBound.left &&
            initialX <= currentDropBound.right &&
            initialY >= currentDropBound.top &&
            initialY <= currentDropBound.bottom
        ) {
            currentDrop.classList.add("dropped");
            //hide actual image
            currentElement.classList.add("hide");
            currentDrop.innerHTML = ``;
            //Insert new img element
            currentDrop.insertAdjacentHTML(
                "afterbegin",
                `<img src= "imagenes/${currentElement.id}.jpg">`
                // `<video src="videos-senas/${currentElement.id}.mp4 width="240" height="240" controls>`
            );
            count += 1;
        }
    } else {
        //Access data
        const draggedElementData = e.dataTransfer.getData("text");

        // console.log(e.dataTransfer.getData("text"));
        //Get custom attribute value
        const droppableElementData = e.target.getAttribute("data-id");
        // console.log(droppableElementData);
        if (draggedElementData === droppableElementData) {
            const draggedElement = document.getElementById(draggedElementData);
            //dropped class
            e.target.classList.add("dropped");
            //hide current img
            draggedElement.classList.add("hide");
            //draggable set to false
            draggedElement.setAttribute("draggable", "false");
            e.target.innerHTML = ``;
            //insert new img
            e.target.insertAdjacentHTML(
                "afterbegin",
                // `<video src="videos-senas/${draggedElementData}.mp4" width="240" height="240" controls>`
                `<img src="imagenes/${draggedElementData}.jpg">`


            );
            count += 1;
        }
    }
    //Win
    if (count == 3) {
        //CAMBIANDO DE BOTON A AUTOMATICAMENTE VOLVER A CARGAR EL JUEGO
        // result.innerText = `You Won!`;
        // stopGame();
        contarTotalEjericio++;
        startButton.click();
        //SALTANDO LA FUNCION STOPGAME Y PASANDO AL SIGUIENTE EJERCICIO
        if (contarTotalEjericio === 2) {
            nextButton.click();
        }
    }
};

//Creates flags and countries
const creator = () => {
    dragContainer.innerHTML = "";
    dropContainer.innerHTML = "";
    let randomData = [];
    //for string random values in array
    for (let i = 1; i <= 3; i++) {
        let randomValue = randomValueGenerator();
        if (!randomData.includes(randomValue)) {
            randomData.push(randomValue);
        } else {
            //If value already exists then decrement i by 1
            i -= 1;
        }
    }
    for (let i of randomData) {
        const flagDiv = document.createElement("div");
        flagDiv.classList.add("draggable-image");
        flagDiv.setAttribute("draggable", true);
        if (isTouchDevice()) {
            flagDiv.style.position = "absolute";
        }
        flagDiv.innerHTML = `<video src="videos-senas/${i}.mp4" id="${i}" draggable="true" width="240" height="240" controls>`;
        // console.log(i);
        // flagDiv.innerHTML = `<img src="imagenes/${i}.jpg" id="${i}">`;
        dragContainer.appendChild(flagDiv);
    }
    //Sort the array randomly before creating country divs
    randomData = randomData.sort(() => 0.5 - Math.random());
    for (let i of randomData) {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `<div class='countries' data-id='${i}'>
    ${i.charAt(0).toUpperCase() + i.slice(1).replace("-", " ")}
    </div>
    `;
        dropContainer.appendChild(countryDiv);
    }
};

//Start Game
startButton.addEventListener(
    "click",
    (startGame = async () => {
        currentElement = "";
        controls.classList.add("hide");
        startButton.classList.add("hide");
        dragContainer.classList.remove("hide");// ULTIMO UPDATE
        //This will wait for creator to create the images and then move forward
        await creator();
        count = 0;
        dropPoints = document.querySelectorAll(".countries");
        draggableObjects = document.querySelectorAll(".draggable-image");

        //Events
        draggableObjects.forEach((element) => {
            element.addEventListener("dragstart", dragStart);
            //for touch screen
            element.addEventListener("touchstart", dragStart);
            element.addEventListener("touchend", drop);
            element.addEventListener("touchmove", touchMove);
        });
        dropPoints.forEach((element) => {
            element.addEventListener("dragover", dragOver);
            element.addEventListener("drop", drop);
        });
    })
);