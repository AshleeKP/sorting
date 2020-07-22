describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('takes a single item and multiple items', function () {
    expect(bubbleSort([]).length).not.toBe(0);
  });
});
