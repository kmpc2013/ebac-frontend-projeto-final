# Portfólio — Seu Nome

Portfólio profissional desenvolvido em React como projeto final do curso de Front-end da EBAC. Reúne meus principais projetos, habilidades e formas de contato.

🔗 **Versão online:** https://seu-portfolio.vercel.app

## Seções

- **Início:** resumo profissional e atalhos para projetos e contato
- **Sobre mim:** apresentação, foto e informações de contato
- **Projetos:** projetos do curso com descrição, tecnologias, imagem e links
- **Habilidades:** tecnologias e competências agrupadas por área
- **Contato:** formulário com validação e links para redes profissionais

## Tecnologias

- React 19 (componentes, props, `useState`, `useEffect` e hook personalizado)
- Vite 8
- CSS Modules (estilização modular por componente)
- Oxlint
- Deploy na Vercel

## Projetos apresentados

| Projeto | Descrição | Tecnologias |
| --- | --- | --- |
| eFood | Delivery de restaurantes com carrinho e checkout em etapas | React, TypeScript, Redux Toolkit, Styled Components, Formik |
| Agenda de contatos | CRUD de contatos com edição e filtro | React, Redux, TypeScript, Styled Components |
| Landing page responsiva | Página de produto mobile first com build automatizado | HTML, SASS, Gulp, JavaScript |
| Lista de tarefas | Lista com adição, conclusão e remoção de tarefas | HTML, CSS, jQuery |

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 20.19 ou mais novo.

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/ebac-portfolio.git
cd ebac-portfolio

# Instalar as dependências
npm install

# Rodar em desenvolvimento (http://localhost:5173)
npm run dev

# Gerar e visualizar o build de produção (http://localhost:4173)
npm run build
npm run preview
```

## Estrutura

```
src/
├── assets/       # foto e capturas de tela
├── components/   # componentes reutilizáveis (Cabecalho, CardProjeto, Secao...)
├── data/         # conteúdo: perfil, projetos e habilidades
├── hooks/        # useSecaoAtiva (destaca a seção visível no menu)
├── sections/     # Inicio, Sobre, Projetos, Habilidades, Contato
└── styles/       # CSS global (variáveis e reset)
```

Para adicionar um projeto, inclua um objeto em `src/data/projetos.js` e a imagem em `src/assets/projetos/`.

## Contato

- LinkedIn: https://www.linkedin.com/in/seu-usuario
- E-mail: seuemail@exemplo.com
