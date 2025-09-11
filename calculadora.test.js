const Calculadora = require('./calculadora');

describe('Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    // Testes adição
    describe('Soma', () => {
        // Teste 1: Soma de números positivos
        // Verifica se a função somar retorna o resultado correto
        // quando ambos os números são positivos
        test('somar dois números positivos corretamente', () => {
            expect(calculadora.somar(5, 3)).toBe(8);
        });

        // Teste 2: Soma de número positivo com negativo
        // Testa o comportamento da soma quando um número é positivo e outro negativo
        // Deve resultar na diferença entre os valores absolutos
        test('somar números positivos e negativos corretamente', () => {
            expect(calculadora.somar(5, -3)).toBe(2);
        });

        // Teste 3: Soma de dois números negativos
        // Verifica se a soma de dois números negativos resulta em um número negativo
        // com valor absoluto igual à soma dos valores absolutos
        test('somar dois números negativos corretamente', () => {
            expect(calculadora.somar(-5, -3)).toBe(-8);
        });

        // Teste 4: Soma com zero (elemento neutro)
        // Testa a propriedade do zero como elemento neutro da adição
        // Qualquer número somado a zero deve resultar no próprio número
        test('somar zero a um número corretamente', () => {
            expect(calculadora.somar(5, 0)).toBe(5);
        });

        // Teste 5: Soma de números decimais
        // Verifica se a calculadora lida corretamente com números de ponto flutuante
        // e mantém a precisão nas operações com decimais
        test('somar números decimais corretamente', () => {
            expect(calculadora.somar(2.5, 1.5)).toBe(4);
        });
    });

    // Testes subtração
    describe('Subtração', () => {
        // Teste 6: Subtração de números positivos
        // Verifica a operação básica de subtração entre dois números positivos
        test('subtrair dois números positivos corretamente', () => {
            expect(calculadora.subtrair(10, 4)).toBe(6);
        });

        // Teste 7: Subtração de número positivo por negativo
        // Testa o comportamento especial: subtrair um número negativo
        // é equivalente a somar o valor absoluto desse número
        test('subtrair números positivos e negativos corretamente', () => {
            expect(calculadora.subtrair(5, -3)).toBe(8);
        });

        // Teste 8: Subtração de dois números negativos
        // Verifica a regra: (-a) - (-b) = -a + b = b - a
        test('subtrair dois números negativos corretamente', () => {
            expect(calculadora.subtrair(-5, -3)).toBe(-2);
        });

        // Teste 9: Subtração por zero (elemento neutro)
        // Testa se subtrair zero de um número resulta no próprio número
        test('subtrair zero de um número corretamente', () => {
            expect(calculadora.subtrair(5, 0)).toBe(5);
        });

        // Teste 10: Subtração de números decimais
        // Verifica a precisão da calculadora com operações de subtração
        // envolvendo números de ponto flutuante
        test('subtrair números decimais corretamente', () => {
            expect(calculadora.subtrair(5.5, 2.5)).toBe(3);
        });
    });

    // Testes multiplicação
    describe('Multiplicação', () => {
        // Teste 11: Multiplicação de números positivos
        // Verifica a operação básica de multiplicação entre positivos
        test('multiplicar dois números positivos corretamente', () => {
            expect(calculadora.multiplicar(4, 3)).toBe(12);
        });

        // Teste 12: Multiplicação de positivo por negativo
        // Testa a regra: positivo × negativo = negativo
        test('multiplicar números positivos e negativos corretamente', () => {
            expect(calculadora.multiplicar(4, -3)).toBe(-12);
        });

        // Teste 13: Multiplicação de dois números negativos
        // Testa a regra: negativo × negativo = positivo
        test('multiplicar dois números negativos corretamente', () => {
            expect(calculadora.multiplicar(-4, -3)).toBe(12);
        });

        // Teste 14: Multiplicação por zero (elemento absorvente)
        // Verifica a propriedade do zero: qualquer número multiplicado por zero é zero
        test('multiplicar por zero corretamente', () => {
            expect(calculadora.multiplicar(5, 0)).toBe(0);
        });

        // Teste 15: Multiplicação de números decimais
        // Testa a precisão da calculadora com multiplicação de ponto flutuante
        test('multiplicar números decimais corretamente', () => {
            expect(calculadora.multiplicar(2.5, 4)).toBe(10);
        });
    });

    // Testes divisão
    describe('Divisão', () => {
        // Teste 16: Divisão de números positivos
        // Verifica a operação básica de divisão entre positivos
        test('dividir dois números positivos corretamente', () => {
            expect(calculadora.dividir(10, 2)).toBe(5);
        });

        // Teste 17: Divisão de positivo por negativo
        // Testa a regra: positivo ÷ negativo = negativo
        test('dividir números positivos e negativos corretamente', () => {
            expect(calculadora.dividir(10, -2)).toBe(-5);
        });

        // Teste 18: Divisão de dois números negativos
        // Testa a regra: negativo ÷ negativo = positivo
        test('dividir dois números negativos ', () => {
            expect(calculadora.dividir(-10, -2)).toBe(5);
        });

        // Teste 19: Divisão de números decimais
        // Verifica a precisão da calculadora com divisão de ponto flutuante
        test('dividir números decimais ', () => {
            expect(calculadora.dividir(5.5, 2)).toBe(2.75);
        });

        // Teste 20: Divisão por zero (tratamento de erro)
        // Testa se a calculadora lança uma exceção adequada
        // quando tentamos dividir por zero, prevenindo comportamento indefinido
        test('lançar erro ao dividir por zero', () => {
            expect(() => calculadora.dividir(10, 0)).toThrow("Não é possivel dividir por 0");
        });
    });
});