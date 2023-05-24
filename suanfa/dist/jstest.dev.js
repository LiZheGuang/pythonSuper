"use strict";

// call函数实现
// Function.prototype.call2 = function (context, ...args) {
//   context = context || window;
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// };
Function.prototype.call2 = function (context) {
  var _context;

  context = context || window;
  context.fn = this;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var resulet = (_context = context).fn.apply(_context, args);

  delete context.fn;
  return resulet;
};

var obj = {
  name: "张三"
};

function sayHi(age, gender) {
  console.log("\u6211\u53EB".concat(this.name, "\uFF0C\u5E74\u9F84\uFF1A").concat(age, "\uFF0C\u6027\u522B\uFF1A").concat(gender));
} // sayHi.call2(obj, 18, "男");
// 每隔一秒输出1,2,3,4,5


function printNums() {
  var i = 1;
  var intestTimeis = setInterval(function () {
    console.log(i);
    i++;

    if (i > 5) {
      clearInterval(intestTimeis);
    }
  }, 1000);
} // printNums()
// JS多维数组 转为一维数组


var duowei_arrs = [1, [2, [3, 4], 5], 6]; // function flatten(arrs) {
//   let flattenedArray = arrs.reduce((acc, val) => {
//     return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
//   }, []);
//   return flattenedArray;
// }

function testnnn(arrs) {
  var ns = arrs.reduce(function (last, val) {
    return Array.isArray(val) ? last.concat(testnnn(val)) : last.concat(val);
  }, []);
  return ns;
}

console.log(testnnn(duowei_arrs));