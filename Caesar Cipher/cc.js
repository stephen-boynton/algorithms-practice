function caesarCipher(string, num) {
  num = num % 26;
  const lower = string.toLowerCase();
  console.log(lower);
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";
  for (i in lower) {
    const letter = lower[i];
    if (letter === " ") {
      newString += letter;
      continue;
    } else {
      const currentIndex = alpha.indexOf(letter);
      let newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      if (string[i] === string[i].toUpperCase()) {
        newString += alphay[newIndex].toUpperCase();
      } else {
        console.log(letter);
        newString += alpha[newIndex];
      }
    }
  }
  console.log(newString);
  return newString;
}

caesarCipher("ham sammich", -4000);
