//função formatar valores em brl para o padrão pt-br colocando o R$
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}