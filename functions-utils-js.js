//função formatar valores em brl para o padrão pt-br colocando o R$
function formatarMoeda(valor) {
    //add to.fixed(2) para arredondar para 2 casas decimais
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).toFixed(2);
}