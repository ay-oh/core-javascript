/**
 * @desc prompt 함수를 사용하여 쿵쿵따에 참여할 플레이어 수 입력
 * @see  https://developer.mozilla.org/ko/docs/Web/API/Window/prompt
 */
const playerCount = parseInt(prompt('How many players join this game?'), 10);
console.log(`typeof playerCount: ${typeof playerCount}`);

/**
 * @desc 템플릿 리터럴 사용
 * @see  https://developer.mozilla.org/ko/docs/Web/API/Window/confirm
 */
const isConfirm = confirm(
  `총 ${playerCount} 명이 게임에 참가합니다.\n맞다면 확인 버튼을, 그렇지 않은 경우 취소 버튼을 클릭하세요.`
);
console.log(`isConfirm: ${isConfirm}`);

/**
 * @desc 삼항 연산자 사용
 * @see  https://developer.mozilla.org/ko/docs/Web/API/Window/alert
 */
isConfirm ? alert('게임을 시작합니다.') : alert('게임을 종료합니다.');

/**
 * @desc query는 질의하다라는 의미 -> cf. 데이터베이스 언어(Structured Query Language)
 * @see  https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
 */
const inputElement = document.querySelector('input');

const buttonElement = document.querySelector('button');
console.log(`buttonElement: ${buttonElement}`); // 개발자 도구 콘솔 탭으로 확인

const keyword = document.querySelector('#word');
const whoseTurn = document.querySelector('#whose-turn');

/**
 * @desc 이벤트(Event) 객체
 *
 * 1. 사용자가 단어를 input 태그에 입력한다.
 * 2. 입력 버튼을 마우스로 클릭한다.
 * 3. 버튼을 클릭하면 입력한 문자열을 span 태그에 표시한다.
 */
let word;     // 제시어
let newWord;  // 새로 입력한 단어

inputElement.addEventListener('input', (event) => {
  console.log(`단어 입력: ${event.target.value}`);
});

const onClickButton = () => {
  if (!word) {
    //비어있다.
    word =newWord;  //이건 데이터바꾼거
    // 화면을 바꿔주는 작업도 코딩해줘야 함
    const wordElement = document.querySelector('#word');
    wordElement.textContent = word;

    // input 태그같은 특수한 경우는 value (대부분은 textContent)
    inputElement.value = '';
  } else {
    // 비어있지않다.
  }
};
buttonElement.addEventListener('click', onClickButton);
