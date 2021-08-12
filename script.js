function tabelaMultiplicacao (n){
    let x = []

    for (let i = 0; i <= n; i++) {
        x[i] = [];

        for(let j = 0; j<= n; j++){
            x[i][j] = i * j
            // [[1,2,3],
            // [1,2,3],
            // [1,2,3]]
        }
}
    return x
}
tabelaMultiplicacao()
console.table(tabelaMultiplicacao(5))