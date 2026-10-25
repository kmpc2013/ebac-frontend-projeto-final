// Imagens importadas: o Vite gera o caminho final (com hash) no build.
import imgEfood from '../assets/projetos/efood.svg'
import imgAgenda from '../assets/projetos/agenda.svg'
import imgLanding from '../assets/projetos/landing.svg'
import imgTarefas from '../assets/projetos/tarefas.svg'

// Cada objeto vira um <CardProjeto>. Para adicionar um projeto, basta incluir um item.
export const projetos = [
  {
    id: 'efood',
    titulo: 'eFood — delivery de restaurantes',
    descricao:
      'Aplicação de pedidos com listagem de restaurantes vinda de API, carrinho lateral e checkout em etapas com validação de formulário.',
    imagem: imgEfood,
    tecnologias: ['React', 'TypeScript', 'Redux Toolkit', 'Styled Components', 'Formik'],
    repositorio: 'https://github.com/seu-usuario/efood',
    demo: 'https://efood-seu-usuario.vercel.app',
  },
  {
    id: 'agenda',
    titulo: 'Agenda de contatos',
    descricao:
      'CRUD de contatos com edição inline e filtro por nome. O estado global fica no Redux e a interface é toda componentizada.',
    imagem: imgAgenda,
    tecnologias: ['React', 'Redux', 'TypeScript', 'Styled Components'],
    repositorio: 'https://github.com/seu-usuario/agenda-contatos',
    demo: 'https://agenda-seu-usuario.vercel.app',
  },
  {
    id: 'landing',
    titulo: 'Landing page responsiva',
    descricao:
      'Página de produto com layout mobile first, animações em CSS e pipeline de build com Gulp para compilar SASS e otimizar imagens.',
    imagem: imgLanding,
    tecnologias: ['HTML', 'SASS', 'Gulp', 'JavaScript'],
    repositorio: 'https://github.com/seu-usuario/landing-page',
    demo: 'https://seu-usuario.github.io/landing-page',
  },
  {
    id: 'tarefas',
    titulo: 'Lista de tarefas com jQuery',
    descricao:
      'Lista de tarefas com adição, marcação de concluídas e remoção, manipulando o DOM com jQuery. Primeiro projeto com eventos e estado na página.',
    imagem: imgTarefas,
    tecnologias: ['HTML', 'CSS', 'jQuery'],
    repositorio: 'https://github.com/seu-usuario/lista-tarefas',
    demo: null, // Sem demonstração publicada: o card mostra só o repositório
  },
]
