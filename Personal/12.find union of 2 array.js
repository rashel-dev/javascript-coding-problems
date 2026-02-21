function union(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}

console.log(union([1, 2, 3], [3, 4, 5]));