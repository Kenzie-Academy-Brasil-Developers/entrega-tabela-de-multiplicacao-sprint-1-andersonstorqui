function tabelaMultiplicacao (n){
    let x = []

    for (let i = 0; i <= n; i++) {
        x[i] = [];

        for(let j = 0; j<= n; j++){
            x[i][j] = i * j
        }
}
    return x
}
console.table(tabelaMultiplicacao(5))
tabelaMultiplicacao()
console.table(tabelaMultiplicacao(5))