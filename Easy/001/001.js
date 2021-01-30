/*Given an array arr, replace every element in that array with the greatest element 
among the elements to its right, and replace the last element with -1.
After doing so, return the array.
Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
*/

//PSEUDOCODE

/*
1. Iterate from i=0 to i<=arr.length-1
2. Iterate from j=i+1 to j<=arr.length-1
3. Find the highest element in j=i+1 to j<arr.length-1
4. store it as the currentMax
5. Then push that element inside the temp array
6. reInitialize the current max as 0
7. If arr.length==i+1 then push -1 into the array and return
*/
/*
const replaceNumber = function (arr) {
  var currentMax = -1;
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (i + 1 == arr.length) {
      temp.push(-1);
      return temp;
    }

    for (var j = i + 1; j < arr.length; j++) {
      if (currentMax < arr[j]) {
        currentMax = arr[j];
      }
    }
    temp.push(currentMax);
    currentMax = 0;
  }
};
console.log(replaceNumber([17, 18, 5, 4, 6, 1]));


/*Time complexity BigO(n2)*/

//OPTIMIZED SOLUTION(Refered)
//Rather than using 2 for loops and an extra array , we can use just one loop and modifiying the existing array
/*
[17, 18, 5, 4, 6, 1]
output:[18,6,6,6,1,-1]


PSUEDOCODE
1.Create a new array called result array
2.store last element as -1
3.compare arr[i] element with result[i]
4.If the arr[i]>result[i]
push arr[i] into the result array
else push arr[i] into the array

*/
const OptimizedreplaceNumber = function (arr) {
   
    var temp = [];
     temp[arr.length-1]=-1
    
    for(var i=arr.length-1;i>=0;i--)
    {

         var currentMax=Math.max(arr[i],temp[i])
         temp[i-1]=currentMax

    }       

    console.log(temp.length)
    return temp
    }
  ;
  console.log(OptimizedreplaceNumber([17, 18, 5, 4, 6, 1]));
  