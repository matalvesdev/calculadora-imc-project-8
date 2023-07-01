const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value.replace(',', '.'));

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');

        if (bmi < 18.5) {
            description = 'Puxa, parece que você está um pouco abaixo do peso ideal.';
        } else if (bmi >= 18.5 && bmi < 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        } else if (bmi >= 25 && bmi < 30) {
            description = "Cuidado! Você está com sobrepeso!";
        } else if (bmi >= 30 && bmi < 35) {
            description = "Atenção! Você está com obesidade moderada!";
        } else if (bmi >= 35 && bmi < 40) {
            description = "Cuidado! Você está com obesidade severa!";
        } else {
            description = "Cuidado! Você está com obesidade mórbida!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate').click();
    }
});
