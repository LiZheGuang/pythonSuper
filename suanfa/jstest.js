// call
Function.prototype.call2 = function (context, ...args) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  return result
};
const obj = { name: "张三" };
function sayHi(age, gender) {
  console.log(`我叫${this.name}，年龄：${age}，性别：${gender}`);
}

sayHi.call2(obj, 18, "男");

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

function reduceArrs(arrs){
  return arrs.reduce((pre,val)=>{
    return Array.isArray(val) ? pre.concat(reduceArrs(val)) : pre.concat(val) 
  },[])
}

// console.log(reduceArrs(duowei_arrs));

// Promise.all

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const reusle = [];
    let commitNum = 0;
    const len = promises.length;
    promises.map((promise, index) => {
      promise
        .then((res) => {
          reusle[index] = res;
          commitNum++;
          console.log(commitNum, len);
          if (commitNum === len) {

            resolve(reusle);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 1000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 500);
});
// promiseAll([p3, p1, p2]).then(res=>console.log(res))

// new 操作符实现

function myNew(fn, ...args) {
  // 创建一个新的对象，该对象继承构造函数的原型。
  const obj = Object.create(fn.prototype);
    // 调用构造函数，并将新对象作为函数的上下文（即this关键字）。
  const result = fn.apply(obj,args)
  if(typeof result === "object" && result !==null){
    return result
  }else{
    return obj
  }
}

function new_demo_super(name, age) {
  this.name = name;
  this.age = age;
}

let newtext = myNew(new_demo_super,'John', 23);
console.log(newtext,'tee')