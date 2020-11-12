const stackMachineCalculator = (instructions) => {
  let stack = [];
  let intArr = instructions.split(" ");

  for (let i = 0; i < intArr.length; i++) {
    switch (intArr[i]) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(stack.pop() - stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(stack.pop() / stack.pop());
        break;
      case "DUP":
        stack.splice(stack.length, 0, stack[stack.length - 1]);
        // stack.push(stack.pop());
        break;
      case "POP":
        stack.pop();
        break;
      default:
        stack.push(parseInt(intArr[i]));
    }
    // return stack[stack.length - 1];
    return stack.pop();
  }
};

module.exports = stackMachineCalculator;
