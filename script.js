def fibonacci(n):
    # Base cases
    if n == 0:
        return 0
    elif n == 1:
        return 0
    
    # Initialize the Fibonacci sequence
    fib = [0] * (n + 1)
    fib[1] = 1
    
    # Calculate Fibonacci numbers
    for i in range(2, n + 1):
        fib[i] = fib[i - 1] + fib[i - 2]
    
    return fib[n - 1]

# Test cases
print(fibonacci(1))  # Output: 0
print(fibonacci(5))  # Output: 3


module.exports = fibonacci;
