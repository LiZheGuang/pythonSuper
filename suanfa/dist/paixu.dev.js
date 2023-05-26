"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12]; // 两数之和练习

var nums = [2, 7, 11, 15]; //https://leetcode.cn/problems/two-sum/

function lastData(arrs) {
  var left = 0,
      right = arrs.length - 1;

  while (left < right) {
    var temp = arrs[left];
    arrs[left] = arrs[right];
    arrs[right] = temp;
    left++;
    right--;
  }

  return arrs;
} // console.log(lastData(datas));
// 冒泡


function sort(arrs) {
  for (var i = 0; i < arrs.length - 1; i++) {
    for (var j = 0; j < arrs.length - i - 1; j++) {
      if (arrs[j] > arrs[j + 1]) {
        var temp = arrs[j];
        arrs[j] = arrs[j + 1];
        arrs[j + 1] = temp;
      }
    }
  }

  return arrs;
} // console.log(sort(datas));
//
// 快速排序


function sortSuper(arrs) {
  if (arrs.length < 2) {
    return arrs;
  }

  var left = [],
      right = [],
      preIndex = Math.floor(arrs.length / 2),
      prenum = arrs[preIndex];

  for (var i = 0; i < arrs.length; i++) {
    if (i === preIndex) {
      continue;
    }

    if (arrs[i] < prenum) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }

  return [].concat(_toConsumableArray(sortSuper(left)), [prenum], _toConsumableArray(sortSuper(right)));
} // console.log(sortSuper(datas))


function superMap(arrs, callback) {
  var result = [];

  for (var i = 0; i < arrs.length; i++) {
    result.push(callback(arrs[i], i));
  }

  return result;
} // 写一个MAP函数


var ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
}); // console.log(ns)

var toSum = function toSum(nums, target) {
  var maps = new Map();

  for (var i = 0; i < nums.length; i++) {
    var need = target - nums[i];

    if (maps.has(need)) {
      return [maps.get(need), i];
    }

    maps.set(nums[i], i);
  }

  return null;
}; // console.log(toSum(nums, 13));
// 双指针 tosum


function tosumleftright(args, target) {
  var left = 0,
      right = args.length - 1;

  while (left < right) {
    var sum = args[left] + args[right];

    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
} // console.log(tosumleftright(nums,9))


function findTwo(arrs, target) {
  var left = 0,
      right = arrs.length - 1;

  while (left <= right) {
    var sum = arrs[left] + arrs[right];

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

console.log(findTwo(nums, 9));