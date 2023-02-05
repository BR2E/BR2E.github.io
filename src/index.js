import { header } from './modulos/header';
header();



const ventanaFondo = document.getElementById('ventanaFondo');
const ventanaWhatsapp = document.getElementById('ventanaContactoWhatsapp');

const btnWhatsapp = document.getElementById('whatsapp');
const btnGmail = document.getElementById('gmail');

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

