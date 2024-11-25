function att(){
    let a1 = +document.getElementById('a1').value;
    let b2 = +document.getElementById('b2').value;
    let c3 = +document.getElementById('c3').value;
    
    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let r3 = document.getElementById('result3');
    let rv1 = document.getElementById('resultvirgula1');
    let rv2 = document.getElementById('resultvirgula2');
    
    rv1.innerText = ', ';
    rv2.innerText = ' e ';
    if (a1 >= b2 && a1 >= c3){// a bc
        if (b2 >= c3){// a b c
            r.innerText = a1;
            r2.innerText = b2;
            r3.innerText = c3;
        }
        else{// a c b
            r.innerText = a1;
            r2.innerText = c3;
            r3.innerText = b2;
        }
    }
    else if (b2 >= a1 && b2 >= c3){// b ac
        if (a1 >= c3){// b a c
            r.innerText = b2;
            r2.innerText = a1;
            r3.innerText = c3;
        }
        else{// b c a
            r.innerText = b2;
            r2.innerText = c3;
            r3.innerText = a1;
        }
    }
    else if (c3 >= a1 && c3 >= b2){// c ab
        if (a1 >= b2){// c a b
            r.innerText = c3;
            r2.innerText = a1;
            r3.innerText = b2;
        }
        else{// c b a
            r.innerText = c3;
            r2.innerText = b2;
            r3.innerText = a1;
        }
    }
}