function att(){
    let a = +document.getElementById('av').value;
    let b = +document.getElementById('bv').value;

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let ra = document.getElementById('ra');
    let rb = document.getElementById('rb');
    let rc = document.getElementById('rc');

    ra.innerText = a;
    rb.innerText = b;
    if (a == b){
        c = a + b;
        r.innerText = " é igual a ";
        r2.innerText = ", logo, a soma é ";
        rc.innerText = c;
    }
    else{
        c = a * b;
        r.innerText = " não é igual a ";
        r2.innerText = ", portanto, seu produto é "
        rc.innerText = c;
    }
}