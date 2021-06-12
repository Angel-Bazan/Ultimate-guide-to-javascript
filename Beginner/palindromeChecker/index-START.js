/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

//A palindrome is a word, number, or other sequence of characters which reads the same backwards as forward, such as "madam" or "racecar"

//An Intuitive Approach 
//A direct way to approach this problem

function palindromeChecker(text) {

    const reversedText = text.toLowerCase()
        .split('').reverse().join('')

    return text === reversedText
}

//First our function accepts a parameter which is the string of text which is to be tested. 
//Next we conver all letters of the string to lowercase, then call the .split() method on the string that is received passing in an empty string as the only argument in order to spread the characters into an array.
//Next, we call .reverse() on the array to re-order its elements in reverse 
//After that, we call .join() on the reversed array to from a string once again


//Looping through and comparing characters                    

function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })

    return result 
}

//Looping through and Comparing Characters (optomized)

function palindromeChecker(text) {
    var textLen = text.length; 
    for (var i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 - i]){
            return false;
        }
    }

    return true;
}

module.exports = palindromeChecker;