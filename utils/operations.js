
// ADD 
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// SUBTRACT
export function subtract(numbers) {
  
  return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

// MULTIPLY
export function multiply(numbers) {
  
  return numbers.reduce((product, num) => product * num, 1);
}

// DIVIDE
export function divide(numbers) {
  
  return numbers.slice(1).reduce((result, num) => {

    if (num === 0) {
      return NaN;
    }
    return result / num;
  }, numbers[0]);
}