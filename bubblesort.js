function swap(array){
  const sorted = array.sort((x,y) => {return x-y})
  //console.log(sorted)
}

function bubbleSort(array) {
  return swap(array)
  // function swap() {
  //   let array = [4, 5, 9, 2];
  //   array.sort(function (x, y) {
  //     return x - y;
  //   });
  //   console.log(array);
  // }
}

//bubbleSort();
//console.log(bubbleSort);

let thisArray = [4, 5, 9, 2]
const answer = bubbleSort(thisArray);
//console.log(answer);


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
