"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

function lastData(data) {
  var left = 0,
      right = data.length - 1;

  while (left < right) {
    var temp = data[left];
    data[left] = data[right];
    data[right] = temp;
    left++;
    right--;
  }

  return data;
} // console.log(lastData(datas));
// 冒泡


function sort(data) {
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  return data;
} // console.log(sort(datas))
// 快速排序


function sortSuper(data) {
  if (data.length < 2) {
    return data;
  }

  var left = [],
      right = [],
      provide = Math.floor(data.length / 2),
      provideItem = data[provide];

  for (var i = 0; i < data.length; i++) {
    if (i === provide) {
      continue;
    }

    if (data[i] < provideItem) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }

  return [].concat(_toConsumableArray(sortSuper(left)), [provideItem], _toConsumableArray(sortSuper(right)));
} // console.log(sortSuper(datas))


function superMap(arrs, callback) {
  var resulet = [];

  for (var i = 0; i < arrs.length; i++) {
    resulet.push(callback(arrs[i], i));
  }

  return resulet;
}

var ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
}); // console.log(ns)