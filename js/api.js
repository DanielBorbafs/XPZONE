async function buscaEndereco(cep){  
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json`)
        var consultaCEPconvertida = await consultaCEP.json();
        if(consultaCEPconvertida.erro){
            throw Error ('CEP NÃO EXISTE!');
        }
        // pegando os elementos na dom
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('rua');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPconvertida.localidade;
        logradouro.value = consultaCEPconvertida.logradouro;
        estado.value = consultaCEPconvertida.uf;
        bairro.value = consultaCEPconvertida.bairro;

        console.log(consultaCEPconvertida)

        return consultaCEPconvertida

    } catch(erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente! </p>`
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));;

