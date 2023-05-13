var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

function lastDatas(attr) {
  let left = 0,
    right = attr.length - 1;

  while (left < right) {
    let temp = attr[left];
    attr[left] = attr[right];
    attr[right] = temp;
    left++;
    right--;
  }
  return attr;
}

const lasts = lastDatas(datas);

// 数组倒序
// console.log(lasts);

// 快排
function quickSort(attr) {
  if (attr.length < 2) {
    return attr;
  }
  let left = [];
  let right = [];
  let privIndex = Math.floor(attr.length / 2);
  let privIetem = attr[privIndex];
  for (let i = 0; i < attr.length; i++) {
    if (i === privIndex) {
      continue;
    }
    if (attr[i] < privIetem) {
      left.push(attr[i]);
    } else {
      right.push(attr[i]);
    }
  }
  return [...quickSort(left), privIetem, ...quickSort(right)];
}
console.time("quickSortDatas");
const quickSortDatas = quickSort(datas);
console.timeEnd("quickSortDatas");

console.log(quickSortDatas);

// 冒泡排序
function bubbleSort(arr) {
  console.time("bubbleSort");
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[i] > arr[j + 1]) {
        // 前面大于后面
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  console.timeEnd("bubbleSort");
  return arr;
}

console.log(bubbleSort(datas));
