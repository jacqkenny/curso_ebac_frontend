const form = document.getElementById('form-aluno');
form.addEventListener ('Submit', function (e) {
    e.defaultPrevented ();
    const inputNomeAluno = document.getElementById('nome-aluno');
    const inputNotaAluno = document.getElementById('nota-aluno');

    alert('Aluno: ${inputNomeAluno.value} - Nota: ${inputNotaAluno.value}');
});
