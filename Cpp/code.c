#include <stdio.h>

int max(int a,int b) {
    return (a > b ? a : b);
}

typedef struct
{
    int sign;       /* sign(+1 or -1) of a number */
    char *digits;   /* digits as a char array, MSB at ind 0. */
    int last_index; /* index of last digit. */
} my_int;

my_int add(my_int num1, my_int num2) {
    int n = num1.last_index + 1, m = num2.last_index + 1, i = max(n, m);
    char* digits = (char*)malloc((i + 1) * sizeof(char));
    int sum = 0;
    while(sum || --n >= 0 || --m >= 0) {
        sum += (n >= 0 ? num1.disits[n] - '0': 0) + (n >= 0 ? num2.disits[n] - '0': 0)
        digits[]
    }
}