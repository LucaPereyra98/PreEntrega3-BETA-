// Declaracion de variables iniciales
const calcularPrestamo = document.querySelector('.formulario-datos')
const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector("#input-apellido")
const inputEdad = document.querySelector("#input-edad")
const inputSalario = document.querySelector("#input-salario")
const inputAntiguedad = document.querySelector("#input-antiguedad")
const inputDeudas = document.querySelector("#input-deudas")
const inputCapitalPrestamo = document.querySelector("#input-capital")
const inputCuotasPrestamo = document.querySelector("#input-cuotas")

let prestamoMaximo = 0
let valorCuotasPrestamo = 0
let prestamoTotal = 0
let nuevoCliente = []

// Funcion de prestamo maximo

function prestamoIdeal (salario, porcentaje, cuotas) {
    prestamoMaximo = ((salario * porcentaje) / 100) * cuotas
}

// Funcion calculadora de cuotas del prestamo

function calculadoraCuotasPrestamo (capital, interes, cuotas, sobretasa) {
    valorCuotasPrestamo = ((capital + (capital*interes)) / cuotas) + (((capital + (capital * interes)) / cuotas) * sobretasa)
}

// Funcion calculadora del prestamo

function calculadoraPrestamo (cuotasPrestamo, cuotas) {
    prestamoTotal = cuotasPrestamo * cuotas
}

// Evento onsubmit

calcularPrestamo.onsubmit = ( evento ) => {
    evento.preventDefault()
    if (inputNombre.value === '' || inputApellido.value === '' || inputEdad.value === '' || inputSalario.value === '' || inputAntiguedad.value === '' || inputDeudas.value === '' || inputCapitalPrestamo.value === '' || inputCuotasPrestamo.value === '' ) {
        alert('Debe llenar los campos de informacion para generar el prestamo')
    } else {
        nuevoCliente.push({
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            edad: inputEdad.value,
            salario: inputSalario.value,
            antiguedad: inputAntiguedad.value,
            deudas: inputDeudas.value,
            capital: inputCapitalPrestamo.value,
            cuotas: inputCuotasPrestamo.value
        })
        calcularPrestamo.reset()
    }
    console.log(nuevoCliente)
}