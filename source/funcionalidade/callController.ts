import { Chamado } from "../modelo/chamado";
import { ICallRepository } from "../modelo/iCallRepository";
import { ICallController } from "./iCallController";

/**
 * Controlador responsável pelas regras de negócio dos Chamados.
 * Interage com o repositório para criar, listar e marcar chamados como atendidos.
 */
export class CallController implements ICallController{
    
    callRepository : ICallRepository;

    /**
     * Inicializa o controlador com uma implementação de repositório.
     * @param callRepository repositório a ser utilizado para persistência
     */
    constructor(callRepository : ICallRepository){
        this.callRepository = callRepository;
    }
    
    /**
     * Abre um novo chamado com status inicial pendente.
     * @param nome nome do solicitante
     * @param descricao descrição do problema reportado
     * @returns true se o repositório persistir com sucesso, caso contrário false
     */
    abrirChamado(nome: string, descricao: string): boolean {
        let novoChamado : Chamado;
        novoChamado = new Chamado(false,nome,descricao);
        return this.callRepository.criarNovoChamado(novoChamado);
    }

    /**
     * Lista todos os chamados presentes no repositório.
     * @returns lista de chamados
     */
    listarChamado(): Array<Chamado> {
        return this.callRepository.listarChamados();
    }

    /**
     * Marca o chamado como atendido e solicita a atualização no repositório.
     * @param chamado instância a ser marcada como atendida
     * @returns true se atualizado com sucesso, false caso contrário
     */
    marcarComoAtendido(chamado: Chamado): boolean {
        chamado.setStatus(true);
        return this.callRepository.atualizarChamado(chamado);
    }

}
