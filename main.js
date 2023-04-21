const form = document.getElementById('form-aluno');
const imgAprovado = '<img src="./Imagem/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./Imagem/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = <span class = "resultado aprovado">Aprovado</span>;
const spanReprovado = <span class = "resultado Reprovado">Reprovado</span>;
constMinima = parseFloat(prompt("Digite a notaMINIMA:"));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAluno = document.getElementById('nome-aluno');
    const inputNotaAluno = document.getElementById('nota-aluno');

if (alunos.includes(inputNomeAluno.value)) {
    alert('O aluno: ${inputNomeAluno.value} ja foi adicionado');
}else {
    atividades.push(inputNomeAluno.value);
    notas.push.parseFloat(inputNotaAluno.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeAluno.value}</td>`;
    linha += `<td>${inputNotaAluno.value}</td>`;
    linha += `<td>${inputNotaAluno.value>= constMinima ? spanAprovado : spanReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
}

    inputNomeAluno.value = '';
    inputNotaAluno.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal =calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal>= 7 ? 'Aprovado': 'Reprovado';

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
