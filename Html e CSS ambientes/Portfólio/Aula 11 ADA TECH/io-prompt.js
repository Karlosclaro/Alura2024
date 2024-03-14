const rL = require('readline')

const prompt = rL.createInterface({
    imput: process.stdin,
    output: process.stdout
})

prompt.question('Qual é o seu número favorito?: '), (resposta) => {
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)
}


