const URL_APPS_SCRIPT =
    "https://script.google.com/macros/s/AKfycbyoPidNoXwB2b5z-Boo2TF6_7ToVilmmtZEAWgll61gReH5c_bIu86FnbFvBuAsK2LJPw/exec";


const formulario =
    document.getElementById("formCadastro");

const mensagem =
    document.getElementById("mensagem");


formulario.addEventListener("submit", async function(event) {

    event.preventDefault();


    const nome =
        document.getElementById("nome").value;

    const curso =
        document.getElementById("curso").value;

    const email =
        document.getElementById("email").value;


    const dados = {
        nome: nome,
        curso: curso,
        email: email
    };


    mensagem.textContent = "Enviando dados...";


    try {

        const resposta = await fetch(URL_APPS_SCRIPT, {

            method: "POST",

            body: JSON.stringify(dados),

            mode: "no-cors"

        });


        mensagem.textContent =
            "Aluno cadastrado com sucesso!";

        formulario.reset();


    } catch (erro) {

        console.error("Erro:", erro);

        mensagem.textContent =
            "Erro ao cadastrar aluno.";

    }

});