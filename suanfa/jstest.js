// call
Function.prototype.call2 = function(context,...args){
  context = context || window
  context.fn = this
  let resule = context.fn(...args)
  delete context.fn
  return resule
}
const obj = { name: "张三" };
function sayHi(age, gender) {
  console.log(`我叫${this.name}，年龄：${age}，性别：${gender}`);
}

sayHi.call2(obj, 18, "男"
);

// 每隔一秒输出1,2,3,4,5

function printNums() {
  let i = 0;
  let times = setInterval(() => {
    i++;
    console.log(i);
    if (i >= 5) {
      clearInterval(times);
    }
  }, 1000);
}

// printNums();

// JS多维数组 转为一维数组

const duowei_arrs = [1, [2, [3, 4], 5], 6];

function reduceArrs(arrs) {
  return arrs.reduce((pre, val) => {
    return Array.isArray(val) ? pre.concat(reduceArrs(val)) : pre.concat(val);
  }, []);
}

console.log(reduceArrs(duowei_arrs));

function debounce(fn, wait) {
  let times = null;
  return function () {
    let context = this;
    let args = arguments;
    if (times) {
      clearTimeout(times);
      times = null;
    }
    times = setTimeout(function () {
      fn.call(context, args);
    }, wait);
  };
}
