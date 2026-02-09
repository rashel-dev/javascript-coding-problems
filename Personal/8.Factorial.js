function factorial(n) {
    if (n < 0) return "Negative number not allowed";

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(0));
