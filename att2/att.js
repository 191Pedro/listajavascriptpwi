function att(){
    let pi = +document.getElementById('poui').value;

    let r = document.getElementById('result');
    let rpi = document.getElementById('rpi');

    rpi.innerText = pi;
    if(pi % 2 === 0){
        r.innerText = " é PAR";
    }
    if(pi % 2 === 1){
        r.innerText = " é ÍMPAR";
    }
}