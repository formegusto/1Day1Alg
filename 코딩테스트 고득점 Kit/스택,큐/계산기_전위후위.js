// https://lamarr.dev/codingtest/2020/04/14/01-stack_postfix_notation.html
/*
1. infix -> postfix
*/
// stack : 스택으로 사용할 배열, convert에 입력되기 전에 연산자 혹은 피연산자가 잠시 머무는 장소
const stack = [];
// convert : 후위표기식으로 변환된 결과를 저장할 배열
const convert = [];
// tmp : 두자릿수 이상의 숫자를 저장할 임시 변수
let tmp = "";

// 우선순위 함수
function prec(op) {
  switch (op) {
    case "(":
    case ")":
      return 0;
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
  }

  return 999;
}

let f = "(5*2)+(200 + 25) / 2";
f = f.replace(/(\s*)/g, "");
for (let i = 0; i < f.length; i++) {
  const chr = f.charAt(i);
  switch (chr) {
    case "(":
      stack.push(chr);
      break;

    case "+":
    case "-":
    case "*":
    case "/":
      while (stack.length && prec(chr) <= prec(stack[stack.length - 1])) {
        tmp += stack.pop();
        if (isNaN(stack[stack.length - 1])) {
          convert.push(tmp);
          tmp = "";
        }
      }
      stack.push(chr);
      break;

    case ")":
      let op = stack.pop();
      while (op !== "(") {
        tmp += op;
        op = stack.pop();
        if (isNaN(stack[stack.length - 1])) {
          convert.push(tmp);
          tmp = "";
        }
      }
      break;

    default:
      tmp += chr;
      if (isNaN(f.charAt(i + 1)) || i + 1 === f.length) {
        convert.push(tmp);
        tmp = "";
      }
      break;
  }
}

while (stack.length) convert.push(stack.pop());
console.log(convert.join(" "));

/* +
window.isNaN 은 문자열 입력시 숫자로 변환해주고,
Numbebr.isNaN 은 변환해주지 않는다. 오로지 숫자형에 대한 NaN만 체크한다.
*/
console.log(Number.isNaN("*")); // false
console.log(isNaN("*")); // true
