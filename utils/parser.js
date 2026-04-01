
import _ from "lodash";

// Convert string inputs into numbers and remove invalid values
export function parseNumbers(input) {
  // Convert each string to a number
  const numbers = _.map(input, (str) => {
    const num = Number(str);

    return Number.isNaN(num) ? null : num;
  });

  // Remove invalid 
  return _.compact(numbers);
}



// Validate Operation

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];

  
  return _.includes(validOps, operation);
}