// [0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10]
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const memo = {
  0: 0,
  1: 1,
}
const fibonacci = (num, memo = new Map()) => {
  // //// Iterative way
  // let resultArr = [0, 1];
  // if(num <= 1) {
  //   return resultArr[num];
  // }
  // for(let i = 1; i < num; i++) {
  //   resultArr.push(resultArr[i - 1] + resultArr[i]);
  // }
  // return resultArr[resultArr.length - 1];

  // //// Recursive way
  // if(num <= 1) return num;
  // return fibonacci(num - 2) + fibonacci(num - 1);

  //// Memoizing way
  if(num <= 1) return num;
  if(memo.has(num)) {
    return memo.get(num);
  }
  const result = fibonacci(num - 2, memo) + fibonacci(num - 1, memo);
  memo.set(num, result);
  return result;
}

console.log(
  fibonacci(0),
  fibonacci(1),
  fibonacci(2),
  fibonacci(3),
  fibonacci(4),
  fibonacci(5),
  fibonacci(6),
  fibonacci(7),
  fibonacci(8),
  fibonacci(9),
  fibonacci(10),
  fibonacci(40),
  fibonacci(78),
);