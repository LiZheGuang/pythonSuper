var a = [1, 2, 5, 4, 3, 8, 9, 0, 9, 9, 12];

function deep(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];
  // console.log(pivotIndex);
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...deep(left), pivot, ...deep(right)];
}

const s = deep(a);

console.log(s)

