function debounce(fn, wait) {
  let time;
  return function () {
    let context = this;
    let args = arguments;
    if (time) {
      clearTimeout(time);
      time = null;
    }
    time = setTimeout(function () {
      fn.call(context, args);
    }, wait);
  };
}
let s = debounce(function (nums) {
  console.log(this.haha);
  console.log(nums);
}, 1000);

console.log(s("我是哈哈哈哈"));
