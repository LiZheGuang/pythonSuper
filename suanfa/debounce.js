function debounce(fn, wait) {
  let times;
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

let s = debounce(function (nums) {
  console.log(this.haha);
  console.log(nums);
}, 1000);

console.log(s("我是哈哈哈哈"));
