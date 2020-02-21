/*Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.*/

function secAmount() {
  let current = new Date();
  let start = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate()
  );
  return Math.round((current - start) / 1000);
}
alert(secAmount());