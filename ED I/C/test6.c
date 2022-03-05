#include <stdio.h>
int main(void){
    int a = 3, b = 5;
    int *p = &a, *q = &b;
    //
    printf("*p = %d + %d\n",*p,*q);
    *p = *p + *q;

    //
    printf("*q = %d - %d\n",*p,*q);
    *q = *p - *q;

    //
    printf("*p = %d - %d\n",*p,*q);
    *p = *p - *q;
    
    printf("%d,%d\n",a,b);
    return 0;
}