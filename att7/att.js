function att(){
    let a = +document.getElementById('av').value;
    let b = +document.getElementById('bv').value;
    let c = +document.getElementById('cv').value;
    let d = a + b;
    let r = document.getElementById('result');
    let rc = document.getElementById('rc');
    let rd = document.getElementById('rd');

    rc.innerText = c;
    rd.innerText = d;
    if (d < c){
        r.innerText = " é menor que ";
    }
    else if (d == c){
        r.innerText = " é igual a ";
    }
    else{
        r.innerText = " é maior que ";
    }
}