const form = document.getElementById('form-aluno');
const imgAprovado = '<img src="./imagem/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./imagem/reprovado.png" alt="Emoji decepcionado" />';

let linhas ='';

form.addEventListener('Submit', function (e) {
    e.preventDefault();

    const inputNomeAluno = document.getElementById('nome-aluno');
    const inputNotaAluno = document.getElementById('nota-aluno');

    let linha = '<tr>';
    linha += `<td>${inputNomeAluno.value}</td>`;
    linha += `<td>${inputNotaAluno.value}</td>`;
    linha += `<td>${inputNotaAluno.value>= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAluno.value = '';
    inputNotaAluno.value = '';

});