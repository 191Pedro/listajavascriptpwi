function att(){
    let name = document.getElementById('name').value;
    let na = +document.getElementById('na').value;
    let nb = +document.getElementById('nb').value;
    let nc = +document.getElementById('nc').value;
    let nd = +document.getElementById('nd').value;

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let r3 = document.getElementById('result3');
    let rname = document.getElementById('resultname');
    let rm = document.getElementById('resultmedia');
    let si = document.getElementById('resultsi')

    let me = (na + nb + nc + nd) / 4;

    r.innerText = "A média do aluno é ";
    rm.innerText = me;
    r2.innerText = ", a situação do aluno ";
    rname.innerText = name;
    rname.style.color = '#ffffb2'
    r3.innerText = " é: "

    if (me >= 7){
        si.innerText = "Aprovado"
        si.style.color = '#dbffb2'
    }
    else{
        si.innerText = "Reprovado"
        si.style.color = '#ffc8b2'
    }

}