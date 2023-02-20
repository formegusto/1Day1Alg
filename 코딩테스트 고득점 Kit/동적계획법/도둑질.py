# https://mjmjmj98.tistory.com/109
def solution(money):
    dpFirst = [0] * len(money)
    dpLast = [0] * len(money)
    
    # first 털기
    dpFirst[0] = money[0]
    for i in range(1, len(money) - 1):
        dpFirst[i] = max(dpFirst[i - 1], dpFirst[i - 2] + money[i])
        
    # last 털기 (first 포기)
    dpLast[0] = 0
    for i in range(1, len(money)):
        dpLast[i] = max(dpLast[i - 1], dpLast[i - 2] + money[i])
        
    return max(dpFirst[-2], dpLast[-1])