//
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j< nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// const nums = [2, 7, 11, 15]
// const target = 9;
// console.log(twoSum(nums, target));

//type 2

var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i];
        if(map.has(remain)) {
            return [map.get(remain), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

const nums = [
    120, 450, 780, 990, 1500, 2300, 3400, 4700, 5100, 6300, 7200, 8100, 9500, 10400, 11800, 12500, 13900, 14200, 15800, 17000, 18900, 20500, 22200, 24000, 26000, 27500, 29900, 31500, 33000, 35500,
];
const target = 39400;
console.log(twoSum(nums, target));
