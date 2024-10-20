function calcularMedia() {
    // Coletar o número de alunos
    let numeroAlunos = parseInt(prompt("Informe o número de alunos na turma:"));
    
    // Coletar a quantidade de notas
    let numeroNotas = parseInt(prompt("Informe a quantidade de notas a serem consideradas:"));

    // Iterar sobre os alunos
    for (let i = 0; i < numeroAlunos; i++) {
        let nomeAluno = prompt(`Informe o nome do aluno ${i + 1}:`);
        let somaNotas = 0;

        // Coletar as notas e calcular a soma
        for (let j = 0; j < numeroNotas; j++) {
            let nota = parseFloat(prompt(`Informe a nota ${j + 1} do aluno ${nomeAluno}:`));
            somaNotas += nota;
        }

        // Calcular a média
        let media = somaNotas / numeroNotas;

        // Determinar a situação do aluno
        let situacao;
        if (media > 59) {
            situacao = "APROVADO";
        } else if (media >= 4 && media <= 59) {
            situacao = "RECUPERAÇÃO";
        } else {
            situacao = "REPROVADO";
        }

        // Exibir o resultado
        console.log(`Aluno: ${nomeAluno}, Média: ${media.toFixed(2)}, Situação: ${situacao}`);
    }
}

// Chamar a função para executar o programa
calcularMedia();
