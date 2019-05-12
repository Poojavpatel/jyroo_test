# Jyroo_test

## Lessons Learnt

* ### Input output from terminal in node
    ```
    const readline = require('readline').createInterface({input: process.stdin,output: process.stdout})

    readline.question(`Enter your name: `, (name) => {
        console.log(`Hello ${name}, Welcome`);
        readline.close()
    })
    ```
* ### lesson2