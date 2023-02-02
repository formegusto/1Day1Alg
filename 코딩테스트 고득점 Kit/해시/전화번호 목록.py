import time

def solution1(phone_book):
    word_dict = dict()
    for word in phone_book:
        word_dict[word] = 0
    
    for word in phone_book:
        for i in range(1, len(word)):
            prefix = word[:i]
            if prefix in word_dict:
                return False
    
    return True

def solution2(phone_book):
    i = 0
    word_dict = dict()
    while i < len(phone_book):
        word_dict[phone_book[i]] = 0
        i += 1
    
    i = 0
    while i < len(phone_book):
        j = 1
        while j < len(phone_book[i]):
            if phone_book[i][:j] in word_dict:
                return False
            j += 1
        i += 1
    return True


input1 = ["119", "97674223", "1195524421"] # False
input2 = ["123","456","789"] # True
input3 = ["12","123","1235","567","88"] # False

start = time.time()
solution1(input1)
solution1(input2)
solution1(input3)
print("solution 1 time : {} second".format(time.time() - start))
start = time.time()
solution2(input1)
solution2(input2)
solution2(input3)
print("solution 2 time : {} second".format(time.time() - start))