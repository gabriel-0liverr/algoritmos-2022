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

    No* getRaiz(){
        return this->raiz;
    }

    void remocaoSimples(int num, No* n){
        if(this->raiz->getNum() == num){
            this->raiz = NULL;
        }
        else{
            if(n!=NULL){
                if(n->getDir()->getNum() == num){
                    n->setDir(NULL);
                    return;
                }
                if(n->getEsq()->getNum() == num){
                    n->setEsq(NULL);
                    return;
                }
                remocaoSimples(num, n->getEsq());
                remocaoSimples(num, n->getDir());
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
        else cout<<"<VAZIO>";
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

    arv1->inserir(3);
    arv1->inserir(1);
    arv1->inserir(2);
    arv1->inserir(5);
    arv1->inserir(4);
    arv1->inserir(6);

    cout<<"Percurso em extensao 1... ";
    arv1->imprimirEmExtensao();

    cout<<"\nAltura da Arvore: "<<arv1->altura(arv1->getRaiz());
    //arv1->remocaoSimples(1,arv1->getRaiz());

    cout<<"\nPercurso em extensao 2... ";
    arv1->imprimirEmExtensao();

    return 0;
};