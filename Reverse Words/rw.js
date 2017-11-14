function reverseWords(string) {
  //cannot use .reverse() and each word is in place but
  // in reverse

  //split into word array
  const wordArray = string.split(" ");
  //each word and reverse it
  const reverseArray = wordArray.map(word => {
    const wordArray = word.split("");
    let len = wordArray.length - 1;
    let newWord = "";
    while (len >= 0) {
      newWord += wordArray[len];
      len--;
    }
    return newWord;
  });
  //concat the string
  const newString = reverseArray.concat();
  console.log(newString);
  //return string
  return newString.join(" ");
}
