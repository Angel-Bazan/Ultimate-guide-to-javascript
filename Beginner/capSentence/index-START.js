/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



//Using .forEach Loop 
//The .forEach method in Javascript runs a provided function on each element within an array 
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = [] 

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ')
}

//Used .toLowerCase() method on the string of text received to convert the entire sentence to lowercase. Also chain the .split() method in sequence to divide the lowercase sentence into an array of words. Stored in wordsArray  

// Now, the .foreach() method, is used to iterate through every word(element) in the array and execute a function on it. The function takes the first letter of the word and turns it to uppercase using the .toUpperCase() method. To retrieve the remaining part of the word in lowercase, we use the .slice() method to slice the string starting from position 1 till the end. 

//we than combine the transformed first letter and the sliced section together to form the capatilized word which we push into our array of capaitalized words capsArray. 

//After this process has being carried out for every word, capsArray now holds the capitalized version of every word in the sentence. 

//Finally, we combine each word(element) using the .join() method. We pass in an empty space as the seperator. This gives us the capatilized sentence which we return in conclusion. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using .map() and .slice()
//The .map method is used to create a new array with the results gotten from calling a provided function on every element in the array on which it is called

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word=>{
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}

//This time we use the .map() function to loop through every word in the array and execute the same function as before in order to create capsArray, which is an array of the capitalized words. 

//In the end we return a capatilized sentence created by joining the words in the capsArray with blank space as the seperator. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using .map() and .replace()
//In this approach we use the .map() method as above to execute a function on every word(element) in the wordsArray. In this function we populate our capsArray differently with the use of the .replace() method. 

//.replace() is used to create a new string with some or all matches of a pattern replaced by a replacement. The pattern and replacement are passed in as arguments when this method is called. 

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ') 

  let capsArray = wordsArray.map( word=>{
    return word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(' ')
}

//Notice that we replace the first letter of each word(word[0]) with an uppercase version of this same letter. Then we add capitalized word using the .toUpperCase() method to the capsArray 

module.exports = capSentence