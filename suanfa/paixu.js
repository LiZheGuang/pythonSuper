var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];
// 两数之和练习

var nums = [2, 7, 11, 15]; //https://leetcode.cn/problems/two-sum/

function lastData(data) {
  let left = 0,
    right = data.length - 1;
  while (left < right) {
    let temp = data[left];
    data[left] = data[right];
    data[right] = temp;
    left++;
    right--;
  }
  return data;
}
// console.log(lastData(datas));

// 冒泡

function sort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}
// console.log(sort(datas))

// 快速排序

function sortSuper(data) {
  if (data.length < 2) {
    return data;
  }
  let left = [];
  let right = [];
  let proIndex = Math.floor(data.length / 2);
  let pronums = data[proIndex];
  for (let i = 0; i < data.length; i++) {
    if (i === proIndex) {
      continue;
    }
    if (data[i] < pronums) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }
  return [...sortSuper(left), pronums, ...sortSuper(right)];
}

// console.log(sortSuper(datas))

function superMap(arrs, callback) {
  let resulet = [];
  for (let i = 0; i < arrs.length; i++) {
    resulet.push(callback(arrs[i], i));
  }

  return resulet;
}

let ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
});
// console.log(ns)

var toSum = function (nums, target) {
  var maps = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (maps.has(need)) {
      return [maps.get(need), i];
    }
    maps.set(nums[i], i);
  }
  return null;
};

console.log(toSum(nums, 13));

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
    let mid = Math.floor((left + right) / 2);
    console.log({
      mid,left,right
    })
    if (arrs[mid] === target) {
      return mid;
    } else if (arrs[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1
}

console.log(findTwo(datas,100))