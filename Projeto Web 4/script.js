function logar2(){
    let usuario = document.getElementById("idemail");
    let senha = document.getElementById("idSenha");

    if(usuario.value !== "" && senha.value !=="12345"){
        alert('seja bem-vindo ao site')
    } else {
        alert('usuario e senha invalidos')
    }
}

function calcularimc(){
    let peso = document.getElementById('idpeso').value;
    let altura = document.getElementById('idaltura').value;
    let resultado = document.getElementById('idresultado').value;

    if(peso !=='' && altura !==''){
        let imc = (peso / (altura*altura)).toFixed(2);
        //ou com switch case
        
        let mensagem = '';
        
        if(imc<18.5){
            mensagem = 'você esta abaixo do peso';
        } else if (imc < 25){
            mensagem = 'peso normal';
        } else if (imc <30){
            mensagem ='você está aciam do peso'
        } else if (imc <39.9){
            mensagem = 'você está com garu 1 de obesidade' 
        } else if (imc >40){
            mensgame ='você está com grau 2 de obesidade'
        }

        resultado.textcontent = 'caro usuário(a), seu imc é'${imc}!${mensagem};

    }

    else{
        resultado.textcontent =  
        }

    }
    
idSubmit.addEventListener('clicck', calcularimc)    