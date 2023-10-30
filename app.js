alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = parseInt(Math.random() *100 +1);
let chute;
let tentativas = 1;

// enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    //se chute for igual ao numero secreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute );
        }
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert('Você acertou! O número era ' + numeroSecreto + ' utilizando ' + tentativas + ' ' + palavraTentativa);    

// if(tentativas > 1){
//     alert('Você acertou! O número era ' + numeroSecreto + ' utilizando ' + tentativas + ' tentativas');    
// } else {
//     alert('Você acertou! O número era ' + numeroSecreto + ' utilizando ' + tentativas + ' tentativa');
// }

