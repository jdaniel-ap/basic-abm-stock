const calculator = {
  sum: (array) => {
    const evaluate = evaluateDigits(array);

    if(evaluate) return evaluate.message;

    const reducer = array.reduce((a, b) => a + b);

    return reducer;
  },
  subt: (array) => {
    const evaluate = evaluateDigits(array);

    if(evaluate) return evaluate.message;

    const reducer = array.reduce((a, b) => a - b);

    return reducer;
  },
  multip: (array) => {
    const evaluate = evaluateDigits(array);

    if(evaluate) return evaluate.message;

    const reducer = array.reduce((a, b) => a * b);

    return reducer;
  },
  div: (a, b) => {
    const array = [a, b]
    const evaluate = evaluateDigits(array);

    if(evaluate) return evaluate.message;
    if(!a || !b) return 'none of the parameters can be a zero';

    return a / b
  }

}

function evaluateDigits(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(typeof element === 'string') return {message :'Array must contain only numbers'}   
  }
}
