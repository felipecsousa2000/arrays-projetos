let alunos = [];

function cadastrar() {

    let nome = document.getElementById("nome").value;

    alunos.push(nome);

    document.getElementById("nome").value = "";

    mostrarAlunos();
}


function mostrarAlunos() {

    document.getElementById("aluno1").innerHTML =
        "1 - " + alunos[0];

    document.getElementById("aluno2").innerHTML =
        "2 - " + alunos[1];

    document.getElementById("aluno3").innerHTML =
        "3 - " + alunos[2];
}


function remover() {

    alunos.pop();

    mostrarAlunos();
}


function quantidade() {

    document.getElementById("resultado").innerHTML =
        "Quantidade de alunos: " + alunos.length;
}