#include <iostream>
#include <queue>
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

    void imprimirEmExtensao(){
        queue<No*> fila;
        No *n = this->raiz;
        if(n!=NULL){
            fila.push(n);
            while(!fila.empty()){
                n = fila.front();
                cout<<"<"<<n->getNum()<<">";
                fila.pop();
                if(n->getEsq() != 0) fila.push(n->getEsq());
                if(n->getDir() != 0) fila.push(n->getDir());
            }
        }
    }

    No* getRaiz(){
        return this->raiz;
    }

    void remocaoFusao(int num){
        No *n = this->raiz;
        No *prev = n;
        if(this->raiz->getNum() == num){
            if(n->getDir() == NULL && n->getEsq() == NULL){
                this->raiz = NULL;
                return;
            }
            else if(n->getEsq() != NULL && n->getDir() == NULL){
                this->raiz = this->raiz->getEsq();
                return;
            }
            else if(n->getEsq() == NULL && n->getDir() != NULL){
                this->raiz = this->raiz->getDir();
                return;
            }
            else if(n->getEsq() != NULL && n->getDir() != NULL){
                n = n->getEsq();
                prev = n;
                if(n->getDir() != NULL){
                    while(n->getDir() != NULL){
                        n = n->getDir();
                    }
                }
                n->setDir(this->raiz->getDir());
                this->raiz = prev;
                return;
            }
        }
        else{
            while(n != NULL){
                if(n->getNum() == num){
                    if(n->getDir() == NULL && n->getEsq() == NULL){
                        if(prev->getNum() > num){
                            prev->setEsq(NULL);
                        }
                        else{
                            prev->setDir(NULL);
                        }
                        return;
                    }
                    else if(n->getDir() == NULL && n->getEsq() != NULL){
                        n = n->getEsq();
                        if(n->getNum() > prev->getNum()) prev->setDir(n);
                        if(n->getNum() < prev->getNum()) prev->setEsq(n);
                        return;
                    }
                    else if(n->getDir() != NULL && n->getEsq() == NULL){
                        n = n->getDir();
                        if(n->getNum() > prev->getNum()) prev->setDir(n);
                        if(n->getNum() < prev->getNum()) prev->setEsq(n);
                        return;
                    }
                    else if(n->getDir() != NULL && n->getEsq() != NULL){
                        if(n->getNum() > prev->getNum()){
                            prev->setDir(n->getDir());
                            prev = n;
                            n = n->getDir();
                            if(n->getEsq() != NULL){
                                while(n->getEsq() != NULL){
                                    n = n->getEsq();
                                }
                            }
                            n->setEsq(prev->getEsq());
                            return;
                        }
                        if(n->getNum() < prev->getNum()){
                            prev->setEsq(n->getDir());
                            prev = n;
                            n = n->getDir();
                            if(n->getEsq() != NULL){
                                while(n->getEsq() != NULL){
                                    n = n->getEsq();
                                }
                            }
                            n->setEsq(prev->getEsq());
                            return;
                        }
                    }
                }
                else if(n->getNum() > num){
                    prev = n;
                    n = n->getEsq();
                }
                else if(n->getNum() < num){
                    prev = n;
                    n = n->getDir();
                }
            }
        }
    }

    int altura(No *n){
        if(n == NULL){
            return -1;
        }
        else{
            int esq = altura(n->getEsq());
            int dir = altura(n->getDir());
            if(esq > dir) return esq + 1;
            else return dir + 1;
        }
    }
};

int main(){
    Arvore *arv1 = new Arvore();

    arv1->inserir(50);
    arv1->inserir(30);
    arv1->inserir(60);
    arv1->inserir(10);
    arv1->inserir(40);
    arv1->inserir(80);
    arv1->inserir(20);
    arv1->inserir(70);
    arv1->inserir(90);

    cout<<"Percurso em extensao... ";
    arv1->imprimirEmExtensao();

    cout<<"\n\nAltura da Arvore: "<<arv1->altura(arv1->getRaiz())<<endl;

    cout<<"\nRemovendo "<<60;
    arv1->remocaoFusao(60);
    cout<<"\nRemovendo "<<20;
    arv1->remocaoFusao(20);

    cout<<"\n\nAltura da Arvore: "<<arv1->altura(arv1->getRaiz())<<endl;

    cout<<"\nPercurso em extensao... ";
    arv1->imprimirEmExtensao();

    return 0;
};