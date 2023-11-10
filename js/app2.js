// document.querySele('#app2').innerHTML = '<p>Contenido de la Ap 2</p>';
// alert(); Para saber si el script esta siendo llamado
//armar todas las estrucutras que guardarn la informacion
let arrayPalabras = ["HOSPITAL", "FIEBRE", "HERIDA", "DOLOR", "INYECCION", "OPERACION"];

//un arreglo de las ayudas
let ayudas = ["Esta seña la utilizan para referirse a un lugar",
    "Esta seña la utilizan cuando tienen gripe",
    "Esta seña la utilizan cuando se lastiman",
    "Esta seña la utilizan cuando sufren",
    "Esta seña la utilizan cuando necesitan aliviarse rapido",
    "Esta seña la utilizan cuando van al hospital"];

let dirVideos = ['videos-senas/hospital.mp4',
    'videos-senas/fiebre.mp4',
    'videos-senas/herida.mp4',
    'videos-senas/dolor.mp4',
    'videos-senas/inyeccion.mp4',
    'videos-senas/operacion.mp4'];

//variable que guarda la cantidad de palabras jugadas
let cantPalabrasJugadas = 0;

//variable que contiene la cantidad de intentos restantes
let intentosRestantes = 5;

let posActual;

//variable que guardara la palabra jugada para separarla en letras
let arrayPalabraActual = [];

let cantidadAcertadas = 0;

//guardar los divs para mostrar las letras acertadas
let divsPalabraActual = [];

//variable que almacena el numero de letras de la palabra que debe acertar
let totalQueDebeAcertar;

//AÑADIENDO VIDEO
const videoSenaGame2 = document.getElementById("game2-video");

function cargarNuevaPalabra() {

    cantPalabrasJugadas++; //se aumenta la cantidad de palabras jugadas cada vez que llama a la función
    // console.log("palabras:" + arrayPalabras.length);
    // console.log("palabras jugadas" + cantPalabrasJugadas);
    // if (cantPalabrasJugadas > arrayPalabras.length) {
    //MODIFICANDO EL IF PARA QUE SOLO SE REFERENCIE LA CANTIDAD DE PALABRAS 
    if (cantPalabrasJugadas == 6) {
        //PASAR A LA APLICACION SIGUIENTE #####
        const nextButtonGame2 = document.getElementById('next-button');
        nextButtonGame2.click();
        //###################
        //CUANDO SE JUGARON TODAS LAS PALABRAS SE VUELVE A CARGAR
        arrayPalabras = ["HOSPITAL", "FIEBRE", "HERIDA", "DOLOR", "INYECCION", "OPERACION"];
        ayudas = ["Esta seña la utilizan para referirse a un lugar",
            "Esta seña la utilizan cuando tienen gripe",
            "Esta seña la utilizan cuando se lastiman",
            "Esta seña la utilizan cuando sufren",
            "Esta seña la utilizan cuando necesitan aliviarse rapido",
            "Esta seña la utilizan cuando van al hospital"];
    }

    posActual = Math.floor(Math.random() * arrayPalabras.length);
    let palabra = arrayPalabras[posActual];
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;

    //guardar la palabra que esta en formato string en un arreglo

    arrayPalabraActual = palabra.split('');
    // console.log(arrayPalabraActual);

    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    for (i = 0; i < palabra.length; i++) {
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }
    //Seleccionar todos los div de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    intentosRestantes = 5;

    // AÑADIENDO VIDEO-------------------------------------------------------
    videoSenaGame2.innerHTML = '';
    const vidGame2 = document.createElement("video");
    // vid.src = currentQuestion.video";
    // vid.src = `<video src="${currentQuestion.video} width="420" height="240" controls>`
    vidGame2.src = dirVideos[posActual];
    vidGame2.width = 420;
    vidGame2.height = 240;
    vidGame2.controls = true;
    // console.log(currentQuestion.video);
    videoSenaGame2.appendChild(vidGame2);
    // document.getElementById("game2-video").innerHTML = dirVideos[posActual];
    //-------------------------------------------------------------------------
    document.getElementById("intentos").innerHTML = intentosRestantes;
    //cambia dinamicamente la ayuda de acuerdo a la palabra del array
    document.getElementById("ayuda").innerHTML = ayudas[posActual];
    //elimina las palabras y ayudas de los array
    arrayPalabras.splice(posActual, 1);
    ayudas.splice(posActual, 1);
    dirVideos.splice(posActual, 1);
}

document.addEventListener("keydown", event => {
    if (isLetter(event.key)) {
        let acerto = false;

        for (i = 0; i < arrayPalabraActual.length; i++) {
            if (arrayPalabraActual[i] == event.key.toUpperCase()) {
                divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                acerto = true;
                cantidadAcertadas = cantidadAcertadas + 1;
            }
        }
        if (acerto == true) {
            if (totalQueDebeAcertar == cantidadAcertadas) {
                for (i = 0; i < arrayPalabraActual.length; i++) {
                    divsPalabraActual[i].className = "letra pintar";
                }
            }
        } else {
            intentosRestantes = intentosRestantes - 1;
            document.getElementById("intentos").innerHTML = intentosRestantes;
            if (intentosRestantes <= 0) {
                for (i = 0; i < arrayPalabraActual.length; i++) {
                    divsPalabraActual[i].className = "letra pintarError";
                }
                document.getElementById("intentos").innerHTML = "Pasa a la siguiente palabra";
            }
        }
        document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
    }
})

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

cargarNuevaPalabra();