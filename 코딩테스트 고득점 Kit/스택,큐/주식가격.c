#include <stdio.h>
#include <stdlib.h>

int * solution(int prices[], size_t prices_len) {
    int * answer = (int*) malloc(sizeof(int) * prices_len);
    int ** stack = (int**) malloc(sizeof(int*) * prices_len);

    int i = 0;
    int top = 0;
    while(i < prices_len) {
        int data[] = { prices[i], i + 1 };
        
        if(top <= 0 || stack[top - 1][0] <= data[0]) {
            stack[top] = (int *) (malloc(sizeof(int) * 2));
            stack[top][0] = data[0];
            stack[top][1] = data[1];
            top++;
        } else {
            while(top > 0 && stack[top - 1][0] > data[0]) {
                int * popData = stack[top - 1];
                int time = data[1] - popData[1];

                answer[popData[1] - 1] = time;
                top--;
            }

            stack[top] = (int *) (malloc(sizeof(int) * 2));
            stack[top][0] = data[0];
            stack[top][1] = data[1];
            top++;
        }

        i++;
    }

    while(top > 0) {
        int * popData = stack[top - 1];
        int time = prices_len - popData[1];

        answer[popData[1] - 1] = time;

        top--;
    }

    return answer;
}

int main() {
    int prices[] = { 100, 2, 3, 2, 3, 4, 2, 3, 1, 3, 100, 3, 231, 23 };
    int * result = solution(prices, 14);

    for(int i=0;i<14;i++) {
        printf("%d ", result[i]);
    }
}