"use strict";

function debounce(fn, wait) {
  var time;
  return function () {
    var context = this;
    var args = arguments;

    if (time) {
      clearTimeout(time);
      time = null;
    }

    time = setTimeout(function () {
      fn.call(context, args);
    }, wait);
  };
}

var s = debounce(function (nums) {
  console.log(this.haha);
  console.log(nums);
}, 1000);
console.log(s("我是哈哈哈哈"));