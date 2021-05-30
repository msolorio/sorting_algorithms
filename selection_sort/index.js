// Given an array and 2 index positions
// will swap the two items in the array
function swapNumbers(arr, idx1, idx2) {
  const shelf = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = shelf;
}

// Finds smallest item in array
// from starting index to the end
function findSmallestIdx(arr, startIdx) {
  let smallestIdx = startIdx;

  for (let i=startIdx; i < arr.length; i++) {
    if (arr[i] < arr[smallestIdx]) smallestIdx = i;
  }

  return smallestIdx;
};

// Sort numbers using a selection sort
function sortNumbers(numsArr) {
  numsArr.forEach((num, idx) => {
    const smallestIdx = findSmallestIdx(numsArr, idx);

    swapNumbers(numsArr, idx, smallestIdx);
  });

  return numsArr;
}


////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Example
// const numbers = [45, 23, 6, 199, 2, 0];

// const sortedNums = sortNumbers(numbers);

// console.log(sortedNums);