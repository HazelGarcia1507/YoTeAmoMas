document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Convertidor');
    const amountInput = document.getElementById('amount');
    const amorSelect = document.getElementById('amorCurrency');
    const yoMasSpan = document.getElementById('yoMas');
    const cantidadDeAmorSpan = document.getElementById('cantidadDeAmor');
    const resultadoDiv = document.getElementById('resultado');
    const mamaMasMensaje = document.getElementById('mamaMas');
    const segundoMensaje = document.getElementById('segundoMensaje');
    const intentaOtraVezMensaje = document.getElementById('intentaOtraVez');

    const cuantoMas = 7918; // Constante utilizada para la conversión

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const amount = parseFloat(amountInput.value); // Obtener y convertir el valor ingresado
        const amor = amorSelect.value; // Obtener el valor seleccionado
        
        // Verificar si el valor ingresado es válido
        if (isNaN(amount) || amount <= 0 || amount > Number.MAX_SAFE_INTEGER) {
            alert('Exacto, todo eso te amo. \nPero ingresa un numero mas pequeño por favor\n No rompas el codigo :D.');
            return;
        }

        // Calcular los valores de Mcmas y Mvmas
        const Mcmas = amount * cuantoMas;
        const Mvmas = amount / cuantoMas;

        // Mostrar siempre ambos valores
        yoMasSpan.textContent = Mcmas.toFixed(2);
        cantidadDeAmorSpan.textContent = Mvmas.toFixed(6);

        // Mostrar o ocultar los mensajes basados en la opción seleccionada
        if (amor === 'Mcmore') {
            mamaMasMensaje.classList.remove('hidden');
            intentaOtraVezMensaje.classList.add('hidden');
        } else {
            mamaMasMensaje.classList.add('hidden');
            intentaOtraVezMensaje.classList.remove('hidden');
        }

        // Mostrar siempre los resultados
        resultadoDiv.classList.remove('hidden');
    });

    amorSelect.addEventListener('change', function() {
        const amount = parseFloat(amountInput.value);
        
        if (!isNaN(amount) && (amount <= 0 || amount > Number.MAX_SAFE_INTEGER)) {
            alert('El valor es demasiado grande.');
        }
    });
});
