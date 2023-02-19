//função formatar valores em brl para o padrão pt-br colocando o R$
function formatarMoeda(atual) {
    var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return f;
  }