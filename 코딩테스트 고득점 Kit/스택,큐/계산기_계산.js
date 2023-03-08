let f = "5 2 * 200 25 + 2 / +";
f = f.split(" ");

const stack = [];
for (let i = 0; i < f.length; i++) {
  if (isNaN(f[i])) {
    const num2 = parseFloat(stack.pop());
    const num1 = parseFloat(stack.pop());
    switch (f[i]) {
      case "+":
        stack.push(num1 + num2);
        break;
      case "-":
        stack.push(num1 - num2);
        break;
      case "*":
        stack.push(num1 * num2);
        break;
      case "/":
        stack.push(num1 / num2);
        break;
    }
  } else stack.push(f[i]);
}
console.log(stack);
