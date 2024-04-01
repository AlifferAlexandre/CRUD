import { clientService } from "../service/cliente-service.js";

const CriarNovaLinha = (nome, email, id) => {
    const NovoCliente = document.createElement("tr");

    const conteudo = 
    `<td class="td" data-td>${nome}</td>

    <td>${email}</td>

    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`;

    NovoCliente.innerHTML = conteudo;
    NovoCliente.dataset.id = id;
    console.log(NovoCliente);

    return NovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className === "botao-simples botao-simples--excluir";

    if ( botaoDeletar ) {
        const linhaCliente = evento.target.closest("[data-id]");
        // Pega o elemento pai pelo mais próximo.
        let id = linhaCliente.dataset.id;
        clientService.removerCliente(id).then( () => {
            linhaCliente.remove();
        })
    }
    
})


clientService.listaClientes().then( promise => {
    promise.forEach(element => {
    tabela.appendChild(CriarNovaLinha(element.nome, element.email, element.id));
    });
} );