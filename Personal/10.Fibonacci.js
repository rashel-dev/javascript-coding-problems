function fibonacciUpToN(n) {
    let a = 0, b = 1;
    let result = [];

    while (a <= n) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result;
}

console.log(fibonacciUpToN(10));
