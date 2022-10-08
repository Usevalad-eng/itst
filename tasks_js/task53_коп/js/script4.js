function getMaxSubSum(arr) {
    let maxSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([1, 0, -4, 5, 6, -7,-2, 3, 8]) ); // 8