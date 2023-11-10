// //--------------AGREGA ESTILOS Y SCRIPTS---------------------------------
// // En el archivo JavaScript principal (script.js)
// const appContainers = document.querySelectorAll('.app');
// const nextButton = document.querySelector('#next-button');
// let currentAppIndex = 0;

// function loadAppScripts(appIndex) {
//     const appScript = document.createElement('script');
//     appScript.src = `js/app${appIndex + 1}.js`;
//     document.body.appendChild(appScript);

//     const appLink = document.createElement('link');
//     appLink.rel = 'stylesheet';
//     appLink.type = 'text/css';
//     appLink.href = `estilos/style${appIndex + 1}.css`;
//     document.head.appendChild(appLink);
// }

// function startNextApp() {
//     if (currentAppIndex < appContainers.length) {
//         loadAppScripts(currentAppIndex);
//         appContainers[currentAppIndex].style.display = 'block';
//         if (currentAppIndex > 0) {
//             appContainers[currentAppIndex - 1].style.display = 'none';
//         }
//         currentAppIndex++;
//     }
// }

// // Event listener para cargar y mostrar la primera aplicación al cargar la página
// document.addEventListener('DOMContentLoaded', () => {
//     startNextApp();
// });

// // Event listener para cargar y mostrar la siguiente aplicación al hacer clic en el botón "Siguiente"
// nextButton.addEventListener('click', () => {
//     startNextApp();
// });


document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const appStyles = document.getElementById('app-styles');
    const nextButton = document.getElementById('next-button');

    let currentAppIndex = 0;

    const apps = document.querySelectorAll('.app');

    function hideAllApps() {
        apps.forEach(app => {
            app.style.display = 'none';
        });
    }

    function showApp(appIndex) {
        hideAllApps();
        apps[appIndex].style.display = 'block';
    }

    function loadAppStyles(appIndex) {

        const appScript = document.createElement('script');
        appScript.src = `js/app${appIndex + 1}.js`;
        document.body.appendChild(appScript);

        // const questionScript = document.createElement('script');
        // questionScript = 'js/question.js';
        // document.body.appendChild(questionScript);
        // appScript.src = 'js/question.js';
        // document.body.appendChild(questionScript);

        const appStyles = document.createElement('link');
        appStyles.rel = 'stylesheet';
        appStyles.type = 'text/css';
        appStyles.href = `estilos/style${appIndex + 1}.css`;
        document.head.appendChild(appStyles);
    }

    function startNextApp() {
        if (currentAppIndex < apps.length - 1) {
            currentAppIndex++;
            showApp(currentAppIndex);
            loadAppStyles(currentAppIndex);
        } else {
            // Se ha completado el flujo de aplicaciones.
            alert('¡Has completado todas las aplicaciones!');
        }
        // currentAppIndex++;//AUMENTADO AL archivo JS ORIGINAL
    }

    nextButton.addEventListener('click', () => {
        startNextApp();
    });

    showApp(currentAppIndex);
    loadAppStyles(currentAppIndex);
    console.log(currentAppIndex);
});




























// // En el archivo JavaScript principal (script.js)
// const appContainers = document.querySelectorAll('.app');

// function loadAppScript(appIndex) {
//     const script = document.createElement('script');
//     script.src = `js/app${appIndex + 1}.js`;
//     script.onload = () => {
//         appContainers[appIndex].innerHTML = getAppContent(appIndex);
//     };
//     document.body.appendChild(script);
// }

// function getAppContent(appIndex) {
//     return `<p>Contenido de la Aplicación ${appIndex + 1}</p>`;
// }

// // Event listeners para cargar los scripts de aplicaciones
// document.querySelector('a[href="#app1"]').addEventListener('click', () => {
//     loadAppScript(0);
// });

// document.querySelector('a[href="#app2"]').addEventListener('click', () => {
//     loadAppScript(1);
// });

// document.querySelector('a[href="#app3"]').addEventListener('click', () => {
//     loadAppScript(2);
// });


//----------------------------

// // En el archivo JavaScript principal (script.js)
// const appContainers = document.querySelectorAll('.app');
// const nextButton = document.querySelector('#next-button');
// let currentAppIndex = 0;

// function loadAppScript(appIndex) {
//     const script = document.createElement('script');
//     script.src = `js/app${appIndex + 1}.js`; // Ruta a la carpeta "js"
//     script.onload = () => {
//         appContainers[appIndex].style.display = 'block';
//         if (appIndex > 0) {
//             appContainers[appIndex - 1].style.display = 'none';
//         }
//     };
//     document.body.appendChild(script);
// }

// function startNextApp() {
//     if (currentAppIndex < appContainers.length) {
//         loadAppScript(currentAppIndex);
//         currentAppIndex++;
//     }
// }

// // Event listener para cargar y mostrar la primera aplicación al cargar la página
// document.addEventListener('DOMContentLoaded', () => {
//     startNextApp();
// });

// // Event listener para cargar y mostrar la siguiente aplicación al hacer clic en el botón "Siguiente"
// nextButton.addEventListener('click', () => {
//     startNextApp();
// });

//--------------AGREGA ESTILOS---------------------------------
// En el archivo JavaScript principal (script.js)
// const appContainers = document.querySelectorAll('.app');
// const nextButton = document.querySelector('#next-button');
// let currentAppIndex = 0;

// function loadAppStyles(appIndex) {
//     const styleLink = document.createElement('link');
//     styleLink.setAttribute('rel', 'stylesheet');
//     styleLink.setAttribute('type', 'text/css');
//     styleLink.setAttribute('href', `estilos/style${appIndex + 1}.css`);
//     document.head.appendChild(styleLink);
// }

// function startNextApp() {
//     if (currentAppIndex < appContainers.length) {
//         loadAppStyles(currentAppIndex);
//         appContainers[currentAppIndex].style.display = 'block';
//         if (currentAppIndex > 0) {
//             appContainers[currentAppIndex - 1].style.display = 'none';
//         }
//         currentAppIndex++;
//     }

// }

// // Event listener para cargar y mostrar la primera aplicación al cargar la página
// document.addEventListener('DOMContentLoaded', () => {
//     startNextApp();

// });

// // Event listener para cargar y mostrar la siguiente aplicación al hacer clic en el botón "Siguiente"
// nextButton.addEventListener('click', () => {
//     startNextApp();

// });

