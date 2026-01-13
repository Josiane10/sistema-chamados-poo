/**
 * Representa um chamado de suporte aberto por um solicitante.
 * Contém o status atual (atendido ou não), o nome do solicitante e a descrição do problema.
 */
export class Chamado{
    status:boolean;
    solicitante:string;
    descricao:string;

    /**
     * Cria uma nova instância de Chamado.
     * @param status estado inicial do chamado (true = atendido, false = pendente)
     * @param solicitante nome da pessoa que abriu o chamado
     * @param descricao descrição do problema reportado
     */
    constructor(status:boolean,solicitante:string,descricao:string){
        this.status = status;
        this.solicitante = solicitante;
        this.descricao = descricao;
    }

    /**
     * Atualiza o status do chamado.
     * @param novo novo estado do chamado (true = atendido, false = pendente)
     */
    setStatus(novo:boolean){
        this.status = novo;
    } 
    getStatus(): boolean{
        return this.status;
    }
    getSolicitante(): string{
         return this.solicitante;
    }
    getDescricao(): string{
        return this.descricao;
    }
 

}