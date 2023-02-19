def solution(m, n, puddles):
    road = [[0 for _ in range(m)] for _ in range(n)]
    for c, r in puddles:
        road[r - 1][c - 1] = -1
        
    if road[0][1] == 0:
        road[0][1] = 1
    if road[1][0] == 0:
        road[1][0] = 1
        
    for i in range(0, n):
        for j in range(0, m):
            if road[i][j] == -1:
                continue
            if j != 0 and road[i][j - 1] != -1:
                road[i][j] = (road[i][j] + road[i][j - 1]) % 1000000007
            if i != 0 and road[i - 1][j] != -1:
                road[i][j] = (road[i][j] + road[i - 1][j]) % 1000000007
    
    return road[n - 1][m - 1]