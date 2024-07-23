function solution(R, V, N) {
    // Initializing balances for the banks
    // We start by assuming both banks had an initial balance of 0
    let initialBalanceA = 0;
    let initialBalanceB = 0;
    let currentBalanceA = 0;
    let currentBalanceB = 0;
  
    for (let i = 0; i < N; i++) {
      if (R[i] === 'A') {
        // If the transaction is for bank A
        // Increase the balance of bank A and decrease the balance of bank B
        currentBalanceA += V[i];
        currentBalanceB -= V[i];
        
        // Track the maximum negative balance of bank B
        if (currentBalanceB < 0) {
          initialBalanceB = Math.max(initialBalanceB, -currentBalanceB);
        }
      } else if (R[i] === 'B') {
        // If the transaction is for bank B
        // Increase the balance of bank B and decrease the balance of bank A
        currentBalanceB += V[i];
        currentBalanceA -= V[i];
        
        // Track the maximum negative balance of bank A
        if (currentBalanceA < 0) {
          initialBalanceA = Math.max(initialBalanceA, -currentBalanceA);
        }
      }
    }
  
    // Return the maximum required balance for banks A and B
    return [initialBalanceA, initialBalanceB];
  }
  
  let R = "BAABA";
  let V = [2, 4, 1, 1, 2];
  let N = R.length;
  console.log(solution(R, V, N)); // Output: [2, 4]
  
  R = "ABAB";
  let V2 = [10, 5, 10, 15];
  let N2 = R.length;
  console.log(solution(R, V2, N2)); // Output: [0, 15]
  
  R = "B";
  let V3 = [100];
  let N3 = R.length;
  console.log(solution(R, V3, N3)); // Output: [100, 0]
  
  
  