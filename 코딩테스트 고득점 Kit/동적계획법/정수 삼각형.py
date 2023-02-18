def dp(triangle, pos, prev_v):
    i, j = pos

    v = prev_v + triangle[i][j]

    global max_v 
    if v > max_v:
        max_v = v

    next_i = i + 1
    left_j = j
    right_j = j + 1
    

    if next_i >= len(triangle):
        return
    
    dp(triangle, [next_i, left_j], v)
    dp(triangle, [next_i, right_j], v)

def solution(triangle):
    global max_v
    max_v = 0

    dp(triangle, [0, 0], 0)

    return max_v

value = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
print(solution(value));