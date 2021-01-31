/*Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.*/

//PSEUDOCODE
/*
1.convert the string into an array

2.Iterate from left=0 to right=k

3.Increment left by 1 and decrement right by 2

4.if(left>right) return the string 

5.else Recursively swap left and right

*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return swapStringIndex(0, s, s.length - 1);

  function swapStringIndex(left, array, right) {
    if (left > right) {
      return array;
    }

    var temp = array[right];
    array[right] = array[left];
    array[left] = temp;

    return swapStringIndex(left + 1, array, right - 1);
  }
};
