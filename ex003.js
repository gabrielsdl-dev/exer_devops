let num = document.querySelector('input#n')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valor = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }

}

/*Recebe um número e uma Lista*/
function inLista(n, l){
    /*Se o número for diferente de -1 retorna verdadeiro, se não... */
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function Adicionar(){
    /*Se o dado obtido for um número e não estiver na lista, então*/
    if(isNumero(num.value) && !inLista(num.value, valor)){
        /*Adiciona um numero no array*/
       valor.push(Number(num.value))

       /*Cria um item na lista*/
       let item = document.createElement('option')
       item.text = `Valor ${num.value} foi adicionado`

       /*Adiciona o item na Lista*/
       lista.appendChild(item)
    } else {
        window.alert('Valor inválido!')
    }

    /*Limpa o número da barra de digitar automaticamente*/
    num.value = ' '
    num.focus()

}

function Finalizar(){

    /*Caso não for encontrado nenhum dado*/
    if (valor.length == 0){
        window.alert('ERRO! :( \n Nenhum valor encontrado')
    } else {
        let t = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0


        for (let pos in valor){
            /*Soma os valores*/
            soma += valor[pos]

            /*Média*/
            media = soma / valor.length

            /*Verifica o maior número */
            if (valor[pos] > maior){
                maior = valor[pos]
            }

            /*Verifica o menor número*/ 
            if (valor[pos] < menor){
                menor = valor[pos]
            }

        }

        /*RESULTADOS*/
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${t} números cadastrados</p>`
        res.innerHTML += `<p> O maior número é o ${maior} e o menor número é o ${menor}</p>`
        res.innerHTML += `<p> A soma dos números é igual a ${soma} </p>`
        res.innerHTML += `<p> A média dos valores é igual a ${media}`

    
    }
}
