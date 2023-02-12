import { header } from './modulos/header';

header();



function toggleVentana(idFondo, ventana, btnAbrirVentana, btnCerrar) {
    const idFondo1 = document.getElementById(idFondo);
    const ventana1 = document.getElementById(ventana);
    const btnAbrirVentana1 = document.getElementById(btnAbrirVentana);
    const btnCerrar1 = document.getElementById(btnCerrar);

    function cerrarVentana() {
        ventana1.classList.add('inactive');
        idFondo1.classList.add('inactive');
    }

    function abrirVentana() {
        ventana1.classList.remove('inactive');
        idFondo1.classList.remove('inactive');
    }


    btnCerrar1.addEventListener('click', cerrarVentana, false);
    btnAbrirVentana1.addEventListener('click', abrirVentana, false);

    idFondo1.addEventListener('click', () => {
        ventana1.classList.add('inactive');
        idFondo1.classList.add('inactive');
    }, false);


}

toggleVentana('ventanaFondo', 'ventanaContactoWhatsapp', 'whatsapp', 'btnCloseWhatsapp');
toggleVentana('ventanaFondoProyectos1', 'ventanasProyectosPortafolio', 'btnPortafolio', 'btnCloseProyecto1');
toggleVentana('ventanaFondoProyectos2', 'ventanasProyectostInteractiva', 'btnTInteractiva', 'btnCloseProyecto2');
toggleVentana('ventanaFondoProyectos3', 'ventanasProyectosLoopstudios', 'btnLoopstudios', 'btnCloseProyecto3');
toggleVentana('ventanaFondoProyectos4', 'ventanasProyectosFormContacto', 'btnFormContacto', 'btnCloseProyecto4');
toggleVentana('ventanaFondoProyectos5', 'ventanasProyectosFormProgramar', 'btnFormProgramar', 'btnCloseProyecto5');
toggleVentana('ventanaFondoProyectos6', 'ventanasProyectosAdivinaNumero', 'btnAprendeProgramar', 'btnCloseProyecto6');




const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wf3nhub';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
    }, (err) => {
    //   btn.value = 'Send Email';
    //   alert(JSON.stringify(err));
    });
});