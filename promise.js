const numbs = [11, 1, 2, 3, 4, 8, 9, 10, 5, 7];

function kuaiPai(arr, left, right) {
  // 添加 left 和 right 参数
  if (left < right) {
    // 添加这个条件进入快速排序
    let kuai = left;
    let man = left - 1; // 添加 man
    let ns = right; // 修改 numbs.length 为 right

    while (kuai < ns) {
      // 修改这里，不需要让 kuai === ns
      kuai++;
      let manitem = arr[man + 1]; // 修改索引为 man + 1
      let kuaiitem = arr[kuai];
      if (manitem > kuaiitem) {
        arr[kuai] = manitem;
        arr[man + 1] = kuaiitem; // 修改索引为 man + 1
        man++;
      }
    }
    kuaiPai(arr, left, man); // 递归左边的子数组
    kuaiPai(arr, man + 1, right); // 递归右边的子数组
  }
  return arr;
}

// 在函数调用前添加以下代码
console.log("Before sorting: ", numbs);
kuaiPai(numbs, 0, numbs.length - 1);
console.log("After sorting: ", numbs);
