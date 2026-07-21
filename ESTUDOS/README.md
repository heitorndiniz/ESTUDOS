# Lista de Tarefas (To-Do)

Aplicação de estudo feita com **React + Vite**. Uma lista de tarefas simples,
com estado gerenciado via `useState` e componentes isolados que se comunicam
por props e callbacks.

## Funcionalidades

- ➕ **Adicionar** tarefa por um campo de texto (envio por Enter ou botão)
- ✅ **Marcar como concluída** — checkbox risca o texto da tarefa
- 🗑️ **Remover** tarefa individual
- 📭 **Estado vazio** — mensagem quando não há tarefas
- 📱 **Layout responsivo** e centralizado (CSS puro, um arquivo por componente)

## Estrutura

```
src/
├── App.jsx              # dono do estado (lista de tarefas) e das ações
├── main.jsx             # ponto de entrada (monta o App)
├── index.css           # reset, paleta e layout global
└── components/
    ├── Header.jsx       # título
    ├── AddTodo.jsx      # formulário de adicionar (input controlado)
    ├── TodoList.jsx     # renderiza a lista / estado vazio
    └── TodoItem.jsx     # uma tarefa: checkbox, texto, excluir
```

Fluxo: os dados descem por props a partir do `App`; as ações (adicionar,
marcar, remover) sobem por callbacks até o `App`, que atualiza o estado.

## Como rodar

Requer [Node.js](https://nodejs.org/) 18+.

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento (com hot reload)
npm run dev
```

O terminal mostra a URL local (ex.: `http://localhost:5173/`).

### Outros comandos

```bash
npm run build     # build de produção (gera dist/)
npm run preview   # serve o build de produção localmente
```

## Observações

- As tarefas ficam apenas em memória — **recarregar a página zera a lista**
  (sem persistência ainda).
- Projeto de estudo; não usa bibliotecas de estado ou UI externas.
