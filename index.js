const Pacientes = [];

const Doctores = [{ nombre: "Matias Gomez" }, { nombre: "Adolfo Lopez" }, { nombre: "Jeremias Torres" }];

class Paciente {
  constructor(nombre, edad, consulta) {
    this.nombre = nombre;
    this.edad = edad;
    this.consulta = consulta;
  }
}

let consultaDoctor = prompt(
  "Bienvenido a CONSULTORIOSMDP S.A. Ingrese con que doctor quiere atenderse" //Aca estaria bueno mostrar los doctores y ponerles opciones
  //Ejem = 1) Matias Gomez 2) .... 3) ....
);
let horarioDeAtencionMatias = [9, 10, 11, 16, 17, 18];
let horarioDeAtencionAdolfo = [8, 12, 13, 14];
let horarioDeAtencionJeremias = [7, 15, 19, 20, 21];
let horariosDeAtencionDeTodos = horarioDeAtencionMatias.concat(horarioDeAtencionAdolfo).concat(horarioDeAtencionJeremias);
console.log(horariosDeAtencionDeTodos);

if (consultaDoctor === "Matias Gomez" || "Adolfo Lopez" || "Jeremias Torres") {
  // Esto no valida nada, da siempre true y entra. Tenes que repetir consultaDoctor === "nombre doctor" || ..... || ...
  //Aca seria mejor ponerles IDS a los doctores
  let respuesta = prompt(`Usted se atenderá con ${consultaDoctor}. ¿Está de acuerdo?`);
  if (respuesta.toUpperCase === "SI") {
    prompt(
      `Los horarios de atencion del consultorio son ${horariosDeAtencionDeTodos}` //Fijate las variableeeeees
    );
    let nombrePaciente = prompt(`Por favor, ingrese su nombre y apellido para reconocerlo`);
    let edadPaciente = parseInt(prompt("Ingrese su edad"));
    let condicionPaciente = prompt(
      //Esto no se esta usando
      "Por último, ingrese su dolencia o motivo de consulta"
    );
    alert(`Muchas gracias, usted queda registrado como ${nombrePaciente}. Edad: ${edadPaciente} años. Adiós!`);
  } else if (respuesta.toUpperCase == "NO") {
    consultaDoctor;
  } else {
    alert("Respuesta no válida");
  }
} else {
  alert("Doctor no encontrado");
}
new Paciente(nombrePaciente, edadPaciente, condicionPaciente);
alert(Pacientes);

/*
  Lau, esta buena la idea, pero faltan detalles. Validar campos para que no manden cosas incompletas, 
  y pensar mas en la interaccion con el usuario! Hacerselo mas facil y dinamico! 
  Ponerle opciones, que le rebote el prompt si no pone nada o si pone algo que no va y demas
*/
