/**
 * Interface para componentes de interface de usuário do sistema de chamados.
 * Implementações podem ser baseadas em terminal, web, etc.
 */
export interface ICallUI{
    /**
     * Este método inicia a interface de usuário preparando para a interação e execução das funções do sistema por parte do usuário.
     */
    start():void;
}
