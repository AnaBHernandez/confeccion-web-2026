document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const racionesInput = document.getElementById('raciones');
    const glutenCheckbox = document.getElementById('sin_gluten');
    const resultadoContainer = document.getElementById('resultado_container');
    const totalValor = document.getElementById('total_valor');

    function calcularTotal() {
        const raciones = parseInt(racionesInput.value) || 0;
        const esSinGluten = glutenCheckbox.checked;
        
        if(raciones < 1) return;

        // Lógica de cálculo: (raciones * 3) + (5€ si es sin gluten)
        let total = (raciones * 3);
        if (esSinGluten) {
            total += 5;
        }

        totalValor.innerText = total;
        resultadoContainer.classList.remove('hidden');
    }

    btnCalcular.addEventListener('click', calcularTotal);
});