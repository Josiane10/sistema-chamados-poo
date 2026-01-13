# Sistema de Chamados — Módulo 02 ADS

## Visão Geral
- Projeto didático para gerenciamento simples de chamados (abrir, listar, marcar como atendido).
- Estrutura em camadas: Modelo (entidades), Funcionalidade (regras de negócio), UI (interface com usuário).
- Objetivo: reforçar conceitos de interfaces, separação de responsabilidades e implementação incremental.

## Arquitetura
- **Modelo**: entidades e contratos de persistência
  - [Chamado](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/modelo/chamado.ts): representa um registro de suporte com `status`, `solicitante` e `descricao`.
  - [ICallRepository](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/modelo/iCallRepository.ts): contrato de persistência para `Chamado` (criar, atualizar, listar).
  - [MemoryCallRepository](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/modelo/memoryCallRepository.ts): repositório em memória (a ser finalizado pelos alunos).
- **Funcionalidade**: regras de negócio
  - [ICallController](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/funcionalidade/iCallController.ts): contrato do controlador (abrir, listar, marcar como atendido).
  - [CallController](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/funcionalidade/callController.ts): implementação que orquestra operações com o repositório.
- **UI**: interação com o usuário
  - [ICallUI](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/ui/iCallUI.ts): contrato para UIs do sistema.
  - [TextCallUI](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/ui/TextCallUI.ts): interface textual via `prompt/alert`.
- **Bootstrap**
  - [index.ts](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/index.ts): instancia repositório, controlador e UI.

## Métodos e Contratos (Documentados no Código)
- Repositório:
  - `criarNovoChamado(chamado: Chamado): boolean`
  - `atualizarChamado(chamado: Chamado): boolean`
  - `listarChamados(): Array<Chamado>`
- Controlador:
  - `abrirChamado(nome: string, descricao: string): boolean`
  - `listarChamado(): Array<Chamado>`
  - `marcarComoAtendido(chamado: Chamado): boolean`
- UI:
  - `start(): void`

Os comentários JSDoc foram adicionados diretamente nos arquivos acima, descrevendo responsabilidade, parâmetros e retorno de cada método.

## Atividade: Completar Implementações
Você deve finalizar as partes propositalmente incompletas do projeto:

1) MemoryCallRepository
   - Local: [memoryCallRepository.ts](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/modelo/memoryCallRepository.ts#L1-L200)
   - Tarefas:
     - Criar uma coleção interna (ex.: `private chamados: Chamado[] = [];`).
     - Implementar `criarNovoChamado(chamado)`: adicionar à coleção e retornar `true` em caso de sucesso.
     - Implementar `atualizarChamado(chamado)`: atualizar o registro correspondente. Pode usar:
       - Referência de objeto (mesma instância) ou
       - Critério de identificação simples (ex.: índice, combinação `solicitante + descricao`).
       - Retornar `true` se encontrado e atualizado, `false` caso contrário.
     - Implementar `listarChamados()`: retornar uma cópia da coleção ou a própria referência (para fins didáticos).

2) TextCallUI — opções 2 e 3
   - Local: [TextCallUI.ts](file:///Volumes/IallenSSD/workspaces/typescript/chamados/source/ui/TextCallUI.ts#L1-L200)
   - Tarefas:
     - Implementar o case `2` (Listar): chamar `callController.listarChamado()` e exibir os chamados (`alert` ou `console.log`).
     - Implementar o case `3` (Marcar como concluído):
       - Solicitar identificação do chamado (ex.: índice da lista).
       - Recuperar o chamado da coleção e chamar `callController.marcarComoAtendido(chamado)`.
       - Exibir mensagem de sucesso/erro conforme o retorno.

## Critérios de Aceite
- MemoryCallRepository:
  - Mantém estado em memória durante a execução.
  - `criarNovoChamado` e `listarChamados` funcionam corretamente.
  - `atualizarChamado` marca o registro como atendido quando chamado via controlador.
- TextCallUI:
  - Menu lista corretamente os chamados.
  - Usuário consegue marcar um chamado como concluído e recebe feedback.

## Como Executar
- Pré-requisitos:
  - Node.js (>= 18)
- Execução (exemplos):
  - `npm i`
  - `npm start`

Observação: Adapte os comandos conforme seu ambiente e configuração do `tsconfig.json`.

## Dicas de Implementação
- Mantenha nomes claros e tipagem explícita.
- Evite efeitos colaterais desnecessários ao atualizar elementos da coleção.
- Trate entradas de usuário com cuidado na UI (conversão de `prompt` para número, validação de índices).

## Extensões Opcionais
- Adicionar um identificador único ao `Chamado` (ex.: `id: number`).
+- Separar a formatação de saída (UI) da lógica de listagem, criando uma função de renderização.
+- Persistir em arquivo ou base de dados em uma implementação futura de `ICallRepository`.
