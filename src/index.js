import { header } from './modulos/header';
header();



const ventanaFondo = document.getElementById('ventanaFondo');
const ventanaWhatsapp = document.getElementById('ventanaContactoWhatsapp');
const btnWhatsapp = document.getElementById('whatsapp');
const btnCerrarWhatsapp = document.getElementById('btnCloseWhatsapp');


function cerrarVentanaWhatsapp() {
    ventanaWhatsapp.classList.add('inactive');
    ventanaFondo.classList.add('inactive');
}

function abrirVentanaWhatsapp() {
    ventanaWhatsapp.classList.remove('inactive');
    ventanaFondo.classList.remove('inactive');
}


btnCerrarWhatsapp.addEventListener('click', cerrarVentanaWhatsapp, false);
btnWhatsapp.addEventListener('click', abrirVentanaWhatsapp, false);

ventanaFondo.addEventListener('click', () => {
    ventanaWhatsapp.classList.add('inactive');
    ventanaFondo.classList.add('inactive');
}, false);


const ventanaFondoProyectos = document.getElementById('ventanasProyectos');
const ventanaPortafolio = document.getElementById('ventanasProyectosPortafolio');
const btnPortafolio = document.getElementById('btnPortafolio');
const btnCloseProyecto1 = document.getElementById('btnCloseProyecto1');

btnPortafolio.addEventListener('click', () => {
    ventanaFondoProyectos.classList.remove('inactive');
    ventanaPortafolio.classList.remove('inactive');
}, false);

btnCloseProyecto1.addEventListener('click', () => {
    ventanaFondoProyectos.classList.add('inactive');
    ventanaPortafolio.classList.add('inactive');
}, false);



ventanaFondoProyectos.addEventListener('click', () => {
    ventanaFondoProyectos.classList.add('inactive');
    ventanaPortafolio.classList.add('inactive');
}, false);


