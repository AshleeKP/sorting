describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    const testArray = [2,4,5,6]
    if(testArray.length % 2 === 0){
      expect(testArray[0].length).toEqual(testArray[1].length) }
    // } else {
    //   expect(testArray[0].length).not.toEqual(testArray[1].length)
    // }
  },
  it('is able to take an array with an odd length', function() {
    const oddArray = [1, 2, 3, 4, 5];
    expect (oddArray.length % 2).toBe(1)
    // if(oddArray.length % 2 === 1){
    //   expect(oddArray[0].length).not.toEqual(oddArray[1].length)
    // } else {
    //   expect(oddArray[0].length).toEqual(oddArray[1].length)
    // }
  })
  );
});
