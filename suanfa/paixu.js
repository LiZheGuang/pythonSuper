var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];
// 两数之和练习

var nums = [2, 7, 11, 15]; //https://leetcode.cn/problems/two-sum/

function lastData(arrs) {
  let left = 0,
    right = arrs.length - 1;
  while (left < right) {
    let temp = arrs[left];
    arrs[left] = arrs[right];
    arrs[right] = temp;
    left++;
    right--;
  }
  return arrs;
}
// console.log(lastData(datas));

// 冒泡

function sort(arrs) {
  for (let i = 0; i < arrs.length - 1; i++) {
    for (let j = 0; j < arrs.length - i - 1; j++) {
      if (arrs[j] > arrs[j + 1]) {
        let temp = arrs[j];
        arrs[j] = arrs[j + 1];
        arrs[j + 1] = temp;
      }
    }
  }
  return arrs;
}
// console.log(sort(datas));
//
// 快速排序

function sortSuper(arrs) {
  if (arrs.length < 2) {
    return arrs;
  }
  let left = [],
    right = [],
    preCenter = Math.floor(arrs.length / 2);
  preNum = arrs[preCenter];

  for (let i = 0; i < arrs.length; i++) {
    if (preCenter === i) {
      continue;
    }
    if (arrs[i] < preNum) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }
  return [...sortSuper(left), preNum, ...sortSuper(right)];
}

// console.log(sortSuper(datas))
function superMap(arrs, callback) {
  let result = [];
  for (let i = 0; i < arrs.length; i++) {
    result.push(callback(arrs[i], i));
  }
  return result;
}
// 写一个MAP函数

let ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
});
// console.log(ns)

var toSum = function (nums, target) {
  let maps = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (maps.has(need)) {
      return [maps.get(need), i];
    }
    maps.set(nums[i], i);
  }
  return null;
};

// console.log(toSum(nums, 13));

// 双指针 tosum

function tosumleftright(args, target) {
  let left = 0,
    right = args.length - 1;
  while (left < right) {
    let sum = args[left] + args[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

// console.log(tosumleftright(nums,9))

function findTwo(arrs, target) {
  let left = 0;
  let right = arrs.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    console.log(left,right)
    if (arrs[mid] === target) {
      return mid
    } else if (arrs[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  return  null;
}
console.log(findTwo(nums, 2));
