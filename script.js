function fibonacci(num) {
    // Handle the base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    // Initialize the first two Fibonacci numbers
    let a = 0;
    let b = 1;
    
    // Iterate to compute the Fibonacci number at position 'num'
    for (let i = 2; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    
    // Return the Fibonacci number at the 'num' position
    return b;
}
