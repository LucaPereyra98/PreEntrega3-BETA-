// botonCalcularPrestamo.onsubmit = ( event ) => {
//     event.preventDefault()
//     prestamoIdeal(salario, 20, cuotasPrestamo)

//     const nivelesDeClientes = [
//         { interes: 0.65, sobretasa: 0, nivel: 0 },
//         { interes: 0.9, sobretasa: 0.01, nivel: 1 },
//         { interes: 1.2, sobretasa: 0.01, nivel: 2 },
//         { interes: 1.35, sobretasa: 0.02, nivel: 3 },
//         { interes: 1.50, sobretasa: 0.02, nivel: 4 },
//         { interes: 1.85, sobretasa: 0.03, nivel: 5 },
//         { interes: 2, sobretasa: 0.05, nivel: 6 },
//         { interes: 2.5, sobretasa: 0.09, nivel: 7 }
//     ]

//     if (antiguedad === `si` && deudas === `no` && capitalPrestamo <= prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 0)
//     } else if (antiguedad === `no` && deudas === `no` && capitalPrestamo <= prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 1)
//     } else if (antiguedad === `si` && deudas === `no` && capitalPrestamo > prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 2)
//     } else if (antiguedad === `si` && deudas === `si` && capitalPrestamo <= prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 3)
//     } else if (antiguedad === `no` && deudas === `si` && capitalPrestamo <= prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 4)
//     } else if (antiguedad === `si` && deudas === `si` && capitalPrestamo > prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 5)
//     } else if (antiguedad === `no` && deudas === `no` && capitalPrestamo > prestamoMaximo) {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 6)
//     } else {
//         nivelDelCliente = nivelesDeClientes.find((el) => el.nivel === 7)
//     }

//     calculadoraCuotasPrestamo(capitalPrestamo, nivelDelCliente.interes, cuotasPrestamo, nivelDelCliente.sobretasa)

//     calculadoraPrestamo(valorCuotasPrestamo, cuotasPrestamo)

// }