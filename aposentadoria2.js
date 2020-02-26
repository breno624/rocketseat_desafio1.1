const nome = 'Breno'
const sexo = 'feminino'
const idade = 22
const contribuicao = 5
const calculaContrib = idade + contribuicao

const aposentadoriaHomem = sexo === "masculino" && contribuicao >=35 && calculaContrib >= 95
const aposentadoriaMulher = sexo === "feminino" && contribuicao >=30 && calculaContrib >= 85

if (aposentadoriaHomem || aposentadoriaMulher == true){
    console.log(`${nome} - Pode aposentar-se.`)
} else {
    console.log(`${nome} - Nao pode aposentar-se`)
}