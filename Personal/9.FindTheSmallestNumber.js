const arr = [5, 2, 9, 1, 6];
const smallest = Math.min(...arr);

console.log(smallest);

// type: 2
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);