/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    reverseString('algorithms')
}

//Chaining in-built methods 

function reverseString(text) {
    return text.split("").reverse().join("")
}

//Applying cutting-edge ES6 syntax 

function reverseString(text) {
    return [...text].reverse().join('')
}

//the spread operator ... , like the split method will spread the characters of the string into array elements 

//THE FOR-LOOP WAY 
// In the solution below, we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order. 

function reverseString(text) {
    let result = "" 

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }

    return result 
}

//For Of statement in Javascript; used to execute a certain piece of code for each distinct item(property) of an iterable project

function reverseString(text){
    let result = "";

    for (let char of text){
        result = char + result 
    }
    return result;
} 

//The Recursive Way 
//Recursion is a programming technique in which the intention is to reduce the problem into smaller instances of the same problems until it is completely solved. 

function reverseString(text) {
    if (text === "" ){
        return ''
    } else {
        return reverseString(text.substr(1)) + text[0]  
      }
}

//Using Reduce 
//This reduce() method is used to execute a function on every member of an array until it results in a single output value. It receives the function to be executed and the initia; value of the accumulator as arguments. The accumuator serves as a holder for the value returned in the last execution of the callback. 

function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')

}

//In the solution above, we split the text received into an array of characters and then we call the .reduce() method on the array which begins with an empty string as the initial value and accumulates each character in reverse until it has gone through all characters in the array. At this point, it returs the completely reversed string. 


module.exports = reverseString