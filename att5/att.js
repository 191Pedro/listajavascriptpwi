function att(){
    let a = +document.getElementById('sal').value;
    let b = a / 1293;

    let r = document.getElementById('result');
    let rsal = document.getElementById('resultsal');
    let rsm = document.getElementById('resultsm');

    r.innerText = "Seu salário equivale a ";
    rsal.innerText = b.toFixed(2).replace('.' , ',');

    if (b < 2){
        rsm.innerText = " salário mínimo.";
    }
    else{
        rsm.innerText = " salários mínimos.";
    }
}