function appendCharacter(char) {
    const result = document.getElementById('result');
    result.value += char;
}

function deleteCharacter() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}

function calculateResult() {
    const result = document.getElementById('result');
    const expression = result.value;

    try {
        const calculatedResult = eval(expression);
        result.value = calculatedResult;
    } catch (error) {
        result.value = 'Error';
    }
}