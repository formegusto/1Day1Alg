import heapq

def solution(sco, K):
    answer = 0
    
    heapq.heapify(sco)
    while True:
        min_sco_1 = heapq.heappop(sco)
        if min_sco_1 >= K:
            break
        else:
            if len(sco) < 1:
                return -1
        min_sco_2 = heapq.heappop(sco)
        new_sco = min_sco_1 + (min_sco_2 * 2)
        heapq.heappush(sco,new_sco)
        answer += 1
    
    return answer