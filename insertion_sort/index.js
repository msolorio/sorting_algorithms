// Given an array and two numbers
// will swap the two numbers in the array
function swapNumbers(arr, idx1, idx2) {
  const shelf = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = shelf;
}

// Given an index position for a number
// will sort that number in it's place to the left of it
function placeNumber(arr, idxToPlace) {
  for (let i=idxToPlace; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
      swapNumbers(arr, i - 1, i);
    }
  }
}

function sortNumbers(numsArr) {
  numsArr.forEach((num, idx) => placeNumber(numsArr, idx));
}


///////////////////////////////////////////////////
///////////////////////////////////////////////////
const numbers = [23, 11, 78, 2];

sortNumbers(numbers);

console.log(numbers);
