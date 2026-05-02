let buttons = document.querySelectorAll('.button');
let screen = document.querySelector('.calculator-screen')
let previousoperand = document.querySelector('.previous-operand')
buttons.forEach((button=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == 'AC'){
            screen.innerHTML='';
            previousoperand.innerHTML='';
        }
        else if(e.target.innerHTML == 'CLR'){
            screen.innerHTML = screen.innerHTML.slice(0,-1);
        }
        else if(e.target.innerHTML == '='){
            previousoperand.innerHTML = screen.innerHTML;
            screen.innerHTML=eval(screen.innerHTML);

        }
        else if(e.target.innerHTML == 'sin'){
            previousoperand.innerHTML = 'sin('+screen.innerHTML+'°)'
            screen.innerHTML =Math.sin(screen.innerHTML);
        }
        else if(e.target.innerHTML == 'cos'){
            previousoperand.innerHTML = 'cos('+screen.innerHTML+'°)'
            screen.innerHTML =Math.cos(screen.innerHTML);
        }
        else if(e.target.innerHTML == 'tan'){
            previousoperand.innerHTML = 'tan('+screen.innerHTML+'°)'
            screen.innerHTML =Math.tan(screen.innerHTML);
        }
        else if(e.target.innerHTML == 'tan'){
            previousoperand.innerHTML = 'log'+screen.innerHTML
            screen.innerHTML =Math.log(screen.innerHTML);
        }
    else {screen.innerHTML += e.target.innerHTML;
        previousoperand.innerHTML = '' ;}
    })
}))