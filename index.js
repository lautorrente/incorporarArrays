const Pacientes = [];
const Doctores = [
    {nombre : "Matias Gomez"},
    {nombre : "Adolfo Lopez"},
    {nombre : "Jeremias Torres"},
]

class Paciente {
    constructor(nombre, edad, consulta){
        this.nombre = nombre;
        this.edad = edad;
        this.consulta = consulta;
    }
}


let consultaDoctor = prompt("Bienvenido a CONSULTORIOSMDP S.A. Ingrese con que doctor quiere atenderse");
let horarioDeAtencionMatias = [9,10,11,16,17,18];
let horarioDeAtencionAdolfo = [8,12,13,14];
let horarioDeAtencionJeremias = [7,15,19,20,21];
let horariosDeAtencionDeTodos = horarioDeAtencionMatias.concat(horarioDeAtencionAdolfo).concat(horarioDeAtencionJeremias); 
console.log(horariosDeAtencionDeTodos);


if (consultaDoctor === "Matias Gomez" || "Adolfo Lopez" || "Jeremias Torres") {
    let respuesta = prompt(`Usted se atenderá con ${consultaDoctor}. ¿Está de acuerdo?`)
    if (respuesta.toUpperCase === "SI") {
        prompt(`Los horarios de atencion del consultorio son ${horarioDeAtencionTodos}`);
        let nombrePaciente = prompt(`Por favor, ingrese su nombre y apellido para reconocerlo`);
        let edadPaciente = parseInt(prompt("Ingrese su edad"));
        let condicionPaciente = prompt("Por último, ingrese su dolencia o motivo de consulta");
        alert(`Muchas gracias, usted queda registrado como ${nombrePaciente}. Edad: ${edadPaciente} años. Adiós!`);

    }
    else if (respuesta.toUpperCase == "NO") {
        consultaDoctor;
    }
    else {
        alert("Respuesta no válida");
    }
}
else {
    alert("Doctor no encontrado")
}
new Paciente (nombrePaciente, edadPaciente, condicionPaciente);
alert(Pacientes);