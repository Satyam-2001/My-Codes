#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct 
{
    int size, dsize, count;
    void *data;
} gstack;

gstack *createGStack(int stackSize, int dsize)
{
    gstack *s = malloc(sizeof(gstack));
    s->count = 0;
    s->size = stackSize;
    s->dsize = dsize;
    s->data = malloc(dsize * stackSize);
    return s;
}

int pushGStack(gstack *s, void *dp)
{
    if (s->count == s->size)
    {
        return 0;
    }
    void *target = s->data + (s->count * s->dsize);
    memcpy(target, dp, s->dsize);
    s->count++;
    return 1;
}

int popGStack(gstack *s, void *dp)
{
    if (s->count == 0)
    {
        return 0;
    }
    s->count--;
    void *source = s->data + (s->count * s->dsize);
    memcpy(dp, source, s->dsize);
    return 1;
}

int freeGStack(gstack *s)
{
    if(s == NULL){
        return 0;
    }
    free(s->data);
    free(s);
    return 1;
}

int isGStackFull(gstack *s)
{
    if (s->count == s->size )
    {
        return 1;
    }
    return 0;
}

int isGStackEmpty(gstack *s)
{
    if (s->count == 0)
    {
        return 1;
    }
    return 0;
}



int main(){
    gstack *s,*c;
    int ele,pop;
    printf("Initiallizing Integer Stack ");
    s = createGStack(10,sizeof(int));
    ele = 12;
    printf("\nisGStackEmpty : %d",isGStackEmpty(s));
    printf("\npushGStack : %d",pushGStack(s,&ele));//pushing 12 to stack
    ele = 10;
    printf("\npushGStack : %d",pushGStack(s,&ele));//pushing 10 to stack
    popGStack(s,&pop);
    printf("\nPopped Element : %d",pop);
    printf("\nisGStackFull : %d",isGStackFull(s));
    printf("\nfreeGStack : %d",freeGStack(s));

    char elec,popc;
    printf("\n\nInitiallizing Char Stack ");
    c = createGStack(5,sizeof(char));
    elec = 'a';
    printf("\nisGStackEmpty : %d",isGStackEmpty(c));
    printf("\npushGStack : %d",pushGStack(c,&elec));//pushing a to stack
    elec = 'c';
    printf("\npushGStack : %d",pushGStack(c,&elec));//pushing c to stack
    popGStack(c,&popc);
    printf("\nPopped Element : %c",popc);
    popGStack(c,&popc);
    printf("\nPopped Element : %c",popc);
    printf("\nisGStackFull : %d",isGStackFull(c));
    printf("\nfreeGStack : %d",freeGStack(c));
    return 0;

}