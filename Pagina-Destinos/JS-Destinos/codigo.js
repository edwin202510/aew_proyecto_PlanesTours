alert ("Hola Mundo");

var dato="Juan";
alert("Hola" + dato);

let nombre=prompt("Ingrese su nombre");
alert("Hola"+ nombre);

const formulario=document.getElementById('form-registro');
const resultado=document.getElementById('resultado');
document.getElementById('btn-buscar').addEventListener('click', () => {
    const ticket=document.getElementById('numvuelo').value.trim();
    const ruta=document.getElementById('ruta').value.trim();
    if (!ruta || !ticket){
        resultado.textContent='selecciona ruta o ticket';
        resultado.style.color='red';
        return;
    }   
});