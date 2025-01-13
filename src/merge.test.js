const mergeSortLib = require('./merge');
const merge = mergeSortLib.merge;
const mergeSort = mergeSortLib.mergeSort;

test('Merge w/ two empty lists', () => {
  expect(merge([], [])).toEqual([]);
});

test('Merge w/ an empty list and a non-empty list', () => {
  expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
});

test('Merge w/ an empty list and a non-empty list', () => {
  expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
});

test('Merge w/ two non-empty lists', () => {
  expect(merge([5, 6, 7], [1, 2, 3])).toEqual([1, 2, 3, 5, 6, 7]);
});

test('Merge sort with a empty list', () => {
  expect(mergeSort([])).toEqual([]);
});

test('Merge sort with a list of a single element', () => {
  expect(mergeSort([5])).toEqual([5]);
});

test('Merge sort with a list of two elements', () => {
  expect(mergeSort([5, 3])).toEqual([3, 5]);
});
``;

test('Merge sort with a list of sorted elements', () => {
  expect(mergeSort([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
});

test('Merge sort with a list of where the first half is sorted', () => {
  expect(mergeSort([2, 11, 15, 7, 3])).toEqual([2, 3, 7, 11, 15]);
});

test('Merge sort with a list of where the second half is sorted', () => {
  expect(mergeSort([7, 8, 5, 9, 13])).toEqual([5, 7, 8, 9, 13]);
});

test('Merge sort where all elements are unsorted', () => {
  expect(mergeSort([3, -1, 8, 2, 4])).toEqual([-1, 2, 3, 4, 8]);
});
