"use strict";

function debounce(fn, wait) {
  var times;
  return function () {
    var context = this;
    var args = arguments;

    if (times) {
      clearTimeout(times);
      times = null;
    }

    times = setTimeout(function () {
      fn.call(context, args);
    }, wait);
  };
}

var s = debounce(function (nums) {
  console.log(this.haha);
  console.log(nums);
}, 1000);
console.log(s("我是哈哈哈哈"));