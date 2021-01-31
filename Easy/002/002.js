/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array 
that occurs more than 25% of the time.

Return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6*/

/*
1. Iterate from arr 0 to arr.length-1

2.store currentOccurence

3.store previousMax

4.when currentNumber!=nextNumber then check previousMax<currentOccurence, If true previousMax=currentOccurence
 then assign currentOccurence=0 


*/

const countOccurence = function (arr) {
  var currentOccurence = 0;
  var previousMax = 0;
  var x;

  for (var i = 0; i < arr.length; i++) {
         if (arr[i] == arr[i + 1]) {
             currentOccurence = currentOccurence + 1;
    } 
    
        else {
             if (currentOccurence > previousMax) {
                 previousMax = currentOccurence + 1;
                x = arr[i];
      }

      currentOccurence = 0;
    }
  }
 
  return x;
};

countOccurence([1, 2, 2, 4, 4, 4, 4, , 5, 5]);
