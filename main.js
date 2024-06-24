let chamarUsuario = () => {

    
    let validaCliente = prompt('O cliente participa do programa de Fidelidade? \n Sim \n Não');
    
    validaCliente = validaCliente.toLowerCase();
    console.log('A resposta foi:', validaCliente);

    // testando se ira travar o prompt pro usuariop
    if (!validarSeleções(validaCliente, 'cliente')) {
        return; 
    }

    let qualValor = parseFloat(prompt('Qual é o valor do produto?'));
    console.log('O valor selecionado foi:', qualValor);
    

    if (!validarSeleções(qualValor, 'valor')) {
        return; 
    }


    let qualPgto = parseInt(prompt('O meio de pagamento será como? \n 1- Debito \n 2- Crédito \n 3- Dinheiro \n 4 -Pix'));
    console.log('Tipo do pagamento selecionado', qualPgto);
    if (!validarSeleções(qualPgto, 'pagamento')) {
        return; 
    }

    
    calcularDesconto(validaCliente,qualValor,qualPgto);
    
}
// essa parte é pra validar se a entrada do usuario é valida ou nao
let validarSeleções = (opcao, tipo) => {
    switch (tipo) {
        case 'cliente':
            if (opcao === 'sim' || opcao === '1' || opcao === 's' || opcao=== 'im') {
                console.log('Cliente participa do programa de Fidelidade.');
                return true;
            } else if (opcao=== 'não' || opcao === 'nao' || opcao === '2' || opcao === 'n' || opcao === 'o') {
                console.log('Cliente não participa do programa de Fidelidade.');
                return true;
            } else {
                alert('Resposta inválida para participação do programa de Fidelidade.');
                return false;
                
            }
            break;
        
        case 'valor':
            if (!isNaN(opcao)) {
                console.log('Valor do produto é válido.');
                return true;
            } else {
                alert('Valor do produto inválido.');
                return false;
            }
            break;
        case 'pagamento':
            if (opcao === 1 || opcao === 2 || opcao === 3 || opcao === 4) {
                console.log('Meio de pagamento válido.');
                return true;
            } else {
                alert('Meio de pagamento inválido.');
                return false;
            }
            break;
        default:
            console.log('Tipo de validação não reconhecida.');
            return false;
    }
   
}

// fazer as contas aqui
let calcularDesconto = (cliente,valor,pagamento) =>{
    // validação de teste só pra saber como esta chegando os valores do usuario
    console.log('apenas um teste pra ver se estou recebndo os valores', cliente,valor,pagamento);

    let result = 0;
    let fidelidadeSim = 0.08;
    let debitoSim = 0.05;
    let dinheiroSim = 0.08;

    fidelidadeSim = valor * fidelidadeSim;
    console.log(fidelidadeSim);
    debitoSim = valor * debitoSim;
    console.log(debitoSim);
    dinheiroSim = valor * dinheiroSim;
    console.log(dinheiroSim);

    if ( cliente === 'sim' || cliente === '1' || cliente === 's' || cliente=== 'im') {
        switch (pagamento){
            case 1:
                
                result =  valor - fidelidadeSim - debitoSim;
                console.log(result);

            break;  

            case 2:
                result =  valor - fidelidadeSim;
                console.log(result);

            break;

            case 3:
                result =  valor - (fidelidadeSim + dinheiroSim);
                console.log(result);
                
            break;
            case 4:
                result =  valor - (fidelidadeSim + dinheiroSim);
                console.log(result);
                
            break;
            
                
        }
        resultadoFidelidade(cliente,valor,pagamento,result,fidelidadeSim,dinheiroSim,debitoSim);

    }else if(cliente=== 'não' || cliente === 'nao' || cliente === '2' || cliente === 'n' || cliente === 'o'){
        switch (pagamento){
            case 1:
                
                result =  valor - debitoSim;
                console.log(result);

            break;  

            case 2:
                result =  valor ;
                console.log(result);

            break;

            case 3:
                result =  valor - dinheiroSim;
                console.log(result);
                
            break;
            case 4:
                result =  valor - dinheiroSim;
                console.log(result);
                
            break;
            
                
        }
        resultadoFidelidade(cliente,valor,pagamento,result,fidelidadeSim,dinheiroSim,debitoSim);
    }
    
  
    
    
}   

let resultadoFidelidade = (cliente,valor,pagamento,result,descontoFidelidade,dinheiroSim,descontoDebito)=>{

    console.log(cliente,valor,pagamento,result,descontoFidelidade,dinheiroSim,descontoDebito);
    if(cliente === 'sim' || cliente === '1' || cliente === 's' || cliente=== 'im'){
        if (pagamento === 1) {
            let notaFiscal = `************ Mini Nota Fiscal ************\n`;
            notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
            notaFiscal += `Desconto Programa de Fidelidade: R$ ${descontoFidelidade.toFixed(2)}\n`;
            notaFiscal += `Desconto por ter pago no Débito: R$ ${descontoDebito.toFixed(2)}\n`;
            notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
            notaFiscal += `Obrigado por comprar aqui!`;
            alert(notaFiscal);
        
         
    }else if(pagamento === 2){
        let notaFiscal = `************ Mini Nota Fiscal ************\n`;
        notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
        notaFiscal += `Desconto Programa de Fidelidade: R$ ${descontoFidelidade.toFixed(2)}\n`;
        notaFiscal += `Sem desconto por forma de pagamento!\n`;
        notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
        notaFiscal += `Obrigado por comprar aqui!`;
        alert(notaFiscal);

    }else if(pagamento === 3){
        let notaFiscal = `************ Mini Nota Fiscal ************\n`;
        notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
        notaFiscal += `Desconto Programa de Fidelidade: R$ ${descontoFidelidade.toFixed(2)}\n`;
        notaFiscal += `Desconto por ter pago no Dinheiro R$ ${dinheiroSim.toFixed(2)}\n`;
        notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
        notaFiscal += `Obrigado por comprar aqui!`;
        alert(notaFiscal);

    }else if(pagamento === 4){
        let notaFiscal = `************ Mini Nota Fiscal ************\n`;
        notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
        notaFiscal += `Desconto Programa de Fidelidade: R$ ${descontoFidelidade.toFixed(2)}\n`;
        notaFiscal += `Desconto por ter pago no PIX R$ ${dinheiroSim.toFixed(2)}\n`;
        notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
        notaFiscal += `Obrigado por comprar aqui!`;
        alert(notaFiscal);

    }

    }else if(cliente=== 'não' || cliente === 'nao' || cliente === '2' || cliente === 'n' || cliente === 'o'){
        if (pagamento === 1) {
            let notaFiscal = `************ Mini Nota Fiscal ************\n`;
            notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
            notaFiscal += `Desconto por ter pago no Débito: R$ ${descontoDebito.toFixed(2)}\n`;
            notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
            notaFiscal += `Obrigado por comprar aqui!`;
            alert(notaFiscal);
        
         
    }else if(pagamento === 2){
        let notaFiscal = `************ Mini Nota Fiscal ************\n`;
        notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
        notaFiscal += `Sem desconto por forma de pagamento!\n`;
        notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
        notaFiscal += `Obrigado por comprar aqui!`;
        alert(notaFiscal);

    }else if(pagamento === 3){
        let notaFiscal = `************ Mini Nota Fiscal ************\n`;
        notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
        notaFiscal += `Desconto por ter pago no Dinheiro R$ ${dinheiroSim.toFixed(2)}\n`;
        notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
        notaFiscal += `Obrigado por comprar aqui!`;
        alert(notaFiscal);

    }else if(pagamento === 4){
        let notaFiscal = `************ Mini Nota Fiscal ************\n`;
        notaFiscal += `Preço original: R$ ${valor.toFixed(2)}\n`;
        notaFiscal += `Desconto por ter pago no PIX R$ ${dinheiroSim.toFixed(2)}\n`;
        notaFiscal += `Valor com desconto: R$ ${result.toFixed(2)}\n\n`;
        notaFiscal += `Obrigado por comprar aqui!`;
        alert(notaFiscal);

    }
    }
    
    //alert(`Como voccê é um cliente que participa do programa de fidelidade e pagou com DEBITO o valor do seu produto que era de ${valor} passa a ser de ${result} \n \n Obrigado por comprar aqui!`);
        

}
