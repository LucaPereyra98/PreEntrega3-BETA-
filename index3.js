// Declaracion de variables iniciales
const calcularPrestamo = document.querySelector('.formulario-datos')
const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector("#input-apellido")
const inputEdad = document.querySelector("#input-edad")
const inputSalario = document.querySelector("#input-salario")
const inputCapitalPrestamo = document.querySelector("#input-capital")
const inputCuotasPrestamo = document.querySelector("#input-cuotas")

let valorCuotasPrestamo = 0
let prestamoTotal = 0
let nuevoCliente = []

// Funcion calculadora de cuotas del prestamo

function calculadoraCuotasPrestamo (capital, interes, cuotas) {
    valorCuotasPrestamo = ((capital + (capital*interes)) / cuotas)
}

// Funcion calculadora del prestamo

function calculadoraPrestamo (cuotasPrestamo, cuotas) {
    prestamoTotal = cuotasPrestamo * cuotas
}

// Funcion para enviar informacion del prestamo a HTML

const prestamoHTML = ( array ) => {
    const contenedorDelPrestamo = document.querySelector(".informacion-prestamo")
    let resultado = ""
    array.forEach((ultimoObjetoDelArray) => {
        calculadoraCuotasPrestamo(ultimoObjetoDelArray.capital, 0.65, ultimoObjetoDelArray.cuotas)
        calculadoraPrestamo(valorCuotasPrestamo, ultimoObjetoDelArray.cuotas)
        resultado += `
            <div class= "informacion">
                <p> 
                    Resultado de su prestamo: <br>
                    Usted solicito un prestamo de ${ultimoObjetoDelArray.capital} a abonar en ${ultimoObjetoDelArray.cuotas} mensuales y consecutivas. <br>
                    El valor de cada cuota es de: $${valorCuotasPrestamo} y el total a abonar por el prestamo es de: $${prestamoTotal}
                    <br>
                    Saludos
                </p>
            </div>
        `
    })
    contenedorDelPrestamo.innerHTML = resultado
}

// Evento onsubmit

calcularPrestamo.onsubmit = ( evento ) => {
    evento.preventDefault()
    if (inputNombre.value === '' || inputApellido.value === '' || inputEdad.value === '' || inputSalario.value === '' || inputCapitalPrestamo.value === '' || inputCuotasPrestamo.value === '' ) {
        alert('Debe llenar los campos de informacion para generar el prestamo')
    } else {
        nuevoCliente.push({
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            edad: Number(inputSalario.value),
            salario: Number(inputSalario.value),
            capital: Number(inputCapitalPrestamo.value),
            cuotas: Number(inputCuotasPrestamo.value)
        })
        calcularPrestamo.reset()
        ultimoObjetoDelArray = nuevoCliente[nuevoCliente.length - 1]
        prestamoHTML(nuevoCliente)
        localStorage.clear()
        localStorage.setItem("arrayNuevoCliente", JSON.stringify(nuevoCliente))
    }
}