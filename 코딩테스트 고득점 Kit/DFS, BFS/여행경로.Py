def solution(tickets):
    routes = dict()

    for (start, end) in tickets:
        routes[start] = routes.get(start, []) + [end]  
 
    for r in routes.keys():
        routes[r].sort(reverse=True)

    s = ["ICN"]
    path = []
    
    while s:
        top = s[-1]

        if top not in routes or len(routes[top]) == 0:
            path.append(s.pop())
        else:
            s.append(routes[top][-1])
            routes[top] = routes[top][:-1]

        print(routes)
    
    return path[::-1]


solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])

solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])

print(solution([
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
  ]))