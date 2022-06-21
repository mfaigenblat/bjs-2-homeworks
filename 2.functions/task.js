// Задание 1
function getArrayParams(arr) {
  let min = Infinity; 
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

return { min: min, max: max, avg: avg };
}

console.log(getArrayParams([-100, 100, 10]));


// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = arr[0];

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if(arr[i] < min) {
      min = arr[i];
    }
  }

  return Math.abs(min - max);
}