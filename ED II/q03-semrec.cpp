#include <iostream>
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

    void inserirAux(No* no, int num){ //sem recursao
        while(no!=NULL){
            if(num < no->getNum()){
                if(no->getEsq() == NULL){
                    No* novo_no = new No(num);
                    no->setEsq(novo_no);
                    no = NULL;
                }
                else{
                    no = no->getEsq();
                }
            }
            else if(num > no->getNum()){
                if(no->getDir() == NULL){
                    No* novo_no = new No(num);
                    no->setDir(novo_no);
                    no = NULL;
                }
                else{
                    no = no->getDir();
                }
            }
        }
        
    }

    No* getRaiz(){
        return this->raiz;
    }

    void imprimirPreOrdem(No *n){
        if(this->raiz == NULL){
            cout<<"\n <VAZIO>";
        }
        else{
            if(n!=NULL){
                cout<< "<" << n->getNum();
                imprimirPreOrdem(n->getEsq());
                imprimirPreOrdem(n->getDir());
                cout<<">";
            }
            else cout<<"<>";
        }
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

    void imprimirPosOrdem(No *n){
        if(this->raiz == NULL){
            cout<<"\n <VAZIO>";
        }
        else{
            if(n != NULL){
                imprimirPosOrdem(n->getEsq());
                imprimirPosOrdem(n->getDir());
                cout<< "<" << n->getNum();
                cout<<">";
            }
            else cout<<"<>";
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

    cout<<"PreOrdem..."<<endl;
    arv1->imprimirPreOrdem(arv1->getRaiz());
    cout<<"\n\nInOrdem..."<<endl;
    arv1->imprimirInOrdem(arv1->getRaiz());
    cout<<"\n\nPosOrdem..."<<endl;
    arv1->imprimirPosOrdem(arv1->getRaiz());

    return 0;
};
