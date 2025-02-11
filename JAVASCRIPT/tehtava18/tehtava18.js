process.stdin.setEncoding('utf8');

function askForNumbers(callback) {
    console.log("Syötä kaksi lukua välilyönnillä erotettuna:");
    
    process.stdin.once('data', (data) => {
        const numbers = data.trim().split(' ').map(Number);
        
        if (numbers.length !== 2 || numbers.some(isNaN)) {
            console.log("Yritä uudelleen.");
            askForNumbers(callback);
            return;
        }

        const suurempi = Math.max(numbers[0], numbers[1]);
        console.log(`Suurempi luku on: ${suurempi}`);
        callback();
    });
}

function askForWord() {
    console.log("Syötä yksi sana:");
    
    process.stdin.once('data', (data) => {
        const word = data.trim();
        
        if (!word) {
            console.log("Virheellinen syöte. Yritä uudelleen.");
            askForWord();
            return;
        }

        const isPalindrome = word === word.split("").reverse().join("");
        console.log(isPalindrome ? "Sana on palindromi" : "Sana ei ole palindromi");
        
        process.stdin.pause();
    });
}

askForNumbers(() => {
    askForWord();
});
