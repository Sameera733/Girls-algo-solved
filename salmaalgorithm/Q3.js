// To Check Number is a Prime or Not

function isPrimeorNot(N) {
    if (N < 2)
        return `${N} is not a Prime `


for ( let i = 2; i < N; i++) {
    if (N % i === 0) {
        return `${N} is not a Prime Number`
    }
}
    return `${N} is a Prime Number`
}

console.log(isPrimeorNot(15));