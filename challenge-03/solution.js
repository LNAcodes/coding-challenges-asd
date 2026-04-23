// 1. The function gets as an input a string that needs to be sorted. The string contains letters and numbers. The numbers are interwoven in words. The words should be sorted by the numbers from 1 to 9. Number 1 will be the first word, not 0. If an empty string is an input, the function should return an empty string.

const sortWords = "is2 Thi1s T4est 3a";
const sortNumbers = "4of Fo1r pe6ople g3ood th5e the2";
const emptyStringy = "";

function sort(string) {
  // 2. First the string needs to be split into arrays of words, which are interwoven with numbers. Then the arrays need to be sorted by the numbers, after that they need to be joined together again. But before all of that, an empty string needs an empty return.

  if (string === "") {
    return "";
  }

  // now split the words into an array of strings using the separator

  const space = " ";
  const splitsWordsArray = string.split(space);

  console.log(splitsWordsArray);

  // now sort the array of words according to numbers from 1 to 9

  const
}

console.log(sort(emptyStringy));
console.log(sort(sortWords));
