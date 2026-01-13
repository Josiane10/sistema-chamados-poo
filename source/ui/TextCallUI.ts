import { ICallController } from "../funcionalidade/iCallController";
import { ICallUI } from "./iCallUI";
import { Chamado } from "../modelo/chamado";

/**
 * Interface de usuário textual (prompt/alert) para interação com o sistema de chamados.
 * Permite abrir chamados, listar e marcar como concluídos via menu simples.
 */
export class TextCallUI implements ICallUI {

    callController: ICallController;

    /**
     * Inicializa a UI com um controlador de chamados.
     * @param callController instância responsável pelas regras de negócio
     */
    constructor(callController: ICallController) {
        this.callController = callController;
    }

    /**
     * Inicia o loop de interação com o usuário via prompt.
     * Opções: 1) Cadastrar, 2) Listar, 3) Marcar como concluído, 0) Sair.
     */
    start(): void {
        let op = 1;
        while (op != 0) {
            let entrada = prompt('Escolha uma opção:\n1- Cadastrar\n2- Listar\n3- Marcar como concluído\n0- Sair');
            
            if (entrada === null) {
                op = 0;
                continue;
            }

            op = Number(entrada);

            switch (op) {

                case 1:
                    let nome = prompt('Digite seu nome:');
                    if (nome === null) break;

                    let descricao = prompt('Digite a descrição do problema:');
                    if (descricao === null) break;

                    let deuCerto: boolean = this.callController.abrirChamado(nome, descricao);

                    if (deuCerto) {
                        alert('Chamado cadastrado');
                    } else {
                        alert('Não foi possível cadastrar o chamado');
                    }
                    break;

                case 2:
                    let listaChamados = this.callController.listarChamado();
                    let mensagem = "--- Lista de Chamados ---\n";

                    for (let i = 0; i < listaChamados.length; i++) {
                        let c = listaChamados[i];
                        let status = c.getStatus() ? "Atendido" : "Pendente";
                        mensagem += i + " - " + c.getSolicitante() + " | " + c.getDescricao() + " | [" + status + "]\n";
                    }

                    alert(mensagem);
                    break;

                case 3:
                    let chamadosParaFechar = this.callController.listarChamado();
                    let menu = "Digite o número do chamado para resolver:\n";

                    for (let j = 0; j < chamadosParaFechar.length; j++) {
                        menu += j + " - " + chamadosParaFechar[j].getDescricao() + "\n";
                    }

                    let inputIndex = prompt(menu);
                    if (inputIndex === null) break;
                    
                    let index = Number(inputIndex);

                    if (!isNaN(index) && index >= 0 && index < chamadosParaFechar.length) {
                        let selecionado = chamadosParaFechar[index];
                        this.callController.marcarComoAtendido(selecionado);
                        alert("Chamado finalizado com sucesso!");
                    } else {
                        alert("Número inválido!");
                    }
                    break;

                case 0:
                    alert("Encerrando...");
                    break;

                default:
                    alert("Opção inválida!");
                    break;
            }
        }
    }
}
