// document.querySelector('#app3').innerHTML = '<p>Contenido 3</p>';
// import { quiz } from './question.js';
// console.log(quiz);
const quiz = [
    {
        q: 'Elija la imagen correspondiente a la seña',
        options: ['imagenes/hospital.jpg', 'imagenes/casa.jpg', 'imagenes/deportista.jpg', 'imagenes/inyeccion.jpg'],
        answer: 0,
        video: 'videos-senas/hospital.mp4'
    },
    {
        q: 'Elija la imagen correspondiente a la seña',
        options: ['imagenes/hospital.jpg', 'imagenes/dolor.jpg', 'imagenes/hamburguesa.jpg', 'imagenes/inyeccion.jpg'],
        answer: 1,
        video: 'videos-senas/dolor.mp4'
    },
    {
        q: 'Elija la imagen correspondiente a la seña',
        options: ['imagenes/fiebre.jpg', 'imagenes/casa.jpg', 'imagenes/deportista.jpg', 'imagenes/inyeccion.jpg'],
        answer: 0,
        video: 'videos-senas/fiebre.mp4'
    },
    {
        q: 'Elija la imagen correspondiente a la seña',
        options: ['imagenes/deportista.jpg', 'imagenes/casa.jpg', 'imagenes/herida.jpg', 'imagenes/inyeccion.jpg'],
        answer: 2,
        video: 'videos-senas/herida.mp4'
    },
    {
        q: 'Elija la imagen correspondiente a la seña',
        options: ['imagenes/bombero.jpg', 'imagenes/casa.jpg', 'imagenes/deportista.jpg', 'imagenes/inyeccion.jpg'],
        answer: 3,
        video: 'videos-senas/inyeccion.mp4'
    },
    {
        q: 'Elija la imagen correspondiente a la seña',
        options: ['imagenes/hospital.jpg', 'imagenes/casa.jpg', 'imagenes/operacion.jpg', 'imagenes/inyeccion.jpg'],
        answer: 2,
        video: 'videos-senas/operacion.mp4'
    }
]

const questionNumber = document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionContainer = document.querySelector('.option-container');
const answerIndicatorContainer = document.querySelector('.answer-indicator');
const homeBox = document.querySelector('.home-box');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
//-----------
const stepBoxContainer = document.querySelector('.step-box');
//-----------
// Agregar video
const videoSena = document.querySelector('.question-video');
// console.log(videoSena);
//-----------
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

let availableVideos = [];

let correctAnswers = 0;
let attempt = 0;

let step = 0;
// push las questions into dentro del array de availableQuestions 
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }

}

// Setear el number question, la question, y las opciones
function getNewQuestion() {

    // ---Setear el number question
    questionNumber.innerHTML = "Pregunta " + (questionCounter + 1) + " de " + quiz.length;

    // ---Setear el text question
    //      Conseguir(get) una random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    // console.log(currentQuestion);
    questionText.innerHTML = currentQuestion.q;


    // =>>>>>>>>>> VIDEO
    // if (videoSena) {
    //     const vid = document.createElement("video");
    //     vid.src = currentQuestion.video[i];
    //     videoSena.appendChild(vid);
    // }

    //      get the position of 'questionIndex' from 'availableQuestions' array
    const index1 = availableQuestions.indexOf(questionIndex);
    // console.log(index1);
    //      remove la question con el indice de availableQuestions array
    availableQuestions.splice(index1, 1);

    //show question img if 'img' property exists
    if (currentQuestion.hasOwnProperty("img")) {
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
        // console.log("la imagen es:" + currentQuestion.img);
    }

    // ---Setear las opciones
    //      conseguir el lenght de opciones
    const optionLen = currentQuestion.options.length;
    //      push las options en el array availableOptions 
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i);
    }
    // console.log(availableOptions);

    optionContainer.innerHTML = '';

    videoSena.innerHTML = '';

    //animacion
    let animationDelay = 0.15;

    // ---Crear las opciones en html
    for (let i = 0; i < optionLen; i++) {
        //random option
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // console.log("available options: " + availableOptions);
        // console.log("opcion random de opciones: " + optonIndex);

        // get the position of  'optonIndex' from availableOptions        
        const index2 = availableOptions.indexOf(optonIndex);
        // console.log("position de optonIndex de opciones disponibles: " + index2);

        // remove the 'optonIndex' from the availableOptions, so that the option does not repeat
        availableOptions.splice(index2, 1);

        //-----------------------
        const option = document.createElement("div");
        //-----------------------MOSTRAR LA DIRECCION DE LA IMAGEN------------------------------------------------------------------------
        // option.innerHTML = currentQuestion.options[optonIndex];
        //----------------------------------------------------------------------------------
        option.id = optonIndex;

        // console.log("al div: " + option + " se adigno el id: " + optonIndex);

        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");

        const img = document.createElement("img");
        img.src = currentQuestion.options[optonIndex];

        // console.log("indice: " + i);
        // console.log("opcion: " + currentQuestion.options[i]);

        option.appendChild(img);

        // VIDEO
        if (i === 0) {
            // const optionVideo = document.createElement("div");
            // // option.innerHTML = currentQuestion.options[optonIndex];
            // optionVideo.id = optonIndex;
            // optionVideo.style.animationDelay = animationDelay + 's';
            // animationDelay = animationDelay + 0.15;
            // optionVideo.className = "option-video";
            // videoSena.appendChild(optionVideo);
            // optionVideo.setAttribute("onclick", "getResult(this)");

            const vid = document.createElement("video");
            // vid.src = currentQuestion.video";
            // vid.src = `<video src="${currentQuestion.video} width="420" height="240" controls>`
            vid.src = currentQuestion.video;
            vid.width = 420;
            vid.height = 240;
            vid.controls = true;
            // console.log(currentQuestion.video);

            videoSena.appendChild(vid);
        }

    }

    questionCounter++;
}
//get the result of current attempt question
function getResult(element) {
    const id = parseInt(element.id);
    //get the answer comparing the id of clicked option

    // console.log("elegida: " + id);
    // console.log("respuesta: " + currentQuestion.answer);

    if (id === currentQuestion.answer) {
        //set the green color to the correct option
        element.classList.add("correct");
        // add the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
    } else {
        //set the red color to the correct option
        element.classList.add("wrong");
        // add the indicator to wrong mark
        updateAnswerIndicator("wrong");

        // if the answer is correct show the correct option by adding green color to the correct 
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}
//make all the options unclickblee once the user select a option(RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }

}
// Indicador de respuestas
function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';

    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}
//------------------------
function next() {
    if (questionCounter === quiz.length) {
        console.log('quiz over');
        quizOver();
    }
    else {
        getNewQuestion();
    }
}
// --- Result - Caja del result quiz
function quizOver() {
    colorStep(2, 4);
    //hide quiz box
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}
//get the quiz result
function quizResult() {
    resultBox.querySelector('.total-question').innerHTML = quiz.length;
    resultBox.querySelector('.total-attempt').innerHTML = attempt;
    resultBox.querySelector('.total-correct').innerHTML = correctAnswers;
    resultBox.querySelector('.total-wrong').innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector('.percentage').innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector('.total-score').innerHTML = correctAnswers + " / " + quiz.length;
}

//--- Botones TryAgain y GoToHome
function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    colorStep(4, 2);
}

function tryAgainQuiz() {
    colorStep(4, 2);
    //hide the resultBox
    resultBox.classList.add("hide");
    //show the quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome() {
    // hide the result box
    resultBox.classList.add("hide");
    // show the home box
    homeBox.classList.remove("hide");
    resetQuiz();
}

function stepByStep() {
    for (let i = 0; i < 4; i++) {
        const step = document.createElement("div");
        stepBoxContainer.appendChild(step);
    }
}
function colorStep(stepBack, stepForward) {
    // stepBoxContainer.firstChild.classList.add('active');
    stepBoxContainer.children[stepBack].firstChild.classList.remove("active");
    stepBoxContainer.children[stepForward].firstChild.classList.add("active");
}

// ##### STARTING POINT ######

function startQuiz() {

    colorStep(0, 2);
    // // stepBoxContainer.firstChild.classList.add('active');
    // console.log(stepBoxContainer.children[2].firstChild.classList.add("active"));
    //hide home-box
    homeBox.classList.add("hide");
    //show quiz-box
    quizBox.classList.remove("hide");
    // Primero tenemos que setear todas las preguntas en availableQuestions
    setAvailableQuestions();
    // Segundo llamaremos a la funcion getNewQuestion
    getNewQuestion();
    //to create indicators of answers
    answerIndicator();
}

window.onload = function () {
    homeBox.querySelector('.total-questions').innerHTML = quiz.length;
    // stepByStep();
}

// window.onload = function () {
//     // Primero tenemos que setear todas las preguntas en availableQuestions
//     setAvailableQuestions();
//     // Segundo llamaremos a la funcion getNewQuestion
//     getNewQuestion();

//     //to create indicators of answers
//     answerIndicator();
// }
