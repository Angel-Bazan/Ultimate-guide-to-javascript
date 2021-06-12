/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


//For...in Iteration Method 
//An iterable object is basically a collection of consistently formatted data.Examples include strings, arrays, array-like objects etc. The for..in statement iterates over all non-Symbol, enumerable properties of an object.
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text){
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1 
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char 
        }
    }

    return maxChar
}

//maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for...in loop 
//maxChar is used to store the character with the highest value on every iteration 

//Forming Arrays from the Character Map 

function maxRecurringChar(text) {
    let charMap ={}
    let charArray =[]
    let valuesArray = []
    let maxCharValue = 0 

    for (let char of text) {
        if (charMap.hasOwnProperty(char)){
            charMap[char]++
        }else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharvalue)]

    //A character map is created with a snippet of code that is initially considered. The ES6 syntax is used to form arrays from the character map. First an array of the keys of the charMap(all characters in the text) known as charArray and then an array of the values(numbers of occurences)know as valuesArray arranged in corresponding order. 

    //Next we use a built in Math.max() function to find the maximum value in the array of values and we store this value in a variable maxCharValue. 
    
    //Finally we use the indexOf() method to search the valuesArray for the position of the maxCharValue. This is necessary as the position of the maxCharValue in valuesArray corresponds to the position of the character in the charArray with that number of occurrences. 

    //Thus, on getting the index(position), we return the character holding the same postion in the charArray. This is the highest recurring character

}



module.exports = maxRecurringChar;