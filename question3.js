function solution(A, N, B, M) {
    // Checking if any of the arrays is empty
    if (N === 0 || M === 0) {
        return -1;
    }

    // Checking if any of the arrays contains non-integer or negative number
    for (let i = 0; i < N; i++) {
        if (typeof A[i] !== "number" || A[i] < 0) {
            return -1;
        }
    }
    for (let i = 0; i < M; i++) {
        if (typeof B[i] !== "number" || B[i] < 0) {
            return -1;
        }
    }

    // Finding common values
    let minValue = Infinity;
    let foundCommonValue = false;
    const setB = new Set(B);

    for (let i = 0; i < N; i++) {
        if (setB.has(A[i])) {
            minValue = Math.min(minValue, A[i]);
            foundCommonValue = true;
        }
    }
    if (!foundCommonValue) {
        return -1;
    }
    return minValue;
}