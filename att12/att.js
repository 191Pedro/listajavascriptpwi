function att(){
    let va = document.getElementById('value').value;
    let f1 = document.getElementById('f1').ariaSelected;
    let f2 = document.getElementById('f2').value;
    let f3 = document.getElementById('f3').value;
    let f4 = document.getElementById('f4').value;

    console.log(f1)
    console.log(f2)
    console.log(f3)
    console.log(f4)

    let r = document.getElementById('result');
    let rv = document.getElementById('resultvalue');

    if (f1 == 1){
        let vf = va * 0.85;
        r.innerText = "O valor final é ";
        rv.innerText = vf;
    }
    else if (f2 == 2){
        let vf = va * 0.90;
        r.innerText = "O valor final é ";
        rv.innerText = vf;
    }
}