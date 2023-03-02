// time stuff 
const targetDate = new Date('2023-03-02T12:00:00');
const now = new Date();

const timeUntilTarget = targetDate.getTime() - now.getTime();
console.log(timeUntilTarget)
setTimeout(function() {
  // Your code here
}, timeUntilTarget);

const x = 123122132
const string ="fdafdsa"
const sfds = "fdafdsa"
//we get miliseconds
console.log(string+x+sfds)