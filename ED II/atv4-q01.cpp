#include <iostream>
using namespace std;

class No{
    private:
    int num;
    No *esq, *dir;
    int suc;  //sucessor

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

    void setEsq(No* no){
        this->esq = no;
    }
    void setDir(No* no){
        this->dir = no;
    }
    void setSuc(int s){
        this->suc = s;
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
            return;
        }
        else{
            No* novo_no = new No(num);
            No* p = this->raiz;
            No* prev = NULL;

            while(p != 0){
                prev = p;
                if(p->getNum() > num){
                    p = p->getEsq();
                }
                else if(p->getSuc() == 0){
                    p = p->getDir();
                }
                else break;
            }

            if(prev->getNum() > num){
                prev->setEsq(novo_no);
                novo_no->setSuc(1);
                novo_no->setDir(prev);
            }
            else if(prev->getSuc() == 1){
                novo_no->setSuc(1);
                prev->setSuc(0);
                novo_no->setDir(prev->getDir());
                prev->setDir(novo_no);
            }
            else{
                prev->setDir(novo_no);
            }
        }
    }

    No* getRaiz(){
        return this->raiz;
    }

    void imprimirPreOrdem(No* p){
        cout<<"\nPRE ORDEM (arv ALINHADA)... ";
        No *prev = NULL;
        if(p != 0){
            while(p->getEsq() != 0){
                cout<<p->getNum()<<"><";
                p = p->getEsq();
            }
            while(p != 0){
                cout<<p->getNum()<<"><";
                prev = p;
                if(p->getEsq() == 0) p = p->getDir();
                else p = p->getEsq();

                if(p != 0 && prev->getSuc() == 0){
                    if(p->getEsq() != 0){
                        cout<<p->getNum()<<"><";
                        p = p->getEsq();
                    }
                }
                else if(p != 0 && prev->getSuc() == 1){
                    p = p->getDir();
                }
            }
        }
    }

    void imprimirInOrdem(No* p){
        cout<<"\nIN ORDEM...\n";
        No *prev = NULL;
        if(p != 0){
            while(p->getEsq() != 0){
                p = p->getEsq();
            }
            while(p != 0){
                cout<<p->getNum()<<endl;
                prev = p;
                p = p->getDir();
                if(p != 0 && prev->getSuc() == 0){
                    while(p->getEsq() != 0){
                        p = p->getEsq();
                    }
                }
            }
        }
    }
};

int main(){
    Arvore *arv1 = new Arvore();

    /*arv1->inserir(5);
    arv1->inserir(3);
    arv1->inserir(4);
    arv1->inserir(1);
    arv1->inserir(2);
    arv1->inserir(6);
    arv1->inserir(8);
    arv1->inserir(7);
    arv1->inserir(9);*/
    arv1->inserir(3);
    arv1->inserir(1);
    arv1->inserir(5);
    arv1->inserir(2);
    arv1->inserir(4);
    arv1->inserir(6);

    //arv1->imprimirInOrdem(arv1->getRaiz());
    arv1->imprimirPreOrdem(arv1->getRaiz());

    return 0;
};