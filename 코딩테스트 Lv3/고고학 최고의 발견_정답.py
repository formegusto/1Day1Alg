from copy import deepcopy
from itertools import product

def solution(clocks):
    length = len(clocks)
    
    for mask in product(range(4), repeat=length):
        print(mask)
    


solution([
  [0, 3, 3, 0],
  [3, 2, 2, 3],
  [0, 3, 2, 0],
  [0, 3, 3, 3],
  [0, 3, 3, 3],
])