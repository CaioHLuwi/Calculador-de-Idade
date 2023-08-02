let campos = document.querySelectorAll('.inputBox');
let btnCalcular = document.querySelector('#btn');
let valorAnoPreenchido;
let valorMesPreenchido;
let valorDiaPreenchido;

const data = new Date();

let diaPreenchido = campos[0].children[1];
diaPreenchido.addEventListener("focusout", () => {
    return valorDiaPreenchido = diaPreenchido.value
})
let mesPreenchido = campos[1].children[1];
mesPreenchido.addEventListener("focusout", () => {
    return valorMesPreenchido = mesPreenchido.value;
})
let anoPreenchido = campos[2].children[1];
anoPreenchido.addEventListener("focusout", () => {
    return valorAnoPreenchido = anoPreenchido.value;
})

limpaInputs();

function limpaInputs(){
    diaPreenchido.value = "";
    mesPreenchido.value = "";
    anoPreenchido.value = "";
}

btnCalcular.addEventListener("click", validaDataErrada);

function validaDataErrada(){
    if(valorDiaPreenchido >= 32 || valorMesPreenchido >= 13 || valorAnoPreenchido >= 2024){
        alert("Dia, mês ou ano estão incorretos, digite uma data válida.")
    } else if(valorDiaPreenchido >= "" || valorMesPreenchido >= "" || valorAnoPreenchido >= "" ) {
        calculaIdade();
    }
    limpaInputs();
}

function calculaIdade(){
    let diaAtual = data.getDate();
    let mesAtual = data.getMonth() + 1;
    let anoAtual = data.getFullYear();

    let resultadoDia = diaAtual - diaPreenchido.value;
    let resultadoMes = mesAtual - mesPreenchido.value;
    let resultadoAno = anoAtual - anoPreenchido.value;

    let espacoParaAlterarAno = document.querySelector('#anoCalculado');
    let espacoParaAlterarMes = document.querySelector('#mesCalculado');
    let espacoParaAlterarDia = document.querySelector('#diaCalculado');

    if(resultadoDia < 0){
        espacoParaAlterarMes.innerHTML = mesPreenchido.value - mesAtual;
        espacoParaAlterarDia.innerHTML = diaPreenchido.value - diaAtual;
        espacoParaAlterarAno.innerHTML = resultadoAno - 1;
    } else { 
        espacoParaAlterarAno.innerHTML = resultadoAno;
        espacoParaAlterarMes.innerHTML = resultadoMes;
        espacoParaAlterarDia.innerHTML = resultadoDia;
    }
}



