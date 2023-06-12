"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// call
Function.prototype.call2 = function (context) {
  var _context;

  context = context || window;
  context.fn = this;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = (_context = context).fn.apply(_context, args);

  return result;
};

var obj = {
  name: "张三"
};

function sayHi(age, gender) {
  console.log("\u6211\u53EB".concat(this.name, "\uFF0C\u5E74\u9F84\uFF1A").concat(age, "\uFF0C\u6027\u522B\uFF1A").concat(gender));
}

sayHi.call2(obj, 18, "男"); // 每隔一秒输出1,2,3,4,5

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
} // console.log(reduceArrs(duowei_arrs));
// Promise.all


function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    var reusle = [];
    var commitNum = 0;
    var len = promises.length;
    promises.map(function (promise, index) {
      promise.then(function (res) {
        reusle[index] = res;
        commitNum++;
        console.log(commitNum, len);

        if (commitNum === len) {
          resolve(reusle);
        }
      })["catch"](function (err) {
        return reject(err);
      });
    });
  });
}

var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 1000);
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 500);
}); // promiseAll([p3, p1, p2]).then(res=>console.log(res))
// new 操作符实现

function myNew(fn) {
  // 创建一个新的对象，该对象继承构造函数的原型。
  var obj = Object.create(fn.prototype); // 调用构造函数，并将新对象作为函数的上下文（即this关键字）。

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var result = fn.apply(obj, args);

  if (_typeof(result) === "object" && result !== null) {
    return result;
  } else {
    return obj;
  }
}

function new_demo_super(name, age) {
  this.name = name;
  this.age = age;
}

var newtext = myNew(new_demo_super, 'John', 23);
console.log(newtext, 'tee');