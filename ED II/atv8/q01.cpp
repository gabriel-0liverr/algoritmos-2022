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
        else inserirAux(this->raiz, num);
    }

    void inserirAux(No* no, int num){
        No* p = this->raiz;
        No* prev;

        while(p != NULL){
            prev = p;
            if(p->getNum() > num) p = p->getEsq();
            else if(p->getSuc() == 0) p = p->getDir();
            else break;
        }

        if(prev->getNum() > num){
            No* novo_no = new No(num);
            cout<<" >"<<prev->getNum()<<num<<"< ";
            prev->setEsq(novo_no);
            novo_no->setSuc(1);
            novo_no->setDir(prev);
        }

        else if (this->raiz->getDir() == NULL && this->raiz->getNum() < num){
            No* novo_no = new No(num);
            cout<<"-"<<prev->getNum()<<num<<"-";
            novo_no->setEsq(this->raiz);
            this->raiz->setDir(novo_no);
            this->raiz->setSuc(1);
        }

        else if(prev->getSuc() == 1){
            No* novo_no = new No(num);
            cout<<" <"<<prev->getNum()<<num<<"> ";
            novo_no->setSuc(1);
            prev->setSuc(0);
            novo_no->setDir(prev->getDir());
            prev->setDir(novo_no);
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