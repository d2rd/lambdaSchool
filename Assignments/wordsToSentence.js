

function wordsToSentence(words) {
  let wordString = ''; // empty string
  for (let i = 0; i < words.length; i++){
    wordString +=  " " + words[i]; 

  }
    return wordString.trim();
}
console.log(wordsToSentence(['Hello', 'world!', 'This is','fun!']));

//See analysis in Lambda/Pre-Work Help/wordsToSentence 


