var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];
// 两数之和练习

var nums = [2, 7, 11, 15]; //https://leetcode.cn/problems/two-sum/

function lastData(arrs) {
  let left = 0;
  let right = arrs.length - 1;
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
function sort(datas) {
  for (let i = 0; i < datas.length - 1; i++) {
    for (let j = 0; j > datas.length - i - 1; j++) {
      if (datas[j] > datas[j + 1]) {
        let temp = datas[j];
        datas[j] = datas[j + 1];
        datas[j + 1] = temp;
      }
    }
  }
  return datas;
}

// console.log(sort(datas));
//
// 快速排序

function sortSuper(arrs) {
  if (arrs.length < 2) {
    return arrs;
  }
  let left = [];
  let right = [];
  let pre = Math.floor(arrs.length / 2);
  let preItem = arrs[pre];
  for (let i = 0; i < arrs.length; i++) {
    if (i === pre) {
      continue;
    }
    if (arrs[i] < preItem) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }
  return [...sortSuper(left), preItem, ...sortSuper(right)];
}

// console.log(sortSuper(datas))

// 写一个MAP函数
function superMap(arrs, callback) {
  let result = [];
  for (let i = 0; i < arrs.length; i++) {
    result.push(callback(arrs[i], i));
  }
  return result;
}
let ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
});
// console.log(ns)

var toSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

// console.log(toSum(nums, 13));

// 双指针 tosum

function tosumleftright(arrs, target) {
  let left = 0;
  let right = arrs.length - 1;

  while (left <= right) {
    
    let sum = arrs[left] + arrs[right]
    if(sum === target){
      return [left ,right]
    }else if(sum < target){
      left++
    }else{
      right--
    }
  }
  return [left,right];
}

console.log(tosumleftright(nums,9))

function findTwo(arrs, target) {
  let left = 0,
    right = arrs.length - 1;
  while (left <= right) {
    let sum = arrs[left] + arrs[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [left, right];
}
// console.log(findTwo(nums, 9));
