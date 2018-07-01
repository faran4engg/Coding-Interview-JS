/*
Reverse an Array in O(n/2) time complexity

Input: [1,2,3,4]
Output:[4,3,2,1]
*/

console.clear();

function arrReverse(arr) {
  const iterations = Math.floor((arr.length) / 2); // using Math.floor finite number of iterations
  let lastIndexPointer = arr.length - 1;
  let loopCounter = 0;

  for (let i = 0; i < iterations; i++) {
    let temp = arr[i];
    arr[i] = arr[lastIndexPointer];
    arr[lastIndexPointer] = temp;

    lastIndexPointer--;
    ++loopCounter;
  }

  console.log(`loopCounter is ${loopCounter}`)
  console.log(arr);

}
arrReverse([1, 2, 3, 4, 5]);