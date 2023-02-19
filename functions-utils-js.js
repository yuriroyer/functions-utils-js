//função formatar valores em brl para o padrão pt-br colocando o R$
function formatarMoeda(atual) {
  var f = atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return f;
}

//funcao padrão para salvar dado em localstorage passando dois parametros o nome do campo e o valor
function saveInLocalStorage(param, value) {
  localStorage.setItem(param, value);
  console.log(value);
}