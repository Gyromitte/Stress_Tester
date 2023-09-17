function calculateStress() {
    // Obtener las respuestas de cada pregunta
    const responses = {
        q1: parseFloat(document.querySelector('input[name="q1"]:checked').value),
        q2: parseFloat(document.querySelector('input[name="q2"]:checked').value),
        q3: parseFloat(document.querySelector('input[name="q3"]:checked').value),
        q4: parseFloat(document.querySelector('input[name="q4"]:checked').value),
        q5: parseFloat(document.querySelector('input[name="q5"]:checked').value),
        q6: parseFloat(document.querySelector('input[name="q6"]:checked').value),
        q7: parseFloat(document.querySelector('input[name="q7"]:checked').value),
        q8: parseFloat(document.querySelector('input[name="q7"]:checked').value),
        q9: parseFloat(document.querySelector('input[name="q7"]:checked').value),
        q10: parseFloat(document.querySelector('input[name="q7"]:checked').value),
        q11: parseFloat(document.querySelector('input[name="q8"]:checked').value)
    };

    // Calcular el promedio de las respuestas
    const totalScore = (responses.q1 + responses.q2 + responses.q3 + responses.q4 +
        responses.q5 + responses.q6 + responses.q7 + responses.q8 + responses.q9 + responses.q10 + responses.q11) / 11;

    // Convertir a porcentaje
    const stressPercentage = (totalScore / 5) * 100;

    // Obtener la barra de progreso y el elemento de resultado
    const progressBar = document.getElementById('stressProgressBar');
    const stressResultElement = document.getElementById('stressResult');

    // Actualizar la barra de progreso
    progressBar.style.width = `${stressPercentage}%`;
    progressBar.innerHTML = `${stressPercentage.toFixed(2)}%`;

    // Mostrar mensajes basados en el nivel de estrés
    let stressMessage = '';
    if (stressPercentage <= 20) {
        stressMessage = 'Estás bastante relajado/a. ¡Sigue así!';
    } else if (stressPercentage <= 50) {
        stressMessage = 'Tienes algo de estrés. Trabaja en relajarte más.';
    } else if (stressPercentage <= 80) {
        stressMessage = 'Estás experimentando un nivel moderado de estrés. Busca formas de manejarlo.';
    } else {
        stressMessage = 'Tu nivel de estrés es alto. Es importante que encuentres formas de reducirlo para mantener tu bienestar.';
    }

    // Mostrar el resultado
    stressResultElement.innerHTML = `Tu nivel de estrés es: ${stressPercentage.toFixed(2)}%. ${stressMessage}`;
}
