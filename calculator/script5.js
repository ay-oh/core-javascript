let operand1 = '';
let operator = '';
let operand2 = '';

const operatorElement = document.querySelector('#operator');
const resultElement = document.querySelector('#result');

const onClickNumber = (event) => {
  /*
  1. if 문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for 문 내부의 경우)로 중단한다.
4. else를 제거한다(이때 중첩 하나가 제거된다).
  */
  
  if (!operator) {
    operand1 += event.target.textContent;
    resultElement.value += event.target.textContent;
    return;
  }

  if (!operand2) {
    resultElement.value = '';
  }

  operand2 += event.target.textContent;
  resultElement.value += event.target.textContent;
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

document
  .querySelector('#addition')
  .addEventListener('click', onClickOperator('+'));
document
  .querySelector('#subtraction')
  .addEventListener('click', onClickOperator('-'));
document
  .querySelector('#multiplication')
  .addEventListener('click', onClickOperator('*'));
document
  .querySelector('#division')
  .addEventListener('click', onClickOperator('/'));

document.querySelector('#calculate').addEventListener('click', () => {
  if (operand2) {
    switch (operator) {
      case '+':
        resultElement.value = parseInt(operand1) + parseInt(operand2);
        break;
      case '-':
        // resultElement.value = parseInt(operand1) - parseInt(operand2);
        resultElement.value = operand1 - operand2;
        break;
      case '*':
        resultElement.value = operand1 * operand2;
        break;
      case '/':
        resultElement.value = operand1 / operand2;
        break;
      default:
        break;
    }
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
});

document.querySelector('#clear').addEventListener('click', () => {
  operand1 = '';
  operator = '';
  operand2 = '';
  operatorElement.value = '';
  resultElement.value = '';
});
