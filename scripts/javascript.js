const operators = document.querySelectorAll('.operator');
const enterButton = document.querySelector('#enter');
const clearButton = document.querySelector('#clear');
const keyInputs = document.getElementById('decimalInput');
const numPad = document.querySelectorAll('.num-pad');


clearButton.addEventListener('click', () => keyInputs.value = '');
enterButton.addEventListener('click', () => keyInputs.value = Calculate(keyInputs.value));

operators.forEach(button => {
    button.addEventListener('click', (event) => {
        let operator = event.target.value;
        keyInputs.value += operator;
    });
});
    numPad.forEach(button => {
    button.addEventListener('click', (event) => {
        let operator = event.target.value;
        keyInputs.value += operator;
    });
});
keyInputs.addEventListener('keyup', function(event) {
    // Check if the key pressed was 'Enter'
    this.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9+\-*/.\s]/g, '');
    });
    if (event.key === 'Enter') {
        // Get the value from the input
        let value = Calculate(this.value)
        // Do something with the value
        this.value = value;
    }
});

function Calculate(input) {
    try {
        if (input.length > 0){

            return eval(input);
        }
        else {
            throw new Error("no value inputed")
        }
    } catch (e) {
        alert(e)
        return 0;
    }

}