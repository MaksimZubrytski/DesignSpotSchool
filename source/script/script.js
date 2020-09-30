'use strict';

function binary_search(list, item) {
  let low = 0;
  
  let high = list.length - 1; // high = 8 / =3
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // mid = 4 //high = 3 // mid = 1;
    let guess = list[mid]; // guess = 9 // guess = 3
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1; //high = 4 - 1 = 3;
    } else {
      low = mid + 1; //low = 1
    }
  }
  
  return null;
}

const my_list = [1, 3, 5, 7, 9, 10, 11, 12, 13];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, 1)); // null