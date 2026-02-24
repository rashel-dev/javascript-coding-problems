function intersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter((value) => set2.has(value));
}

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

console.log(intersection(a, b));
