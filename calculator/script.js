let operand1 = '';
let operator = '';
let operand2 = '';

const operatorElement = document.querySelector('#operator');
const resultElement = document.querySelector('#result');

// document.querySelector('#num-0').addEventListener('click', () => {
//   // 비어있지 않다
//   if (operator) {
//     operand1 += '0';
//   } else {
//     operand2 += '0';
//   }
//   resultElement.value += '0';
// });

const onClickNumber = (number) => () => {
  // 비어있지 않다
  //   if (operator) {
  //     operand1 += number;
  //   } else {
  //     operand2 += number;
  //   }
  //   resultElement.value += number;
  // return undefined;

//   return () => {
//     // 비어있지 않다
//     if (operator) {
//       operand1 += number;
//     } else {
//       operand2 += number;
//     }
//     resultElement.value += number;
//   };

  //   화살표 함수는 중괄호랑 return을 만나면 생략이 가능하다
  // => {
  // 고차 함수(high-order function)
  if (operator) {
    operand1 += number;
  } else {
    operand2 += number;
  }
  resultElement.value += number;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
