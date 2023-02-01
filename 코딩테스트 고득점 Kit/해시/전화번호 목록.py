def solution(phone_book):
    word_dict = dict()
    for word in phone_book:
        word_dict[word] = 0
    
    for word in phone_book:
        for i in range(1, len(word)):
            prefix = word[:i]
            if prefix in word_dict:
                return False
    
    return True

input1 = ["119", "97674223", "1195524421"] # False
input2 = ["123","456","789"] # True
input3 = ["12","123","1235","567","88"] # False

print(solution(input1))
print(solution(input2))
print(solution(input3))