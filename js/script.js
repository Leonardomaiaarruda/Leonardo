const resultado = document.querySelector('.resultado');
let tabelaResultadoh3 = document.querySelector('.tabela-resultadoh3 h3');
let tabelaResultado = document.querySelector('.tabela-resultado h2');

 
function imc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const nome = document.getElementById('nome').value;
   

    if(peso !== '' && altura !== '' && nome.value !== ''){
        const resultadoFinal = parseFloat(peso / (altura * altura))

        if(resultadoFinal <= 18.5){
            tabelaResultadoh3.innerHTML = ' <div> Peso Baixo Fique atento, ingira mais carboidratos e proteinas </div>';
        }else if(resultadoFinal < 25){
            tabelaResultadoh3.innerHTML = ' <div> Peso Normal, Peso ideal Parabéns </div>';
            tabelaResultadoh3.style.color = 'green'
        }else if(resultadoFinal < 29){
            tabelaResultadoh3.innerHTML = ' <div> Sobrepeso Tome cuidado </div>';
        }else if(resultadoFinal < 35){
            tabelaResultadoh3.innerHTML = ' <div> Obesidade (Grau I), Procure um especialista para te ajudar </div>';
            tabelaResultadoh3.style.color = '#FFF000'
        }else if(resultadoFinal < 39.9){
            tabelaResultadoh3.innerHTML = ' <div> Obesidade Severa (Grau II), Procure um especialista para te ajudar </div>';
            tabelaResultadoh3.style.color = '#fd2339'
        }else if(resultadoFinal > 40){
            tabelaResultadoh3.style.color = '#fd2339'
            tabelaResultadoh3.innerHTML = ' <div> Obesidade Mórbida (Grau III), Procure um especialista para te ajudar </div>';
        }
        
        tabelaResultado.innerHTML = ` ${nome} seu IMC é de  ${resultadoFinal.toFixed(1)}`;
        tabelaResultado.style.background = '#000000';
        tabelaResultadoh3.style.background = '#32c6ff'; 

    }else{  
        tabelaResultadoh3.textContent = 'Preencha todos os campos'  
        tabelaResultadoh3.style.color = 'yellow' 
        tabelaResultadoh3.style.fontSize = '45px'
    }
   
}

resultado.addEventListener('click', imc);
   
   