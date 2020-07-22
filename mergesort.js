function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  const half = Math.ceil(wholeArray.length/2);
  const firstHalf = wholeArray.splice(0, half);
  console.log("FIRSTHALF", firstHalf)
  const secondHalf = wholeArray.splice(-half);
  console.log("SECONDHALF", secondHalf)
  return [firstHalf, secondHalf];
}


console.log(split([2,4,5,6,7]))
