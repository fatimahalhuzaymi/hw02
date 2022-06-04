


"use strict";
const ps = require("prompt-sync");
const prompt = ps();







//2
let persons = [  
{
    id:1,Name:Mohammed,age:18,level:intermediate,tasksCompleted:8,
print: function(){
    console.log(this.Name+""+this.age+""+this.tasksCompleted)
      return age = 25;
}
},

{ 
    id:2,Name:Omar,age:22,level:beginner,tasksCompleted:2,
    print: function(){
        console.log(this.Name+""+this.age+""+this.tasksCompleted)
        return age = 25;
    }
},

{id:3,Name:Sarah,age:20,level:beginner,tasksCompleted:4,
    print: function(){
        console.log(this.Name+""+this.age+""+this.tasksCompleted)
        return age = 25;
    }
},

{
    id:4,Name:Saleh,age:15,level:intermediate,tasksCompleted:6,
    print: function(){
        console.log(this.Name+""+this.age+""+this.tasksCompleted)
        return age = 25;
    }
},

{
    id:5,Name:Saud,age:30,level:advanced,tasksCompleted:10,
    print: function(){
        console.log(this.Name+""+this.age+""+this.tasksCompleted)
        return age = 25;
    }
},

{id:6,Name:Amani,age:25,level:advanced,tasksCompleted:10,
    print: function(){
        console.log(this.Name+""+this.age+""+this.tasksCompleted)
        return age = 25;
    }
},

{id:7,Name:Lojain,age:23,level:advanced,tasksCompleted:10,
    print: function(){
        console.log(this.Name+""+this.age+""+this.tasksCompleted)
        return age = 25;
    }
}
    
]
console.log(persons.print);
let highestToLowest = tasksCompleted.sort((a, b) => b-a);
if (tasksCompleted >=5){
console.log("p")
}else{
    console.log("f")
}








//3
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function updateDisplay() {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('.calculator-screen');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
  }
  
  updateDisplay();


<input type="text" class="calculator-screen" value="" disabled />

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  
  const { target } = event;

  
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});

const { 
    target } = event;

const target = event.target;

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  console.log('digit', target.value);
  inputDigit(target.value);
  updateDisplay();
  function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  console.log('decimal', target.value);
  inputDecimal(target.value);
  updateDisplay();
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand === null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  console.log(calculator);
  console.log('operator', target.value);
  handleOperator(target.value);
  updateDisplay();

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }

  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }
  console.log('all clear', target.value)
  resetCalculator();
  updateDisplay();

  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'all-clear':
        resetCalculator();
        break;
      default:
        // check if the key is an integer
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }
  
    updateDisplay();
  });
  
  calculator.displayValue = String(result);

  calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
  0.30000000000000004.toFixed(7) 
  parseFloat(0.30000000000000004.toFixed(7)) 
