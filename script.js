
function fibonacci(n) {

	let a = -1
    let b = 1
    let c = 0
    for(let i=0; i<=n; i++)
    {
        c = a+b
        if(i==n)
        {
            return c
        }
        a = b
        b = c
    }
	return 0
}