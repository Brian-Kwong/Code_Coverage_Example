function merge(list1, list2) {
  if (list1.length < 1) {
    // List 1 is empty
    return list2;
  } else if (list2.length < 1) {
    // List 2 is empty
    return list1;
  } else {
    var first, rest, other;
    if (list1[0] < list2[0]) {
      // First element of list1 is smaller
      first = list1.slice(0, 1);
      rest = list1.slice(1, list1.length);
      other = list2;
    } else {
      // First element of list2 is smaller
      first = list2.slice(0, 1);
      rest = list2.slice(1, list2.length);
      other = list1;
    }
    return first.concat(merge(rest, other)); // Recursively merge the rest of the lists
  }
}

// Splits the list for merge sort
function mergeSort(array_list) {
  if (array_list.length <= 1) {
    return array_list;
  } else {
    return merge(
      mergeSort(array_list.slice(0, array_list.length / 2)),
      mergeSort(array_list.slice(array_list.length / 2, array_list.length))
    );
  }
}

module.exports.merge = merge;
module.exports.mergeSort = mergeSort;
