var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

function lastData(arrs) {
  let left = 0,
    right = arrs.length - 1;

  while (left < right) {
    let temp = arrs[left];
    arrs[left] = arrs[right];
    arrs[right] = temp;
    left++;
    right--;
  }
  return arrs;
}

// console.log(lastData(datas))

// maopao
function sort(arrs) {
  for (let i = 0; i < arrs.length - 1; i++) {
    for (let j = 0; j < arrs.length - i - 1; j++) {
      if (arrs[j] > arrs[j + 1]) {
        let temp = arrs[j];
        arrs[j] = arrs[j + 1];
        arrs[j + 1] = temp;
      }
    }
  }
  return arrs;
}

// console.log(sort(datas))

// kuaipai

function sortSuper(arrs) {
  if (arrs.length < 2) {
    return arrs;
  }
  let left = [],
    right = [],
    provide = Math.floor(arrs.length / 2),
    provideItem = arrs[provide];

  for (let i = 0; i < arrs.length; i++) {
    if (i === provide) continue;
    if (arrs[i] < provideItem) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }
  return [...sortSuper(left), provideItem, ...sortSuper(right)];
}

console.log(sortSuper(datas));
