"use strict";

function slidingWindow(nums, target) {
  // 用左右指针定义一个滑动窗口，初始状态right在left的左侧
  var left = 0; // left指针指向当前窗口的最左端

  var right = 0; // right指针指向当前窗口的最右端

  var sum = 0; // sum用于累加当前窗口内的元素之和

  var minLength = Infinity; // 用于记录最小长度，初始设为正无穷大（无解）

  while (right < nums.length) {
    sum += nums[right]; // console.log(right,'右指针');
    // console.log(left,'左指针');

    right++; // 移动右指针

    while (sum >= target) {
      // console.log("当前right指针" + right, "sum=" + sum);
      // console.log("当前leftt指针" + left, "sum=" + sum);
      // 记录最短子数组长度
      minLength = Math.min(minLength, right - left); // console.log(minLength)

      console.log(sum, minLength);
      sum -= nums[left];
      left++;
      console.log(sum, minLength);
      console.log('这时的right => ' + right);
      console.log('这时的left => ' + left);
    }
  }

  console.log('最后抛出的SUM' + sum);
  return minLength === Infinity ? 0 : minLength;
}

var nums = [2, 3, 1, 2, 4, 3];
var target = 7;
var length = slidingWindow(nums, target);
console.log(length); // 输出2（符合条件的最短子数组为[4,3]，长度为2）