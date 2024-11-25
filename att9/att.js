function att(){
    let pv = +document.getElementById('pv').value;
    let av = +document.getElementById('av').value;
    let imc = pv / (av * av);

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    
    r2.innerText = imc.toFixed(2).replace('.' , ',');

    if(imc < 18.5)
    {
        r.innerText = ' - Abaixo de 18,5 | Abaixo do peso';
        r.style.color = '#ffffb2';
        r2.style.color = '#ffffb2';
    }
    else if(imc >= 18.5 && imc < 25)
    {
        r.innerText = ' - Entre 18,6 e 24,9 | Peso ideal';
        r.style.color = '#dbffb2';
        r2.style.color = '#dbffb2';
    }
    else if(imc >= 25 && imc < 30)
    {
        r.innerText = ' - Entre 25,0 e 29,9 | Pouco acima do peso';
        r.style.color = '#ffffb2';
        r2.style.color = '#ffffb2';
    }
    else if (imc >= 30 && imc < 35){
        r.innerText = ' - Entre 30,0 e 34,9 | Obesidade grau I';
        r.style.color = '#ffd7b2';
        r2.style.color = '#ffd7b2';
    }
    else if(imc >= 30 && imc < 40){
        r.innerText = ' - Entre 35,0 e 39,9 | Obesidade grau II';
        r.style.color = '#ffc8b2';
        r2.style.color = '#ffc8b2';
    }
    else
    {
        r.innerText = ' - Maior ou igual a 40 | Obesidade grau III';
        r.style.color = '#ffb2b2';
        r2.style.color = '#ffb2b2';
    }
}    

const tabe = document.getElementById('tabelaimc');
const seta = document.getElementById('seta');
const sect = document.getElementById('sec');

seta.addEventListener('click', () =>{
    tabe.classList.toggle('show');
    seta.classList.toggle('show');
    sect.classList.toggle('exp');
})