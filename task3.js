/*Define an object happiness within 5 properties. 
Each property should have default integer value, representing its priority. 
Then create a function that returns a list of property names sorted by priority (highest is on top).*/

let happiness = {
    "social and personal relationships": 3,
    "self-realization": 5,
    "mental health": 1,
    "physical health": 2,
    "financial independence": 4
}

function priorList() {
keysSorted = Object.keys(happiness).sort((a,b) => happiness[a]-happiness[b]);

return keysSorted;
}

console.log(priorList());