function reverseString(str) {
  // //// Recursion
  // if (str.length <= 1) {
  //   return str;
  // }
  // return reverseString(str.slice(1)) + str[0];

  // //// Iteration
  // const len = str.length
  // const strArr = str.split("");
  // for(let i = 0; i < len / 2; i++) {
  //   [strArr[i], strArr[len - 1 - i]] = [strArr[len - 1 - i], strArr[i]]
  // }
  // return strArr.join("");

  //// JS function
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // "olleH"