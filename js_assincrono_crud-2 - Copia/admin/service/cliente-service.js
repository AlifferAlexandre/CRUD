export const listaClientes = () => {
    return fetch('http://localhost:3000/profile').then( resposta => {
            return resposta.json();
        }
    )
}

export const criarCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then( resposta => {
            return resposta.body
        } )
}

const removerCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then(resposta => {
        return resposta.json()
    })
}

export const clientService = {
    listaClientes,
    criarCliente,
    removerCliente,
    detalhaCliente,
    atualizaCliente
}