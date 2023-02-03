def solution(ps):
    answer = [0 for _ in range(len(ps))]
    stack = list()

    for idx, price in enumerate(ps):
        data = [price, idx + 1]
        if not (len(stack) == 0 or stack[-1][0] <= data[0]):
            while len(stack) > 0 and stack[-1][0] > data[0]:
                pop_data = stack.pop()
                time = data[1] - pop_data[1]
                answer[pop_data[1] - 1] = time    
        stack.append(data)

    while len(stack) != 0:
        pop_data = stack.pop()
        time = len(ps) - pop_data[1]

        answer[pop_data[1] - 1] = time
    
    return answer


print(solution([100,2,3,2,3,4,2,3,1,3,100,3,231,23]))