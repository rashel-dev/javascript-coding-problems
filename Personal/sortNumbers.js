// type-1
let arr = [2, 3, 7, 5, 1, 5, 6];
let i, j;
for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
}

console.log(arr);

// type-2
let array = [12, 11, 13, 5, 6];
array.sort((a,b) => a - b);
console.log(array);