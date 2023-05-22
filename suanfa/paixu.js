var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

function lastData(data) {
  let left = 0,
    right = data.length - 1;

  while (left < right) {
    const temp = data[left];
    data[left] = data[right];
    data[right] = temp;
    left++;
    right--;
  }

  return data;
}
// console.log(lastData(datas));

// 冒泡

function sort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}
// console.log(sort(datas))

// 快速排序

function sortSuper(data) {
  if (data.length < 2) {
    return data;
  }
  let left = [],
    right = [],
    provide = Math.floor(data.length / 2),
    provideItem = data[provide];
  for (let i = 0; i < data.length; i++) {
    if (i === provide) {
      continue;
    }

    if (data[i] < provideItem) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }
  return [...sortSuper(left), provideItem, ...sortSuper(right)];
}

// console.log(sortSuper(datas))

function superMap(arrs, callback) {
  let resulet = [];
  for (let i = 0; i < arrs.length; i++) {
    resulet.push(callback(arrs[i], i));
  }

  return resulet;
}

let ns = superMap([1, 2, 3, 4], function (item) {
  return item + "hhaha";
});
// console.log(ns)

