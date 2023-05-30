"use strict";

// call
Function.prototype.call2 = function (context) {
  var _context;

  context = context || window;
  context.fn = this;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = (_context = context).fn.apply(_context, args);

  delete context.fn;
  return result;
};

var obj = {
  name: "张三"
};

function sayHi(age, gender) {
  console.log("\u6211\u53EB".concat(this.name, "\uFF0C\u5E74\u9F84\uFF1A").concat(age, "\uFF0C\u6027\u522B\uFF1A").concat(gender));
} // sayHi.call2(obj, 18, "男");
// 每隔一秒输出1,2,3,4,5


function printNums() {
  var i = 0;
  var times = setInterval(function () {
    i++;
    console.log(i);

    if (i >= 5) {
      clearInterval(times);
    }
  }, 1000);
} // printNums();
// JS多维数组 转为一维数组


var duowei_arrs = [1, [2, [3, 4], 5], 6];

function reduceArrs(arrs) {
  return arrs.reduce(function (pre, val) {
    return Array.isArray(val) ? pre.concat(reduceArrs(val)) : pre.concat(val);
  }, []);
}

console.log(reduceArrs(duowei_arrs));

function debounce(fn, wait) {
  var times = null;
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