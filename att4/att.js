function att(){
    let a = +document.getElementById('value').value;
    let r = document.getElementById('result');
    let ri1 = document.getElementById('resulti1');
    let r2 = document.getElementById('result2');
    let r3 = document.getElementById('result3');
    let ri2 = document.getElementById('resulti2');
    let ri3 = document.getElementById('resulti3');

    r.innerText = a
    ri1.innerText = "O número digitado é ";
    r2.innerText = a + 1;
    r3.innerText = a - 1;
    ri2.innerText = "Seu sucessor é "
    ri3.innerText = "Seu antecessor é "
}