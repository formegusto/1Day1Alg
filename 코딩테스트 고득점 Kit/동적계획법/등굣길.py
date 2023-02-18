def dp(road, r, c, acc):
    DIRS = [
        [1, 0],
        [0, 1]
    ]

    if r == len(road) - 1 and c == len(road[0]) - 1:
        if road[r][c][0] == 0:
            road[r][c] = [acc, road[r][c][1] + 1]
        else:
            if road[r][c][0] > acc:
                road[r][c] = [acc, 1]
            elif road[r][c][0] == acc:
                road[r][c] = [acc, road[r][c][1] + 1]
        
        print(road)
        return
    
    if road[r][c] == 0:
        road[r][c] = acc
    else:
        if road[r][c] < acc:
            return
        else:
            road[r][c] = min(road[r][c], acc)

    for dr, dc in DIRS:
        nr, nc = r + dr, c + dc
        if nr == len(road) or nc == len(road[0]) or road[nr][nc] == -1:
            continue
        if (acc + 1) > 1000000007:
            dp(road, nr, nc, (acc + 1) % 1000000007)
        else:
            dp(road, nr, nc, (acc + 1))

def solution(m, n, puddles):
    road = [[0 for _ in range(m)] for _ in range(n)]
    for c, r in puddles:
        road[r - 1][c - 1] = -1

    road[n - 1][m - 1] = [0, 0]

    dp(road, 0, 0, 0)

    return road[n - 1][m - 1][1]

print(solution(4, 3, [[2,2]]))
print(solution(4, 3, [[1,2],[2, 1]]))