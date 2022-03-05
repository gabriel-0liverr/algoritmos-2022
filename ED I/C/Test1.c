#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char nome[21];
    float A, B, C, R;
    
    //Teste de char
    printf ("\nDigite seu nome: ");
    gets (nome);
    printf ("\nAlo, %s .\nBem-vindo ao teste 1 de C!\n",nome);

    //Teste numérico
    printf ("\nAtribua os valores de...\nA = ");
    scanf ("%f",&A);

    printf ("\nB = ");
    scanf ("%f",&B);

    printf ("\nC = ");
    scanf ("%f",&C);

    R = A + B - C;
    printf ("\n\nR = %0.1f + %0.1f - %0.1f",A,B,C);
    printf ("\n\nR = %0.1f",R);

    system ("pause");
}