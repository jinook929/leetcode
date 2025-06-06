function firstRecurringCharacterIndex(str) {
  //// Record firstOccurrenc index
  const firstOccurrence = new Array(26);
  let result;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - 'a'.charCodeAt(0);

    if (firstOccurrence[charCode] === undefined) {
      firstOccurrence[charCode] = i;
    } else {
      result = result === undefined ? firstOccurrence[charCode] : Math.min(result, firstOccurrence[charCode]);
    }
  }
  // console.log(firstOccurrence)
  return result;
  
  // //// Use alphabet string to match charArray
  // const charArray = new Array(26);
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let result;

  // for (let i = 0; i < str.length; i++) {
  //   const charCode = str.charCodeAt(i) - 'a'.charCodeAt(0);

  //   if (charArray[charCode] === undefined) {
  //     charArray[charCode] = true;
  //   } else {
  //     result = result === undefined ? str.indexOf(alphabet[charCode]) : Math.min(result, str.indexOf(alphabet[charCode]));
  //   }
  // }
  // // console.log(charArray)
  // return result;
}

console.log(firstRecurringCharacterIndex("google")); // 0
console.log(firstRecurringCharacterIndex("goobleb")); // 1
console.log(firstRecurringCharacterIndex("abcdefc")); // 2
console.log(firstRecurringCharacterIndex("abcdef")); // undefined
