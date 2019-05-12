const readline = require('readline').createInterface({input: process.stdin,output: process.stdout})

readline.question(`Enter a scentence to check if its a palindrome or not:`, (scentence) => {
    s1 = scentence.replace(/\s/g,'').trim().toLowerCase();
    const rev = s1.split("").reverse().join("");
    if(s1==rev){result='a'}
    else{result='not a'}
    console.log(`The scentence "${scentence}" is ${result} palindrome`);
    readline.close()
})