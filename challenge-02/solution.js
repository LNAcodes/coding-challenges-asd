//1. The function gets a string as an input, as an output only the last four characters of the string can be seen, the other characters are masked by #. Space is also masked by #. If a string has fewer that 4 characters it is shown. If a string is empty it returns an empty string.

const creditcardNumber = "4556364607935616";
const firstNameOfPet = "Skippy";
const happyThought = "Nananananananananananananananana Batman!";
const tryOutNum = "1";
const emptyString = "";

function maskify(string) {
  // 2. I have to split the string into two parts: the last 4 characters stay visible, the other characters are masked and replaced by #
  const firstPart = string.slice(0, -4);
  const maskedPart = "#".repeat(firstPart.length);
  const lastFourCharacters = string.slice(-4);

  // 3. The function returns as an output a new string, without changing the original string.

  const result = maskedPart + lastFourCharacters;

  return result;
}
console.log(maskify(creditcardNumber));
console.log(maskify(firstNameOfPet));
console.log(maskify(happyThought));
console.log(maskify(tryOutNum));
console.log(maskify(emptyString));
