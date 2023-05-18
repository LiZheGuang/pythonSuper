"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

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
} // console.log(lastData(datas))
// maopao


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
} // console.log(sort(datas))
// kuaipai


function sortSuper(arrs) {
  if (arrs.length < 2) {
    return arrs;
  }

  var left = [],
      right = [],
      provide = Math.floor(arrs.length / 2),
      provideItem = arrs[provide];

  for (var i = 0; i < arrs.length; i++) {
    if (i === provide) continue;

    if (arrs[i] < provideItem) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }

  return [].concat(_toConsumableArray(sortSuper(left)), [provideItem], _toConsumableArray(sortSuper(right)));
}

console.log(sortSuper(datas));