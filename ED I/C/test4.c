#include <stdio.h>
#include <string.h>

int main(void){
    char s[3] = "um";
    char t[3] = "un";

    if (s == s) puts("iguais");
    else puts("diferentes");

    return 0;
}