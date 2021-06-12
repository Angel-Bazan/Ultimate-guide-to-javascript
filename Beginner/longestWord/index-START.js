/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//Using a For-Loop 
//Seperate the sentence into an array of words using the .split() method. We use the variable maxLength to hold the maximum length encountered at each point of iteration using the for-loop. Initially set to 0.

function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''  

    for (let i = 0; i < wordArray.length; i++) {
       if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length 
            result = wordArray[i]
       } 
    }

    return result 
}

//Within the for loop we check if the length of the current word under evaluation wordArray[i] is greater than our maxLength. If it is, we replace the maxLength with the newly found maximum and store the word in a variable result. At the end of the iteration, result now holds the longest word in the sentence, hence it is returned as such. 

//Using.reduce 
//The reduce method is used to execute a certain piece of code (function) on all the elements in an array in order to cummulatively arrive at a single value. 

function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord 
        }
    }, "")
    return result 
}

//Within the reducer function, we compare the length of the current word under evaluation with the length  of our accumulator variable maxLengthWord which is set to an empty string at the start. 

//Using .sort()

//The .sort() method sorts the elements of an array and returns the sorted array. It receives and optional parameter which is a function that specifies the order in which sorting should be carried out. 

function longestWord(text) {
    var sortedArray = text.split(' ') 
        .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

//With our compare function, we subtract the length of the second word from that to the first. This gives us a positive, negative or 0 value that determines which word is longer and by extension which should come before the other. 

//Now, we have sortedArray with the words arranged in descending order according to their length. We return the word(element) occupying the first position in this array as this is the longest word. 

module.exports = longestWord