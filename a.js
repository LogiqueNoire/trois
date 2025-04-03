/*import { Person } from './user.js';
import { Qualification } from './qualification.js';

var jose = new Person("jose@gmail.com", "jose", "1234", "I am a person");

var q1 = new Qualification("English", "Cambridge B1", 2019);

jose.agregarQualification(q1);

console.log(jose.listQualifications);
*/


var preliminar = document.getElementById("columnaPreliminar");

function aparecer() {
  preliminar.style.visibility = "visible";
}

setTimeout(aparecer, 100);



const btnIngresar = document.getElementById("btnIngresar").addEventListener("click", () => {
  nUsuario = document.getElementById("txtUsuario").value;
  contraseña = document.getElementById("txtContraseña").value;
});

/*
module.exports = {
  nUsuario,
  contraseña
}*/



