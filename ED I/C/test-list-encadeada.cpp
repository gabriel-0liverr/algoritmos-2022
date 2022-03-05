#include <stdio.h>
#include <iostream>
#define fmt "%d"
using namespace std;
typedef int Item;
typedef struct no{
    Item item;
    struct no *prox;
}*Lista;

Lista inclue(Item x, Lista p){
    Lista n = (Lista)malloc(sizeof(Lista));
    n->item = x;
    n->prox = p;
    return n;
}

void mostra(Lista I){
    int c = 0;
    while(I != NULL){
        cout<<"List["<<c<<"] = "<<I->item<<endl;
        c++;
        I = I->prox;
    };
}

main(){
    int x, c = 0, op = 1;
    Lista I = NULL;
    cout<<"Definida uma lista I, preencha-a...";
    while(op == 1){
        c++;
        cout<<"\nInsercao n"<<c<<" = ";
        cin>>x;
        I = inclue(x,I);
        cout<<"\nContinuar inserindo? (1-sim | 0-nao)\n";
        cin>>op;
    };
    cout<<"\nLista Completa...\n";
    mostra(I);
}