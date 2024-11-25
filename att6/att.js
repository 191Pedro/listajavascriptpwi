function att(){
    let a = +document.getElementById('av').value;
    let b = a * 1.05;
    
    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');

    r.innerText = "O reajuste é de ";
    r2.innerText = b.toFixed(2).replace('.' , ',');
}