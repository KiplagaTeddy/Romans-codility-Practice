from itertools import permutations
#permutations mixes the elements of the list into all possible orders 


def solution(A, B, C, D):
    digits = [A, B, C, D]
    valid_times = set()
    
    
    for permutation in permutations(digits):
        hours = permutation[0] * 10 + permutation[1]
        minutes = permutation[2] * 10 + permutation[3]
        
        # Check if the time is valid

        if 0 <= hours < 24 and 0 <= minutes < 60:
            time_str = f"{hours:02}:{minutes:02}"
            valid_times.add(time_str)
    
    
    return len(valid_times)

print(solution(1, 8, 3, 2))  # Output: 6
print(solution(2, 3, 3, 2))  # Output: 3
print(solution(6, 2, 4, 7))  # Output: 0
print(solution(5, 5, 5, 1)) # Output: 1



