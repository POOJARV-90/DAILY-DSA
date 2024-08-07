const arr = [11, 2, 1, 5, 6, 10];
//traversing

function LargestNo() {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i],"abc")
    if (max < arr[i]) {
      max = arr[i];
    }
    
  }
  console.log(max, "ans");
}
LargestNo(arr);
