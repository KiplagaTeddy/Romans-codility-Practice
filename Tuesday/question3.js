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

// Test Case 1: Common values with duplicates
console.log("Test Case 1:", solution([1, 2, 2, 3, 4], 5, [4, 4, 2], 3)); // Expected output: 2

// Test Case 2: All elements are the same
console.log("Test Case 2:", solution([7, 7, 7], 3, [7, 7, 7], 3)); // Expected output: 7

// Test Case 3: Large arrays with one common value at the start
console.log("Test Case 3:", solution([...Array(100000).keys()].map(x => x + 1), 100000, [...Array(100000).keys()].map(x => x + 100000), 100000)); // Expected output: 100001

// Test Case 4: Large arrays with no common values
console.log("Test Case 4:", solution([...Array(100000).keys()].map(x => x + 1), 100000, [...Array(100000).keys()].map(x => x + 200000), 100000)); // Expected output: -1

// Test Case 5: Array `A` has values greater than values in `B`
console.log("Test Case 5:", solution([100, 200, 300], 3, [1, 2, 3], 3)); // Expected output: -1

// Test Case 6: Array `B` has values greater than values in `A`
console.log("Test Case 6:", solution([1, 2, 3], 3, [100, 200, 300], 3)); // Expected output: -1

// Test Case 7: Arrays with duplicate common values
console.log("Test Case 7:", solution([1, 1, 2, 2, 3], 5, [2, 2, 1, 1], 4)); // Expected output: 1

// Test Case 8: Arrays with non-overlapping ranges
console.log("Test Case 8:", solution([10, 20, 30], 3, [40, 50, 60], 3)); // Expected output: -1

// Test Case 9: Large arrays with a common value in the middle
console.log("Test Case 9:", solution([...Array(100000).keys()].map(x => x + 1), 100000, [...Array(100000).keys()].map(x => x + 50000), 100000)); // Expected output: 50001

// Test Case 10: Arrays with one element, no common value
console.log("Test Case 10:", solution([1], 1, [2], 1)); // Expected output: -1