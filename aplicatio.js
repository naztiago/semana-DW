document.querySelector('.contenedor_navegador').addEventListener('mouseover', function() {
    document.querySelector('.imagen_logo').src = '/imagenes/version oscura.png';  
});

document.querySelector('.contenedor_navegador').addEventListener('mouseout', function() {
    document.querySelector('.imagen_logo').src = '/imagenes/Captura de pantalla 2023-06-20 201820.png'; 
});



let slideActual = 1;
const totalSlides = 4;

document.getElementById('boton_izquierdo').addEventListener('click', function() {
    cambiarSlide(-1);
});

document.getElementById('boton_derecho').addEventListener('click', function() {
    cambiarSlide(1);
});

function cambiarSlide(direccion) {
    slideActual += direccion;
    if (slideActual > totalSlides) {
        slideActual = 1;
    } else if (slideActual < 1) {
        slideActual = totalSlides;
    }

    for (let i = 1; i <= totalSlides; i++) {
        let vista = document.getElementById('vista' + i);
        if (i === slideActual) {
            vista.classList.add('mostrar');
        } else {
            vista.classList.remove('mostrar');
        }
    }
}

cambiarSlide(0); // mostrar el primer slide al cargar la página
