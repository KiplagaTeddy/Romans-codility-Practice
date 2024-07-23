function solution(R, V) {
    let currentBalanceA = 0;
    let currentBalanceB = 0;
    let minBalanceA = 0;
    let minBalanceB = 0;

    for (let i = 0; i < R.length; i++) {
        if (R[i] === 'A') {
            currentBalanceB -= V[i];
            currentBalanceA += V[i];
        } else {
            currentBalanceA -= V[i];
            currentBalanceB += V[i];
        }
        minBalanceA = Math.min(minBalanceA, currentBalanceA);
        minBalanceB = Math.min(minBalanceB, currentBalanceB);
    }
    const initialBalanceA = Math.abs(minBalanceA);
    const initialBalanceB = Math.abs(minBalanceB);
    return [initialBalanceA, initialBalanceB];
}