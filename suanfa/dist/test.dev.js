"use strict";

// function slidingWindow(nums, target) {
//   // 用左右指针定义一个滑动窗口，初始状态right在left的左侧
//   let left = 0; // left指针指向当前窗口的最左端
//   let right = 0; // right指针指向当前窗口的最右端
//   let sum = 0; // sum用于累加当前窗口内的元素之和
//   let minLength = Infinity; // 用于记录最小长度，初始设为正无穷大（无解）
//   while (right < nums.length) {
//     sum += nums[right];
//     // console.log(right,'右指针');
//     // console.log(left,'左指针');
//     right++; // 移动右指针
//     while (sum >= target) {
//       // console.log("当前right指针" + right, "sum=" + sum);
//       // console.log("当前leftt指针" + left, "sum=" + sum);
//       // 记录最短子数组长度
//       minLength = Math.min(minLength, right - left);
//       sum -=  nums[left]
//       left++;
//     }
//   }
//   console.log('最后抛出的SUM' + sum)
//   return minLength === Infinity ? 0 : minLength;
// }
// let nums = [2, 3, 1, 2, 4, 3];
// let target = 7;
// let length = slidingWindow(nums, target);
// console.log(length); // 输出2（符合条件的最短子数组为[4,3]，长度为2）
function longestSubstring(s) {
  var n = s.length;
  var set = new Set();
  var ans = 0;

  for (var i = 0, j = 0; j < n; j++) {
    while (set.has(s[j])) {
      // 窗口中出现重复元素时，缩小窗口
      set["delete"](s[i]);
      i++;
    }

    set.add(s[j]); // 扩展窗口

    ans = Math.max(ans, j - i + 1); // 更新答案
  }

  console.log(set);
  return ans;
}

function longsrtString(s) {
  var n = s.length;
  var set = new Set();
  var ans = 0;

  for (var i = 0, j = 0; j < n; j++) {
    while (set.has(s[j])) {
      set["delete"](s[i]);
      i++;
    }

    set.add(s[j]);
    ans = Math.max(ans, j - i + 1); // 更新答案
  }

  console.log(set);
  return ans;
}

console.log(longsrtString("abcdsjdjxhdurxdf"));