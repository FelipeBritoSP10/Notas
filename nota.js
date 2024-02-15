                //Notas//

           //Variáveis//
    let aviso = document.querySelector('#aviso')
    let formulario = document.querySelector('form')

            //Seleções de botões//
    let btnCalcular = document.querySelector('#btnCalcular')
    let btnLimpar = document.querySelector('#btnLimpar')

        //Seleções de inputs, caixa de textos//
         
    let cxNota1 = document.querySelector('#nota1')
    let cxNota2 = document.querySelector('#nota2')
    let cxMedia = document.querySelector('#media')
    let cxSituacao = document.querySelector('#situacao')

      //Cálculo das médias(Importante)//
    function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
   }

   //Situação do aluno com base na média//
   function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    
    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}
           //Formatar na caixa a situação final do aluno//
    function formatarSituacao(situacaoFinal) {
            console.log('Situação Final ' + situacaoFinal)
            switch(situacaoFinal) {

            case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break
        
            case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break
        
            case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
                break

            default:
            console.log('Situação Indefinida')
    }
}

   //Validar (Usando Flash MESSAGE)
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10){
        formulario.reset() //O formulário vai ser resetado//
        aviso.textContent = 'Insira uma nota entre 0.0 e 10.0' //Se você inserir notas como -1, -2 você irá receber um aviso//
        aviso.classList.add('alerta') 
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);   //A mensagem de aviso vai aparecer e desaparecer em segundos por causa do FLASH MESSAGE, ou seja mensagem rápida//
    }
}
      //Calcular média após clicar no botão//
    btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)

    //Ler notas, com o comando de saída console.log//
    console.log(nota1)
    console.log(nota2)
    console.log(media)

    //Condições//
    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''  //Caso não escreva um número//
    } else {
        cxMedia.value = parseFloat(media) //Recebe média//
        cxSituacao.value = situacaoFinal(media) //Imprime a situação final do aluno//
        formatarSituacao(situacaoFinal(media))  //Mostrar cor// 
    }
    e.preventDefault()
})

//Limpar caixas de situação do aluno, após inserir notas//
btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})