#include <iostream>
#include <bits/stdc++.h>
#include <cmath>
#include <queue>
#include <string>
using namespace std;

class No{
    private:
    No *esq, *dir;
    int num;

    public:
    No(int num){
        this->num = num;
        this->esq = NULL;
        this->dir = NULL;
    }

    int getNum(){
        return this->num;
    }

    No* getEsq(){
        return this->esq;
    }

    No* getDir(){
        return this->dir;
    }

    void setEsq(No* no){
        this->esq = no;
    }

    void setDir(No* no){
        this->dir = no;
    }
};

class Arvore{
    private:
    No* raiz;

    public:
    Arvore(){
        raiz = NULL;
    }

    void inserir(int num){
        if(this->raiz==NULL){
            this->raiz = new No(num);
        }
        else inserirAux(this->raiz, num);
    }
    void inserirAux(No* no, int num){
        if(num < no->getNum()){
            if(no->getEsq() == NULL){
                No* novo_no = new No(num);
                no->setEsq(novo_no);
            }
            else{
                inserirAux(no->getEsq(), num);
            }
        }
        else if(num > no->getNum()){
            if(no->getDir() == NULL){
                No* novo_no = new No(num);
                no->setDir(novo_no);
            }
            else{
                inserirAux(no->getDir(), num);
            }
        }
    }

    No* getRaiz(){
        return this->raiz;
    }

    void imprimirInOrdem(No *n){
        if(this->raiz == NULL){
            cout<<"\n <VAZIO>";
        }
        else{
            if(n != NULL){
                imprimirInOrdem(n->getEsq());
                cout<< "<" << n->getNum();
                imprimirInOrdem(n->getDir());
                cout<<">";
            }
            else cout<<"<>";
        }
    }
    
    int contagem(){
        int c = 0;
        queue<No*> fila;
        No *n = this->raiz;
        if(n!=NULL){
            fila.push(n);
            while(!fila.empty()){
                n = fila.front();
                c++;
                fila.pop();
                if(n->getEsq() != 0) fila.push(n->getEsq());
                if(n->getDir() != 0) fila.push(n->getDir());
            }
            return c;
        }
        else cout<<"<VAZIO>";
    }

    int altura(No *n){
        if(n == NULL){
            return 0; //caso vazia
        }
        else{
            int esq = altura(n->getEsq());
            int dir = altura(n->getDir());
            if(esq > dir) return esq + 1;
            else return dir + 1;
        }
    }

    int altMin(){
        int c = this->contagem();
        int altMin = 1 + trunc(log2(c));
        return altMin;
    }

    string isComplete(){
        int h = this->altura(this->raiz);
        int hMin = this->altMin();
        if(h >= hMin) return "YES";
        else return "NO";
    }
};

int main(){
    Arvore *arv1 = new Arvore();

    arv1->inserir(3);
    arv1->inserir(1);
    arv1->inserir(2);
    arv1->inserir(5);
    arv1->inserir(4);
    arv1->inserir(6);
    
    cout<<"Arv 1..."<<endl;
    arv1->imprimirInOrdem(arv1->getRaiz());     //impressao
    cout<<"\nNumero de elementos: "<<arv1->contagem();      //numero de elementos
    cout<<"\nAltura h = "<<arv1->altura(arv1->getRaiz());   //Altura h
    cout<<"\nAltura Minima = "<<arv1->altMin();         //Altura Minima
    cout<<"\nIs Complete? "<<arv1->isComplete();        //verificando se é completa ou nao

    return 0;
};