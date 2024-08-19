// Task 1: Simple Calculator
function calculateResult() {
    const numberA = parseFloat(document.getElementById('numberA').value);
    const numberB = parseFloat(document.getElementById('numberB').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(numberA) || isNaN(numberB)) {
        result = 'Enter valid numbers.';
    } else {
        switch (operation) {
            case '+':
                result = numberA + numberB;
                break;
            case '-':
                result = numberA - numberB;
                break;
            case '*':
                result = numberA * numberB;
                break;
            case '/':
                result = numberB !== 0 ? numberA / numberB : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operator.';
        }
    }

    document.getElementById('calculatorResult').textContent = 'Result: ' + result;
}

// Task 2: Array Operations
function sumEvenNumbers() {
    const input = document.getElementById('numberList').value;
    const numbers = input.split(',').map(num => parseFloat(num));
    const sum = numbers.filter(num => num % 2 === 0 && !isNaN(num)).reduce((acc, num) => acc + num, 0);

    document.getElementById('arrayResult').textContent = 'Sum of even numbers: ' + sum;
}

// Task 3: Object Manipulation
let personInfo = {
    firstName: '',
    lastName: '',
    age: 0,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    incrementAge: function() {
        this.age++;
    }
};

function createPerson() {
    personInfo.firstName = document.getElementById('firstName').value;
    personInfo.lastName = document.getElementById('lastName').value;
    personInfo.age = parseInt(document.getElementById('personAge').value, 10);

    if (isNaN(personInfo.age)) {
        document.getElementById('personResult').textContent = 'Enter a valid age.';
    } else {
        document.getElementById('personResult').textContent = 'Person created. Age: ' + personInfo.age;
    }
}

function displayPersonName() {
    document.getElementById('personResult').textContent = 'Name: ' + personInfo.getFullName();
}

function addAge() {
    if (personInfo.age === 0) {
        document.getElementById('personResult').textContent = 'Create the person first.';
    } else {
        personInfo.incrementAge();
        document.getElementById('personResult').textContent = 'Updated Age: ' + personInfo.age;
    }
}
