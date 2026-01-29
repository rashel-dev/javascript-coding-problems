// type: 1
// const arr = [5, 12, 8, 20, 3];
// const max = Math.max(...arr);

// console.log(max);

// type: 2

const arr = [5, 12, 8, 20, 3];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);