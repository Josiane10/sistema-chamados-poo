import { Chamado } from "./chamado";

/**
 * Define o contrato de persistência para a entidade Chamado.
 * Implementações podem utilizar memória, arquivos, bancos de dados, etc.
 */
export interface ICallRepository{
    /**
     * Persiste um novo chamado no repositório.
     * @param chamado instância de Chamado a ser criada
     * @returns true se criado com sucesso, false caso contrário
     */
    criarNovoChamado(chamado:Chamado):boolean;
    /**
     * Atualiza um chamado existente no repositório.
     * @param chamado instância de Chamado já existente com os dados atualizados
     * @returns true se atualizado com sucesso, false caso contrário
     */
    atualizarChamado(chamado:Chamado):boolean;
    /**
     * Lista todos os chamados presentes no repositório.
     * @returns um array com todas as instâncias de Chamado
     */
    listarChamados():Array<Chamado>;
}
