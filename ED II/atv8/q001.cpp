#include <iostream>
using namespace std;

class No{
    private:
    No *esq, *dir;
    int num, suc;

    public:
    No(int num){
        this->num = num;
        this->esq = NULL;
        this->dir = NULL;
        this->suc = 0;
    }

    int getNum(){
        return this->num;
    }
    int getSuc(){
        return this->suc;
    }

    No* getEsq(){
        return this->esq;
    }
    No* getDir(){
        return this->dir;
    }

    void setSuc(int s){
        this->suc = s;
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
        else inserirAux(num);
    }

    void inserirAux(int num){
        No* p = this->raiz;
        No* prev;

        while(p!=NULL){
            if(num < p->getNum()){
                if(p->getEsq() == NULL){
                    No* novo_no = new No(num);
                    novo_no->setDir(p);
                    novo_no->setSuc(1);
                    p->setEsq(novo_no);
                    p = NULL;
                }
                else{
                    prev = p;
                    p = p->getEsq();
                }
            }
            else if(num > p->getNum()){
                if(p->getDir() == NULL){
                    No* novo_no = new No(num);
                    p->setDir(novo_no);
                    p->setSuc(1);
                    p = NULL;
                }
                else{
                    prev = p;
                    p = p->getDir();
                }
            }
        }
    }

    No* getRaiz(){
        return this->raiz;
    }

    void inOrdem(){
        No *prev, *p = this->raiz;
        if(p != NULL){
            while(p->getEsq() != NULL){
                p = p->getEsq();
            }
            while(p != NULL){
                cout<<"<"<<p->getNum()<<">";
                prev = p;
                p = p->getDir();
                if(p != NULL && prev->getSuc() == 0){
                    while(p->getEsq() != NULL){
                        p = p->getEsq();
                    }
                }
            }
        }
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

    cout<<"In Ordem... ";
    arv1->inOrdem();


    return 0;
};