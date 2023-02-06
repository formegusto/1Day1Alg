import heapq

heap = []
heapq.heappush(heap, 1)
heapq.heappush(heap, 10)
heapq.heappush(heap, 5)
heapq.heappush(heap, 100)
heapq.heappush(heap, 8)
print(heap, "\n")

# or
_heap = [100, 10, 1, 5, 8]
heapq.heapify(_heap)
print(_heap, "\n")


print(heapq.heappop(heap), heap)
print(heapq.heappop(heap), heap)
print(heapq.heappop(heap), heap)
print(heapq.heappop(heap), heap, "\n")

# Python의 Heap은 MinHeap에 기초한다.
# MaxHeap은 약간의 트릭을 필요로 한다.
heap_items = [1,3,5,7,9]
max_heap = []
for item in heap_items:
    # set의 첫 번째 요소를 가장 작게 만들어 큰 값이 앞으로 오게 함
    heapq.heappush(max_heap, (-item, item))

print(max_heap)