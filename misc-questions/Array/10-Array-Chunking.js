/*
Given an Array, make a chunk of that array by the size provided as second argument.

Ex 1:
arrChunk( [1,2,3,4,5,6] , 2 );

Output: [1,2] , [3,4], [5,6]

Ex 2:
arrChunk( [1,2,3,4,5] , 3 );

Output: [1,2,3] , [4,5]

*/

console.clear();

function arrChunk(arr, size) {
  let length = arr.length;
  let sizePointer = 0;

  for (let i = 0; i < arr.length;) {

    sizePointer += size;
    console.log(arr.slice(i, sizePointer));
    i = i + size;

  }
}

arrChunk([1, 2, 3, 4, 5, 6], 2);
arrChunk([1, 2, 3, 4, 5, 6], 4);