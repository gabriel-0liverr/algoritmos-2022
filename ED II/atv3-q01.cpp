#include <iostream>
#include <stack>
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

    void imprimirPreOrdem(){
        stack<No*> pilha;
        No *p = this->raiz;

        if(p!=0){
            pilha.push(p);
            while(!pilha.empty()){
                p = pilha.top();
                cout<<pilha.top()->getNum()<<endl;
                pilha.pop();
                if(p->getDir() != 0){
                    pilha.push(p->getDir());
                }
                if(p->getEsq() != 0){
                    pilha.push(p->getEsq());
                }
            }
        }
    }

    void imprimirInOrdem(){
        stack<No*> pilha;
        No *p = this->raiz;

        if(p!=0){
            pilha.push(p);
            while(!pilha.empty()){                
                if(p->getEsq() != 0){
                    pilha.push(p->getEsq());
                }
                p = pilha.top();
                cout<<pilha.top()->getNum()<<endl;
                pilha.pop();
                if(p->getDir() != 0){
                    pilha.push(p->getDir());
                    p = pilha.top();
                }
            }
        }
    }

    void imprimirPosOrdem(){
        stack<No*> pilha;
        No *p = this->raiz;

        if(p!=0){
            pilha.push(p);
            pilha.push(p->getDir());
            pilha.push(p->getEsq());
            p = pilha.top();
            do{                
                if(p->getDir() != 0){
                    pilha.push(p->getDir());
                }
                if(p->getEsq() != 0){
                    pilha.push(p->getEsq());
                }                
                p = pilha.top();
                cout<<pilha.top()->getNum()<<endl;
                pilha.pop();
            }while(!pilha.empty());
        }
    }//incompleto ;-; 
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
    arv1->imprimirPreOrdem();
    cout<<"\n\nInOrdem..."<<endl;
    arv1->imprimirInOrdem();
    cout<<"\n\nPosOrdem..."<<endl;
    arv1->imprimirPosOrdem();

    return 0;
};