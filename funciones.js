//variables globales
let cotizaciones = document.querySelector(".cotizaciones")
sistemaFinanciamiento();

// Función principal para el cálculo del financiamiento de varios clientes
function sistemaFinanciamiento() {

    // Una vez iniciada la sesión, permitir calcular financiamiento de varios clientes
    let respuesta = prompt("¿Quieres calcular el financiamiento de un cliente? (si/no):").toLowerCase();
    let continuar;
    let cliente = 1;
    if (respuesta == "si") {
        continuar = true;
    }
    while (continuar) {
        const monto = parseFloat(prompt("Ingresa el monto del préstamo:"));
        const tasaInteres = parseFloat(prompt("Ingresa la tasa de interés (%):"));
        const plazo = parseInt(prompt("Ingresa el número de meses para pagar el préstamo:"));

        calcularFinanciamiento(cliente, monto, tasaInteres, plazo);
        cliente++;
        // Preguntar si se desea calcular otro financiamiento
        respuesta = prompt("¿Quieres calcular el financiamiento para otro cliente? (si/no):").toLowerCase();
        if (respuesta !== "si") {
            continuar = false;
        }
    }
}

// Función para calcular el financiamiento del vehículo
function calcularFinanciamiento(cliente, monto, tasaInteres, plazo) {
    // Ajuste de la tasa de interés según el plazo
    if (plazo < 12) {
        tasaInteres += 2;
    } else if (plazo > 36) {
        tasaInteres -= 1;
    }
    
    // Calculo de la cuota mensual
    const tasaMensual = tasaInteres / 100 / 12;
    const cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
    
    //mostrar en el navegador
    cotizaciones.innerHTML += `
        <p><b> Cliente :</b> ${cliente} </p>
        <p><b> Monto del préstamo: </b> $${monto} </p>
        <p><b> Tasa de interés aplicada: </b> ${tasaInteres}% </p>
        <p><b> Plazo en meses:</b> ${plazo} </p>
        <p><b> Cuota mensual:</b> $${cuotaMensual.toFixed(2)} </p>
        <hr>
    `;
}

