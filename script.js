let num = document.getElementById('txtn')
let tabela = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }


}

function adicionar() {


    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tabela.appendChild(item)

    } else {
        window.alert('Valor inválido ou encontrado em lista')
    }
    res.innerHTML = ''
    num.value = ''
    num.focus()






} function verificar() {
    var maior = 0;
    var soma = 0
    for (var i = 0; i < valores.length; i++) {
        if (valores[i] > maior); {
            maior = valores[i];
            soma += valores[i]
            res.innerHTML = `O maior valor foi ${maior}<br> Temos um total de ${valores.length} números <br> O menor valor informado foi ${Math.min(...valores)}<br> A soma de todos valores é ${soma}<br> E a média dos valores são ${soma / valores.length}`

        }





    }

}
