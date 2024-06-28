const form = document.querySelector("form");
const nomeInput = document.querySelector("#nomec");
const sobrenomeInput = document.querySelector("#sobrenome");
const dataInput = document.querySelector("#data");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const confirmacaoemailInput = document.querySelector("#confirmacaoemail");

const cidadeInput = document.querySelector("#cidade");
const telefoneInput = document.querySelector("#telefone");
const senhaInput = document.querySelector("#senha");
const confirmacaosenhaInput = document.querySelector("#confirmacaosenha");
let cpflength = cpfInput.value.length
let telefonelength = telefoneInput.value.length
    

function envia() {
    var nome = nomeInput.value;
    var sobrenome = sobrenomeInput.value;
    var senha = senhaInput.value;
    var nascimento = dataInput.value;
    var email = emailInput.value;
    var cpf = cpfInput.value;
    var cidade = cidadeInput.value;
    var telefone = telefoneInput.value;
    var confirmacaoemail = confirmacaoemailInput.value;
    var confirmacaosenha = confirmacaosenhaInput.value;
    if(nome == '' || sobrenome == '' || nascimento == ''|| senha == '' || email == '' || cpf == '' || cidade == ''  || telefone == '' || confirmacaoemail == ''|| confirmacaosenha == '') {
        alert("Preencha todos os campos!");
    }
    else if (cpf.length < 14) {
        alert("CPF inválido!");
    }
    else if (telefone.length < 11) {
        alert("Telefone inválido!");
    }
    else if(email != confirmacaoemail){
        alert("O email cadastrado é diferente da confirmação!");
    }
    else if(senha != confirmacaosenha){
        alert("A senha cadastrada é diferente da confirmação!");
    }
    else {
        salvar();
    }   
}

//Mascara de cpf
cpfInput.addEventListener('keypress', () => {
    let cpflength = cpfInput.value.length
    if (cpflength === 3 || cpflength === 7 ) {
        cpfInput.value += '.'
    }
    else if (cpflength === 11) {
        cpfInput.value += '-'
    }
    if(cpflength > 13){
        cpfInput.value = cpfInput.value.substring(0,13)
    }

})

//Mascara de telefone
telefoneInput.addEventListener('keypress', () => {
    let telefonelength = telefoneInput.value.length
    if (telefonelength === 0 ) {
        telefoneInput.value +='('
    }
    else if (telefonelength === 3) {
        telefoneInput.value += ') '
    }

    else if (telefonelength === 9) {
        telefoneInput.value += '-'
    }
    else if(telefonelength > 13){
        telefoneInput.value = telefoneInput.value.substring(0,13)
    }
})

function salvar(){
    let novousuario = new Object();
    novousuario.nome = nomeInput.value.trim();
    novousuario.sobrenome = sobrenomeInput.value.trim();
    novousuario.data = dataInput.value.trim();
    novousuario.cpf = cpfInput.value.trim();
    novousuario.email = emailInput.value.trim();
    novousuario.confirmacaoemail = confirmacaoemailInput.value.trim();
    novousuario.cidade = cidadeInput.value.trim();
    novousuario.telefone = telefoneInput.value.trim();
    novousuario.senha = senhaInput.value.trim();
    novousuario.confirmacaosenha = confirmacaosenhaInput.value.trim();
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(novousuario);
    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    window.location.href = "/View/login.html";
}

