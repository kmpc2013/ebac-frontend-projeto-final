// Imagens importadas: o Vite gera o caminho final (com hash) no build.
import imgLoki from '../assets/projetos/loki.svg'
import imgCorrelacao from '../assets/projetos/aiops.svg'
import imgGateway from '../assets/projetos/gateway.svg'
import imgReporthub from '../assets/projetos/reporthub.svg'
import imgKeycloak from '../assets/projetos/keycloak.svg'
import imgZmapl from '../assets/projetos/zmapl.svg'

// Cada objeto vira uma <LinhaProjeto>. Para adicionar um projeto, basta incluir um item.
// repositorio: null = projeto interno da empresa (a linha mostra "Repositório privado").
// status: opcional; quando existe, aparece acima do título.
// impacto: opcional; resultado em número (ex.: "−70% de chamados duplicados"), aparece abaixo do título.
export const projetos = [
  {
    id: 'logs-mtls',
    titulo: 'Plataforma de logs multi-cliente com mTLS',
    descricao:
      'Centralização de logs de servidores Windows e Linux de vários clientes num Loki próprio. Cada cliente é isolado por certificado mTLS, com revogação, e as configurações chegam aos agentes via Git, sem nenhuma credencial nas VMs. Inclui containers endurecidos, CI/CD por cliente com verificação depois do deploy, testes de segurança negativos e runbooks completos.',
    imagem: imgLoki,
    tecnologias: ['Grafana Loki', 'Grafana Alloy', 'mTLS', 'Git', 'Docker', 'CI/CD'],
    repositorio: null,
    demo: null,
    status: 'Em andamento',
  },
  {
    id: 'correlacao',
    titulo: 'Correlação de eventos: do alerta ao chamado único',
    descricao:
      'Reduz o ruído operacional agrupando os alertas do Zabbix por host num único chamado no ITSM. O título é gerado por LLM e o reconhecimento volta automaticamente ao Zabbix. São mais de 860 testes automatizados, pipeline com gates de qualidade e versionamento automático, e credenciais cifradas no banco.',
    imagem: imgCorrelacao,
    tecnologias: ['Zabbix', 'LLMs', 'ITSM', 'APIs REST', 'CI/CD'],
    repositorio: null,
    demo: null,
  },
  {
    id: 'gateway-ia',
    titulo: 'Gateway de IA corporativa on-premises',
    descricao:
      'IA generativa interna (LibreChat, Open WebUI e LiteLLM sobre vLLM) para que os dados não saiam da empresa. A borda tem TLS 1.3, HSTS, CSP e rate limit, e a migração foi conduzida com scripts de preflight, cutover e rollback documentados.',
    imagem: imgGateway,
    tecnologias: ['LibreChat', 'Open WebUI', 'LiteLLM', 'vLLM', 'Nginx', 'TLS 1.3'],
    repositorio: null,
    demo: null,
  },
  {
    id: 'reporthub',
    titulo: 'ReportHub: relatórios executivos sob demanda',
    descricao:
      'Portal com SSO (Keycloak/OIDC) que gera relatórios executivos e dossiês de alerta a partir dos logs, com execução assíncrona, limites de concorrência e trilha de auditoria. Tem cerca de 130 testes e CI/CD com versionamento automático de imagens.',
    imagem: imgReporthub,
    tecnologias: ['Keycloak', 'OIDC', 'Docker', 'CI/CD'],
    repositorio: null,
    demo: null,
  },
  {
    id: 'sso-keycloak',
    titulo: 'Identidade única: SSO corporativo com Keycloak',
    descricao:
      'Login único com MFA para GitLab, Grafana, Zabbix, GLPI e ferramentas de IA, usando OIDC e SAML, com tema da marca. Cada integração tem guia próprio e há um procedimento de produção passo a passo.',
    imagem: imgKeycloak,
    tecnologias: ['Keycloak', 'OIDC', 'SAML', 'MFA', 'Active Directory'],
    repositorio: null,
    demo: null,
  },
  {
    id: 'zmapl',
    titulo: 'ZmapL: chamados inteligentes a partir do Zabbix',
    descricao:
      'Um único host do Zabbix monitorava jobs de backup de vários clientes, e os chamados automáticos saíam sem identificar o cliente. Criei um mapeamento que classifica cada chamado pelo cliente e serviço corretos, com um portal web para gerenciar esse mapeamento sem editar arquivos à mão, reduzindo erros.',
    imagem: imgZmapl,
    tecnologias: ['Zabbix (API)', 'Angular', 'Node.js', 'MySQL', 'Docker', 'Veeam', 'OTRS'],
    repositorio: 'https://github.com/kmpc2013/ZmapL',
    demo: null,
  },
]
