/*Implement a function addWithDelay() which will work with parameters according to the conditions below:
•	If all parameters are positive numbers, 
it should return within 1000ms timeframe a Promise containing a sum of all the numbers provided as parameters 
•	If any parameter is represented by a negative number, 
function should return an error message “Error! Some parameter is a negative number!" using “reject()” option*/

function addWithDelay(...arguments) {
  let p = new Promise((resolve, reject) => {
    if (arguments.every(isPositive)) {
      let sum = arguments.reduce((s, i) => s += i);
      setTimeout(() => resolve(sum), 1000)
    } else {
      reject('Error! Some parameter is a negative number!');
    }
  });
  function isPositive(i) {
      return i >= 0;
  };
  return p.then(
      result => alert(result),
      error => alert(error)
  );
}

addWithDelay(15, 11, 27, 5, 30)