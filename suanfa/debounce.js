function debounce(fn, wait) {
  let times = null;
  return function () {
    let context = this,
      args = arguments;
    if (times) {
      clearTimeout(times);
      times = null;
    }

    times = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

let s = debounce(function (nums) {
  console.log(this.haha);
  console.log(nums);
}, 1000);

console.log(s("我是哈哈哈哈"));
