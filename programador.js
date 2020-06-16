const programador = {
    nome: "Carlos",
    idade: 32
}

const tecnologias = [{
        nome: 'C++',
        especialidade: 'Desktop'
    },
    {
        nome: 'Python',
        especialidade: 'Data Science'
    },
    {
        nome: 'JavaScript',
        especialidade: 'Web/Mobile'
    }
]

// O usuário Carlos tem 32 anos e usa a tecnologia C++com especialidade em Desktop

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${tecnologias[0].nome} com especialidade em ${tecnologias[0].especialidade}`)