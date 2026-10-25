// Dados pessoais num lugar só: trocar aqui atualiza todas as seções que os usam.
export const perfil = {
  nome: 'Luis Fernandes',
  cargo: 'Analista de Infraestrutura',
  resumo:
    'Transformo problemas de infraestrutura em soluções completas: identifico a causa, desenho a arquitetura, desenvolvo, aplico segurança, coloco em produção e entrego documentado para o time.',
  sobre: [
    'Atuo em um provedor de serviços gerenciados (MSP), cuidando de ambientes críticos de vários clientes com VMware vSphere, VMware Cloud Director, NSX e HPE Morpheus. Esse dia a dia me ensinou a investigar incidentes a fundo e a buscar a causa real, não só apagar incêndios.',
    'Gosto de ir além da operação: quando encontro um problema recorrente, penso na solução de ponta a ponta. Já levei do zero à produção uma plataforma de relatórios integrada ao Zabbix e ao Grafana Loki com autenticação via Keycloak, além de conduzir a migração de containers Docker para Kubernetes (RKE2 + Rancher).',
    'Para mim, uma entrega só termina quando está segura, monitorada, documentada e repassada, de forma que o time consiga manter e evoluir sem depender de mim.',
  ],
  localizacao: 'Joinville, SC',
  email: 'luis.vidio9@gmail.com',
  github: 'https://github.com/kmpc2013',
  linkedin: 'https://www.linkedin.com/in/luis-gustavo-fernandes-99a42910b/',
}

// Ordem e rótulos do menu. O id precisa ser igual ao id de cada <Secao>.
export const secoes = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'sobre', rotulo: 'Sobre mim' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'habilidades', rotulo: 'Habilidades' },
  { id: 'contato', rotulo: 'Contato' },
]