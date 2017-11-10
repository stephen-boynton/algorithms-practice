function isPalindrome(string) {
  const lower = string.toLowerCase();
  const charArray = lower.split("");
  const validChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const letterArray = [];
  charArray.forEach(char => {
    if (validChars.indexOf(char) > -1) letterArray.push(char);
  });
  console.log(letterArray);
  console.log(letterArray.join("") === letterArray.reverse().join(""));
  if (letterArray.join("") === letterArray.reverse().join("")) return true;
  else return false;
  //return true or false
}

isPalindrome("Madam I'm Adam");
