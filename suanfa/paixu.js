var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];
// 两数之和练习

var nums = [2, 7, 11, 15]; //https://leetcode.cn/problems/two-sum/

function lastData(arrs) {
  let left = 0;
  let right = arrs.length;
  while (left <= right) {
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
  let left = [];
  let right = [];
  let pre = Math.floor(arrs.length / 2);
  let preData = arrs[pre];
  for (let i = 0; i < arrs.length; i++) {
    if (i === pre) {
      continue;
    }
    if (arrs[i] < preData) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }
  return [...sortSuper(left), preData, ...sortSuper(right)];
}

// console.log(sortSuper(datas))

// 写一个MAP函数
function superMap(arrs, callback) {
  let resule = [];
  for (let i = 0; i < arrs.length; i++) {
    resule.push(callback(arrs[i], i));
  }
  return resule;
}
let ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
});
// console.log(ns)

function toSum(arrs, target) {
  let map = new Map();
  for (let i = 0; i < arrs.length; i++) {
    let need = target - arrs[i]
    if(map.has(need)){
      return [map.get(need),i]
    }
    map.set(arrs[i],i)
  }
  return [];
}

console.log(toSum(nums, 13));

// 双指针 tosum

function tosumleftright(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let need = nums[left] + nums[right];
    if (target === need) {
      return [left, right];
    } else if (need < target) {
      left++;
    } else {
      right--;
    }
  }
  return [left, right];
}

console.log(tosumleftright(nums, 9));

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
