const readline = require('readline').createInterface({input: process.stdin,output: process.stdout})

readline.question(`Enter a scentence to check if its a palindrome or not:   `, (scentence) => {
    
    result='not a'
    console.log(`The scentence "${scentence}" is ${result} palindrome`);
    readline.close()
})