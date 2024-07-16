// Program - 1 (Min and Max)
console.log("Program -1 (Finding the min and max value)");
const min = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const max = () => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

let arr = [10, 30, 20, 5, 50];
console.log("Minimum element in the array is", min(arr));
console.log("Maximum element in the Array is", max(arr));

// Program - 2 (merging the two Array)
console.log("\nProgram - 2 (Merging of Two Array)");
const merge = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr2[i]);
  }
  return result;
};

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("Merging of two Array is", merge(arr1, arr2));

// Program - 3 (Implementation of Stack)
// console.log("\nProgram - 3 (Implementation of Stack)")
// let stack = [];
// let flag = true;
// while(flag) {
//     let choice = prompt("Enter the Choice\n1. Add\n2. Delete\n3. Top\n4. Display\n5. stop");
//     switch (choice) {
//         case "1":
//             let element = prompt("Enter the Element to be added");
//             stack.push(element);
//             console.log(`Element ${element} is Added`);
//             break;
//         case "2":
//             let temp = stack.pop();
//             console.log("Deleted Element is", temp);
//             break;
//         case "3":
//             console.log("Top Element is", stack[stack.length - 1]);
//             break;
//         case "4":
//             console.log("Stack is", stack);
//             break
//         case "5":
//             console.log("Program is Stopped");
//             flag = false;
//             break;
//         default:
//             console.log("Invalid Choice");
//     }
// }

// Program - 4 (Implementation of Queue in array)
// console.log("\nProgram - 4 (Implementation of Queue in array)");
// let queue = [];
// let flag1 = true;
// while (flag1) {
//   let choice = prompt(
//     "Enter the Choice\n1. Add\n2. Delete\n3. Peak\n4. Display\n5: Stop"
//   );
//   switch (choice) {
//     case "1":
//       let element = prompt("Enter the Element to be added");
//       queue.push(element);
//       console.log(`Element ${element} is Added`);
//       break;
//     case "2":
//       let temp = queue.shift();
//       console.log("Deleted Element is", temp);
//       queue.shift();
//       break;
//     case "3":
//       console.log("Peak Element is", queue[0]);
//       break;
//     case "4":
//       console.log("Queue is", queue);
//       break;
//     case "5":
//       console.log("Program is Stopped");
//       flag1 = false;
//       break;
//     default:
//       console.log("Invalid Choice");
//   }
// }

// Program - 5 (Find method in javascript)
console.log("\nProgram - 5 (Find and indexOf method in javascript)")
let arr3 = [1, 2, 3, 45., 5, 6];
let index = arr3.find((element) => element == 3);
console.log("Index of 3 is", index);
let indexof = arr3.indexOf(2);
console.log("Index of 2 is", indexof);

// Program - 6 (Filter method in Javascript)
console.log("\nProgram - 6 (Filter method in javascript)")
let arr4 = [1, 2, 3, 10, 20, 50]
let values = arr4.filter((element) => element>9);
console.log(values)

// Program -7 (Array Manipulation)
console.log("\nProgram - 7 (Array addition and deletion in javascript)")
console.log("Push")
let arr5 = [11, 22, 33, 44, 55]
console.log("Before => ", arr5)
arr5.push(66)
console.log("After => ", arr5)
console.log("Pop")
console.log("Before => ", arr5)
arr5.pop()
console.log("After => ", arr5)
console.log("Shift")
console.log("Before => ", arr5)
arr5.shift()
console.log("After => ", arr5)
console.log("unshift")
console.log("Before => ", arr5)
arr5.unshift(50)
console.log("After => ", arr5)

// Program - 8 (Sorting and Reverse)
console.log("\nProgram - 8 (Sorting and Reverse in javascript)")
let arr6 = [23, 2, 34, 12,45, 46,44, 540]
console.log("Reverse")
arr6.reverse()
console.log(arr6)
console.log("Sort")
let Sort = arr6.sort()
console.log(Sort)

// Program - 9 (Map in javascript)
console.log("\nProgram - 9 (Map in javascript)")
let arr7 = [1, 2, 3, 4, 5, 6, 7]
let result = arr7.map((element) => element*6);
console.log(result)
