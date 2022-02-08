#include <stdio.h>

int makearray(int num)
{
    int i = 0;
    int a[1000];
    while (num)
    {
        a[i] = num % 2;
        i++;
        num /= 2;
    }
    int c = 0;
    while (i--)
    {
        if (a[i] == 1)
            c++;
    }
    if (c % 2 == 0)
        return num;
    else
        return 0;
}

int main(void)
{
    int T;
    scanf("%d", &T);
    while (T--)
    {
        int N;
        scanf("%d", &N);
        int b[N];
        int k = 0;
        int i = 0;
        while (N--)
        {
            if (makearray(i) != 0)
            {
                b[k] = makearray(i);
                k++;
                i++;
            }
            else
            {
                N = N + 1;
            }
        }

        for (int i = 0; i < N; i++)
        {
            printf("%d ", b[i]);
        }
        printf("\n");
    }
}