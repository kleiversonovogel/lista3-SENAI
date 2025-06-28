const botaoEx1 = document.getElementById("Ex1");
botaoEx1.addEventListener("click",Ex1);

const botaoEx2 = document.getElementById("Ex2");
botaoEx2.addEventListener("click",Ex2);

const botaoEx3 = document.getElementById("Ex3");
botaoEx3.addEventListener("click",Ex3);

const botaoEx4 = document.getElementById("Ex4");
botaoEx4.addEventListener("click",Ex4);

const botaoEx5 = document.getElementById("Ex5");
botaoEx5.addEventListener("click",Ex5);

const botaoEx6 = document.getElementById("Ex6");
botaoEx6.addEventListener("click",Ex6);

const botaoEx7 = document.getElementById("Ex7");
botaoEx7.addEventListener("click",Ex7);

function Ex1(){ 
    let numero = parseFloat(prompt("Digite um número para começar o cronômetro (de 1 a 59):"));

    if(isNaN(numero) || numero < 1 || numero > 59){
      alert("Número inválido! Digite um número válido de 1 a 59.");
    } else {      
      let intervalo = setInterval(() => {
        alert(numero + " segundos");
        numero++;

        if (numero > 59) {
          clearInterval(intervalo);
          alert("Fim da contagem");
        }
      }, 1000); // 1000 ms = 1 segundo
    }
}

function Ex2(){
    let numero0 = parseFloat(prompt("Digite um número para ver a tabuada dele:"));
    for (let contador = 1; contador <= 10; contador++) {
        let resultado = numero * contador;
        alert(numero + " x " + contador + " = " + resultado);
    }
}

function Ex3(){
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro: "));

    if (numero1 % 2 === 0) {
        numero1++;
    }

    if (numero2 % 2 === 0) {
        numero2++;
    }

    if (numero1 < numero2) {
        for (let i = numero1 + 2; i < numero2; i += 2) {
            alert(i + " ");
        }
    } else if (numero1 > numero2) {
        for (let i = numero2 + 2; i < numero1; i += 2) {
            alert(i + " ");
        }
    } else {
        alert("Você colocou números iguais");
    }
}

function Ex4(){
    let numero3 
    let numero4

    numero3 = parseInt(prompt("Digite um número: "));
    console.clear();

    do {
        numero4 = parseInt(prompt("Tente adivinhar o número anterior: "));

        if (numero4 !== numero3) {
            if (Math.abs(numero3 - numero4) <= 10) {
                alert("Tá quente!");
            } else {
                alert("Tá frio!");
            }
        }
    } while (numero4 !== numero3);
}

function Ex5(){ 
let login_correto = "mclovin@aluno.senai.br";
let senha_correta = "kush";
let tentativas = 0;

alert("Seja bem-vindo!");

while (tentativas < 3) {
    let login_digitado = prompt("Digite seu login:");
    let senha_digitada = prompt("Insira sua senha:");

    if (login_digitado === login_correto && senha_digitada === senha_correta) {
        alert("Acesso permitido!");
        break;
    } else {
        tentativas++;

        if (login_digitado !== login_correto) {
            alert("Login incorreto.");
        }

        if (senha_digitada !== senha_correta) {
            alert("Senha incorreta.");
        }

        if (tentativas === 2) {
            alert("Última tentativa, mais um erro e seu acesso será bloqueado!");
        }

        if (tentativas === 3) {
            alert("Acesso bloqueado. Número de tentativas excedido.");
        }
    }
}
}

function Ex6(){
   let andares = parseInt(prompt("Digite o número de andares da pirâmide:"));

for (let linha = 1; linha <= andares; linha++) {
    let espacos = "";
    let estrelas = "";

    // Adiciona espaços
    for (let i = 1; i <= andares - linha; i++) {
        espacos += " ";
    }

    // Adiciona estrelas
    for (let j = 1; j <= (2 * linha - 1); j++) {
        estrelas += "*";
    }

    alert(espacos + estrelas);
}
}

function Ex7(){
     let altura = parseInt(prompt("Digite a altura do retângulo:"));
let largura = parseInt(prompt("Digite a largura do retângulo:"));

let resultado = "";

for (let i = 0; i < altura; i++) {
    let linha = "";

    for (let j = 0; j < largura; j++) {
        linha += "* ";
    }

    resultado += linha + "\n";
}

alert(resultado);
}
