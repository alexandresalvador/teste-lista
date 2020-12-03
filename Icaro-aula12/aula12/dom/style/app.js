//1. Alterar o valor do posição 1

let alteraValor1 = document.querySelectorAll('.lista-frutas')[1];
alteraValor1.textContent = ('Uva');


//2. Alterar o html da posição 5, adicionar um span

let alteraPosicao5 = document.querySelectorAll('.lista-frutas')[5];
alteraPosicao5.innerHTML = ('<span></span>');


//3. Alterar o CSS da posição 0 e adicionar background-color

let alteraPosicao0 = document.querySelectorAll('.lista-frutas')[0];
alteraPosicao0.style.backgroundColor = ('white');
alteraPosicao0.style.color = ('red');


//4. Remover o item da posição 0


let removeItem0 = document.querySelectorAll('.lista-frutas')[0];
removeItem0.remove();





/*function xpto() {
    console.log(xpto);
}

xpto();
const animal = 'zebra';

const calculadora = {
    sum: ((a, b) => {
        if (a && !b) {
            return 'Calculo somente os 2 parametros'
        }
        return a + b;
    }),
    subtracao: function (a, b) {
        return a - b;
    }
}

describe('Calculadora', function () {
    it('deve fazer a soma quando passado 2 argumentos',
        function () {
            sum(1, 3);
            expect(sum).toEqual(4);
        });

    it('deve retornar erro quando passado 1 argumento', function () {
        sum(1);
        expect(sum).toBe(undefined);
    });
});*/