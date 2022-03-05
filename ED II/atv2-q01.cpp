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

    // Inserção informando pai e lado...
    void inserirFilho(No* no, int nov, string lado, int pai){ 
        if(no!=NULL){
            if(no->getNum() == pai){
                if(lado == "esq"){
                    if(no->getEsq()==NULL){
                        No* novo_no = new No(nov);
                        no->setEsq(novo_no);
                    } else{
                        cout<<"\n<<<<<ERRO>>>>>\nA posicao ja esta ocupada!\n\n";
                    }
                }
                if(lado == "dir"){
                    if(no->getDir()==NULL){
                        No* novo_no = new No(nov);
                        no->setDir(novo_no);
                    } else{
                        cout<<"\n<<<<<ERRO>>>>>\nA posicao ja esta ocupada!\n\n";
                    }
                }
            } else{
                inserirFilho(no->getEsq(), nov, lado, pai);
                inserirFilho(no->getDir(), nov, lado, pai);
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
};

int main(){
    Arvore *arv1 = new Arvore();

    arv1->inserir(3);
    arv1->inserir(1);
    arv1->inserir(2);
    arv1->inserir(5);
    arv1->inserir(4);
    arv1->inserir(6);

    // Inserção informando pai e lado...
    arv1->inserirFilho(arv1->getRaiz(), 11, "esq", 3);
    arv1->inserirFilho(arv1->getRaiz(), 11, "dir", 6);

    cout<<"Exibindo In-Ordem...\n";
    arv1->imprimirInOrdem(arv1->getRaiz());

    return 0;
};