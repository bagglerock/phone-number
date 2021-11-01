const fs = require("fs");

const arg = process.argv.slice(2);

const numberMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

async function getPhoneNumber([dictionary, phoneNumber]) {
    // validate phone number

    // validate dictionary
    if (typeof dictionary !== 'string') {
        return;
    }

    const numberArray = phoneNumber.split('-').join('').split('');

    fs.readFile(`${dictionary}.txt`, "utf8", function(error, data) {
        if (error) {
            console.log(error);
        }

        const dictionaryArray = data.toString().split('\n');

        possibleWords = numberArray.forEach(number => {
            // throw in possible words in this array and eliminate words as it passes each number as a letter
            const possibleWords = [];

            // get the possible words into an array based on that numberMap

            // for each number from numberMap we will filter out possible words from this possible words array
        });

        return possibleWords;  
    });
}

getPhoneNumber(arg);