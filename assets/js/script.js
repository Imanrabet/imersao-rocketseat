const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        resposta: [
            "var x;",
            "let x;",
            "const x;",
        ],
        correta: 2 // Resposta correta é "const x;"
    },
    {
        pergunta: "O que o operador '===' faz em comparações em JavaScript?",
        resposta: [
            "Compara valores e tipos de dados, verificando igualdade estrita.",
            "Compara apenas os valores, ignorando os tipos de dados.",
            "Realiza uma comparação assíncrona.",
        ],
        correta: 0 // Resposta correta é "Compara valores e tipos de dados, verificando igualdade estrita."
    },
    {
        pergunta: "Qual é a função do método `querySelector`?",
        resposta: [
            "Selecionar elementos HTML pelo nome da classe.",
            "Selecionar elementos HTML pelo ID.",
            "Selecionar elementos HTML pelo tipo.",
        ],
        correta: 1 // Resposta correta é "Selecionar elementos HTML pelo ID."
    },
    {
        pergunta: "Em JavaScript, qual é a diferença entre `let` e `const` ao declarar  variáveis?",
        resposta: [
            "`let` é usado para variáveis imutáveis, enquanto `const` é usado para variáveis mutáveis.",
            "`let` permite a reatribuição, enquanto `const` cria variáveis imutáveis.",
            "Não há diferença, ambos são sinônimos.",
        ],
        correta: 1 // Resposta correta é "`let` permite a reatribuição, enquanto `const` cria variáveis imutáveis."
    },
    {
        pergunta: "Qual é a função do método `map` em JavaScript?",
        resposta: [
            "Filtrar elementos de um array com base em uma condição.",
            "Transformar cada elemento de um array e retornar um novo array.",
            "Ordenar os elementos de um array em ordem decrescente.",
        ],
        correta: 1 // Resposta correta é "Transformar cada elemento de um array e retornar um novo array."
    },
    {
        pergunta: "Como se refere ao primeiro elemento de um array em JavaScript?",
        resposta: [
            "array[0]",
            "array.first()",
            "array.firstElement()",
        ],
        correta: 0 // Resposta correta é "array[0]"
    },
    {
        pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
        resposta: [
            "É a capacidade de elevar fisicamente elementos HTML na página.",
            "É o comportamento onde declarações de variáveis são movidas para o topo do seu contexto de execução.",
            "Refere-se à animação suave de elementos na página.",
        ],
        correta: 1 // Resposta correta é "É o comportamento onde declarações de variáveis são movidas para o topo do seu contexto de execução."
    },
    {
        pergunta: "Qual é a diferença entre `let` e `var` na declaração de variáveis em JavaScript?",
        resposta: [
            "`let` tem escopo de bloco, enquanto `var` tem escopo de função.",
            "`let` só pode ser usado dentro de loops, enquanto `var` pode ser usado em qualquer lugar.",
            "Não há diferença, ambos são equivalentes.",
        ],
        correta: 0 // Resposta correta é "`let` tem escopo de bloco, enquanto `var` tem escopo de função."
    },
    {
        pergunta: "O que é um closure em JavaScript?",
        resposta: [
            "Uma função que não tem acesso a variáveis fora de seu escopo.",
            "Um objeto que armazena informações sobre uma função.",
            "Uma função que tem acesso a variáveis fora de seu escopo, mesmo após a execução ter saído desse escopo.",
        ],
        correta: 2 // Resposta correta é "Uma função que tem acesso a variáveis fora de seu escopo, mesmo após a execução ter saído desse escopo."
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        resposta: [
            "Uma linguagem de programação.",
            "Um modelo de objeto para representar documentos HTML e XML.",
            "Um método de manipulação de dados.",
        ],
        correta: 1 // Resposta correta é "Um modelo de objeto para representar documentos HTML e XML."
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.resposta) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta=' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}