// call函数实现

// Function.prototype.call2 = function (context, ...args) {
//   context = context || window;
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// };
Function.prototype.call2 = function (context, ...args) {
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

const obj = { name: "张三" };
function sayHi(age, gender) {
  console.log(`我叫${this.name}，年龄：${age}，性别：${gender}`);
}

// sayHi.call2(obj, 18, "男");

// 每隔一秒输出1,2,3,4,5

function printNums() {
  let i = 0;
  let times = setInterval(() => {
    i++
    console.log(i)
    if(i >=5){
      clearInterval(times)
    }
  }, 1000);
}

printNums()

// JS多维数组 转为一维数组

const duowei_arrs = [1, [2, [3, 4], 5], 6];

// function flatten(arrs) {
//   let flattenedArray = arrs.reduce((acc, val) => {
//     return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
//   }, []);
//   return flattenedArray;
// }

function testnnn(arrs) {
  let ns = arrs.reduce((last, val) => {
    return Array.isArray(val) ? last.concat(testnnn(val)) : last.concat(val);
  }, []);
  return ns;
}

console.log(testnnn(duowei_arrs));
