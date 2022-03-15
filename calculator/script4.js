let operand1 = '';
let operator = '';
let operand2 = '';

const operatorElement = document.querySelector('#operator');
const resultElement = document.querySelector('#result');

const onClickNumber = (event) => {
  if (!operator) {
    operand1 += event.target.textContent;
    resultElement.value += event.target.textContent;
    return;
  }

  if (!operand2) {
    resultElement.value = '';
  }
};

// const func = (event) => { console.log(event.target.value) };
document.querySelector('#num-0').addEventListener('click', onClickNumber);
// func(event);

document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if (operand1) {
    operator = op;
    operatorElement.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
};


document.querySelector('#addition').addEventListener('click', onClickOperator('+'));
document.querySelector('#subtraction').addEventListener('click', onClickOperator('-'));
document.querySelector('#multiplication').addEventListener('click', onClickOperator('*'));
document.querySelector('#division').addEventListener('click', onClickOperator('/'));
