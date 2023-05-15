var datas = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

function lastDatas(arrs) {
  let left = 0;
  let right = arrs.length - 1;
  while (left < right) {
    let temp = arrs[left];
    arrs[left] = arrs[right];
    arrs[right] = temp;
    left++;
    right--;
  }

  return arrs;
}

// console.log(lastDatas(datas))

function quitSort(arrs) {
  if (arrs.length < 2) {
    return arrs;
  }
  let left = [];
  let right = [];
  let priveIndex = Math.floor(arrs.length / 2);
  let priveItem = arrs[priveIndex];
  for (let i = 0; i < arrs.length; i++) {
    if (i === priveIndex) {
      continue;
    }
    if (arrs[i] < priveItem) {
      left.push(arrs[i]);
    } else {
      right.push(arrs[i]);
    }
  }
  return [...quitSort(left), priveItem, ...quitSort(right)];
}


console.log(quitSort(datas))


// 冒泡

function sortArrs(arrs){
    
    for(let i = 0; i<arrs.length - 1;i++){
        for(let j = 0; j < arrs.length - i - 1;j++){
            // console.log(j)
            if(arrs[j] > arrs[j + 1]){
                let temp = arrs[j]
                arrs[j] = arrs[j +1]
                arrs[j + 1] = temp
            }
        }
    }
    return arrs
}

console.log(sortArrs(datas))