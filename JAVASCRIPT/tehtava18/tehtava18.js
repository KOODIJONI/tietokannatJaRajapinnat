const prompt = require('prompt-sync')();

function getSum() {
    var s1 = prompt("Enter the first number:");
    var num1=parseFloat(s1);
    var num2 = prompt("Enter the second number:");
    num2=parseFloat(num2);
    return Math.max(num1, num2);
}
function palindrome() {
    var s1 = prompt("Enter word:");
    const ans = s1.split('').reverse().join('');
    if(s1===ans){
        console.log('The given word is Palindrome');
    }else{
        console.log('The given word is not Palindrome');
    }
    
}

console.log(getSum(), 'on suurempi ' );
palindrome();

