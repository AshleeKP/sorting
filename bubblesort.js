function bubbleSort() {
  function swap() {
    let array = [4, 5, 9, 2];
    array.sort(function (x, y) {
      return x - y;
    });
    console.log(array);
  }
}
bubbleSort();
console.log(bubbleSort);

// const len = array.length;
// const tempArray = [];
// for (let i = 0; i < len; i++) {
//   let first = len[i];
//   for (let j = 0; j < len; j++) {
//     let second = len[j + 1];
//     if (first < second) {
//       tempArray.push(first);
//     } else {
//       tempArray.push(second)
//     }
//   }
// }
// return tempArray;
