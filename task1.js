/*Create a function(s) that fulfills array with 10 random integer values 
and returns a multiply of 3 greatest values.*/

function returnMult() {
  let randArray = [];
  let randomNumber;

  while (randArray.length < 10) {
    randomNumber = Math.floor(Math.random() * 101);
    randArray.push(randomNumber);
  }
  randArray.sort(compareNumbers);
  
  let array = randArray.slice(0,3);
  
  return array.reduce( (a,b) => a * b );
}

function compareNumbers(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

console.log(returnMult());