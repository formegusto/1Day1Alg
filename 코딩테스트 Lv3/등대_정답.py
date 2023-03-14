def solution(n, lighthouse):
    def make_tree():
        tree = [[] for _ in range(n + 1)]
        for a, b in lighthouse:
            tree[a].append(b)
            tree[b].append(a)
        
        return tree
    
    def dfs(node, tree, visited):
        visited[node] = True
        children = [nn for nn in tree[node] if not visited[nn]]
        on, off = 1, 0
        if not children:
            print("not children",node)
            return on, off
        else:
            for child in children:
                child_on, child_off = dfs(child, tree, visited)
                on += min(child_on, child_off)
                off += child_on
            return on, off
        
    return min(dfs(1, make_tree(), [False for _ in range(n + 1)]))
    


print(solution(8, [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [5, 6],
  [5, 7],
  [5, 8],
]))