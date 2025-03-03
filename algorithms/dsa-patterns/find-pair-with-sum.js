// Find pair with sum
function findPairWithSum(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1; //4

  while (left < right) {
    const currentSum = arr[left] + arr[right]; // 7

    if (currentSum === targetSum) {
      return [arr[left], arr[right]];
    }
    else if (currentSum < targetSum) {
      left++;
    }
    else {
      right--;
    }
  }

  return null; // No pair found
}

const array = [1, 2, 3, 4, 6];
const target = 3;
console.log(findPairWithSum(array, target)); // Output: [2, 4]