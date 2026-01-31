//type:1
const str = "12321";
const reverseStr = str.split("").reverse().join("");
if (str === reverseStr) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}

//type:2
function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));