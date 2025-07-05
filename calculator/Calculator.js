// note our input is like: "operation:num1,num2"
//function that provides calculations of 2 strings
function calculate(input) {
  //handless null and empty string
  if (input == null || input.trim() === '') return 0;
//splits input into format like operation num1,num2
  const [operationRaw, numbersRaw] = input.split(':');
  if (!operationRaw || !numbersRaw) {
    //input format validation
    throw new Error('Invalid input format. Expected: op:num1,num2,...');
  }
//sanitize the operation remove whitespaces and convet to lover spaces
  const operation = operationRaw.trim().toLowerCase();

  //extract nums from it and remove whitespaces
  const tokens = numbersRaw.split(',').map(token => {
    const num = parseInt(token.trim(), 10);
    if (isNaN(num)) throw new Error(`Invalid number: ${token}`);
    return num;
  });
//minimum operand check atlest 2 operands required
  if (tokens.length < 2) {
    throw new Error('At least two numbers are required.');
  }

  let result = tokens[0];
//will perform the operations
  for (let i = 1; i < tokens.length; i++) {
    const num = tokens[i];

    switch (operation) {
      case 'add':
        result += num;
        break;
      case 'sub':
        result -= num;
        break;
      case 'mul':
        result *= num;
        break;
      case 'div':
        if (num === 0) throw new Error('Division by zero');
        result = Math.trunc(result / num);
        break;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
  }

  return result;
}

module.exports = { calculate };
