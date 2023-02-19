//função formatar valores em brl para o padrão pt-br colocando o R$ e separando os milhares com ponto e as casas decimais com vírgula 
function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}
