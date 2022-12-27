// Valores extraidos del DOM

const nombre = document.getElementById('input-nombre')
const apellido = document.getElementById("input-apellido")
const edad = document.getElementById("input-edad")
const salario = document.getElementById("input-salario")
const antiguedad = document.getElementById("input-antiguedad")
const deudas = document.getElementById("input-deudas")
const capitalPrestamo = document.getElementById("input-capital")
const cuotasPrestamo = document.getElementById("input-cuotas")

// Datos del nuevo cliente
class cliente {
    constructor (nombre, apellido, edad, salario, antiguedad, deudas, capital, cuotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = parseFloat(edad)
        this.salario = parseFloat(salario)
        this.antiguedad = antiguedad.toLowerCase()
        this.deudas = deudas.toLowerCase()
        this.capital = parseFloat(capital)
        this.cuotas = parseFloat(cuotas)
    }
}

// Limite del prestamo (Uno de los parametros para definir el nivel del cliente)

let prestamoMaximo = 0

function prestamoIdeal (salario, porcentaje, cuotas) {
    prestamoMaximo = ((salario * porcentaje) / 100) * cuotas
}

// Niveles de clientes 

const nivelesDeClientes = [
    {interes: 0.65, sobretasa: 0, nivel: 0},  // Antiguedad: si; Deudas: no; Limite: dentro 
    {interes: 0.9, sobretasa: 0.01, nivel: 1},  // Antiguedad: no; Deudas: no; Limite: dentro 
    {interes: 1.2, sobretasa: 0.01, nivel: 2}, // Antiguedad: si; Deudas: no; Limite: fuera  
    {interes: 1.35, sobretasa: 0.02, nivel: 3}, // Antiguedad: si; Deudas: si; Limite: dentro 
    {interes: 1.50, sobretasa: 0.02, nivel: 4}, // Antiguedad: no; Deudas: si; Limite: dentro 
    {interes: 1.85, sobretasa: 0.03, nivel: 5},  // Antiguedad: si; Deudas: si; Limite: fuera 
    {interes: 2, sobretasa: 0.05, nivel: 6},  // Antiguedad: no; Deudas: no; Limite: fuera
    {interes: 2.5, sobretasa: 0.09, nivel: 7}, // Antiguedad: no; Deudas: si; Limite: fuera
]

// Establecer nivel del cliente

let nivelDelCliente

if (nuevoCliente.antiguedad === `si` && nuevoCliente.deudas === `no` && nuevoCliente.capital <= prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 0) 
} else if (nuevoCliente.antiguedad === `no` && nuevoCliente.deudas === `no` && nuevoCliente.capital <= prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 1) 
} else if (nuevoCliente.antiguedad === `si` && nuevoCliente.deudas === `no` && nuevoCliente.capital > prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 2)
} else if (nuevoCliente.antiguedad === `si` && nuevoCliente.deudas === `si` && nuevoCliente.capital <= prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 3)
} else if (nuevoCliente.antiguedad === `no` && nuevoCliente.deudas === `si` && nuevoCliente.capital <= prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 4)
} else if (nuevoCliente.antiguedad === `si` && nuevoCliente.deudas === `si` && nuevoCliente.capital > prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 5)
} else if (nuevoCliente.antiguedad === `no` && nuevoCliente.deudas === `no` && nuevoCliente.capital > prestamoMaximo) {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 6)
} else {
	nivelDelCliente = nivelesDeClientes.find((el)=> el.nivel === 7)
}

// Calcular cuotas del prestamo

function calculadoraCuotasPrestamo (capital, interes, cuotas, sobretasa) {
    valorCuotasPrestamo = ((capital + (capital*interes)) / cuotas) + (((capital + (capital * interes)) / cuotas) * sobretasa)
}

// Calcular monto prestamo total

function calculadoraPrestamo (cuotasPrestamo, cuotas) {
    prestamoTotal = cuotasPrestamo * cuotas
}

console.log(prestamoTotal)
