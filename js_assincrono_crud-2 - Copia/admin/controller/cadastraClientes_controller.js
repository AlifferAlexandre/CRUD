import { clientService, criarCliente } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;

    clientService.criarCliente(nome, email).then( () => {
        window.location.href = "../telas/cadastro_concluido.html"
    })
});