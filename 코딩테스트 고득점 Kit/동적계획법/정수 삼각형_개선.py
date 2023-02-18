# def dp(triangle, pos, prev_v):
#     i, j = pos

#     v = prev_v + triangle[i][j]

#     global max_v 
#     if v > max_v:
#         max_v = v

#     next_i = i + 1
#     left_j = j
#     right_j = j + 1
    

#     if next_i >= len(triangle):
#         return
    
#     dp(triangle, [next_i, left_j], v)
#     dp(triangle, [next_i, right_j], v)

def solution(triangle):
    dp = [[triangle[0][0]]]
    max_v = triangle[0][0]

    for i in range(1, len(triangle)):
        dp.append([])
        prev_step = dp[i - 1]
        for j in range(len(triangle[i])):
            step = None
            if j == 0:
                step = triangle[i][j] + prev_step[j]
            elif j == len(triangle[i]) - 1:
                step = triangle[i][j] + prev_step[j - 1]
            else:
                step = max(triangle[i][j] + prev_step[j], triangle[i][j] + prev_step[j - 1])
            max_v = max_v if max_v > step else step
            dp[i].append(step)
            
    return max_v

value = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
print(solution(value));

# 메모리에 들어가는 값에 최댓값을 선택하는 문제
# 이거 한 줄로 푼 사람 있음... 천재,,