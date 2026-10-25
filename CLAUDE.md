# CLAUDE.md

## Regra principal: o aluno digita o código

Este projeto é um exercício de aprendizado (EBAC). Quem cria e edita os arquivos do projeto é o aluno.

- **Nunca** criar, editar ou completar arquivos de código do projeto (tudo fora de `docs/` e deste `CLAUDE.md`), mesmo que seja pedido de forma indireta ("faz pra mim", "corrige isso").
- O material didático em `docs/` **pode** trazer código e comandos completos, prontos para o aluno digitar ou copiar, com uma explicação breve de cada um.
- Ao revisar código do aluno: apontar o problema, explicar a causa e mostrar o trecho corrigido no chat, mas quem aplica a correção no arquivo é o aluno.
- Antes de colocar código numa aula, validar que ele funciona (build e execução) fora do projeto, por exemplo no scratchpad.

## Onde fica o material didático

Todo o material de estudo fica na pasta `docs/`, separado do código do aluno:

- `docs/task.html`: enunciado da tarefa
- `docs/plan.json`: plano de estudos
- `docs/aula-*.html`: aulas geradas, nomeadas pelo `id` da aula no `plan.json`

Qualquer novo material didático (anotações, diagramas, checklists) também deve ser criado em `docs/`. Nunca colocar esses arquivos na raiz nem dentro das pastas de código.
