const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = weight / (height * height);

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)}.`;
}

calculateButton.addEventListener('click', calculateBMI);

fetch('http://localhost:3000/storeData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ weight, height, bmi: bmi.toFixed(1), date })
})
.then(response => response.text())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});

