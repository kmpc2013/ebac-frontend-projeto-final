# Portfólio — Luis Fernandes

[![Deploy no GitHub Pages](https://github.com/kmpc2013/ebac-frontend-projeto-final/actions/workflows/deploy.yml/badge.svg)](https://github.com/kmpc2013/ebac-frontend-projeto-final/actions/workflows/deploy.yml)

Portfólio profissional de **Analista de Infraestrutura Sênior**, desenvolvido em React como projeto final do curso de Front-end da EBAC. O visual é de uma "sala de controle": fundo escuro, um terminal animado em WebGL e um único verde de status OK.

🔗 **Versão online:** https://kmpc2013.github.io/ebac-frontend-projeto-final/

## Seções

- **Início:** nome, cargo, resumo profissional e atalhos para projetos e contato
- **Sobre mim:** foto, trajetória e dados de contato
- **Projetos:** 6 projetos reais, cada um com problema, solução, tecnologias, diagrama e link
- **Habilidades:** tecnologias agrupadas em 6 áreas
- **Formação:** formação acadêmica e certificações
- **Contato:** formulário com validação e links para LinkedIn, GitHub e e-mail

## Tecnologias

- **React 19:** componentes, props, `useState`, `useEffect`, `lazy`/`Suspense` e hooks personalizados (`useSecaoAtiva`, `useAposInteracao`)
- **Vite 8:** build e servidor de desenvolvimento
- **CSS Modules:** estilo isolado por componente, com variáveis CSS globais
- **[React Bits](https://reactbits.dev):** componentes animados (FaultyTerminal, Shuffle, ScrollReveal, ScrollVelocity, CurvedLoop e outros), com `gsap` e `motion`
- **Vitest + Testing Library:** testes da validação, do formulário, das linhas de projeto e do hook de interação
- **Oxlint:** lint
- **GitHub Actions → GitHub Pages:** CI/CD a cada push na `main`

## Projetos apresentados

| Projeto | Problema → solução | Tecnologias |
| --- | --- | --- |
| Plataforma de logs multi-cliente com mTLS | Logs de vários clientes centralizados num Loki próprio, com um certificado mTLS por cliente e configuração dos agentes via Git | Grafana Loki, Grafana Alloy, mTLS, Git, Docker, CI/CD |
| Correlação de eventos: do alerta ao chamado único | Alertas do Zabbix agrupados por host num único chamado no ITSM, com título gerado por LLM e mais de 860 testes automatizados | Zabbix, LLMs, ITSM, APIs REST, CI/CD |
| Gateway de IA corporativa on-premises | IA generativa interna para os dados não saírem da empresa, com borda endurecida e migração com rollback documentado | LibreChat, Open WebUI, LiteLLM, vLLM, Nginx, TLS 1.3 |
| ReportHub: relatórios executivos sob demanda | Portal com SSO que gera relatórios e dossiês de alerta a partir dos logs, com fila assíncrona e trilha de auditoria | Keycloak, OIDC, Docker, CI/CD |
| Identidade única: SSO corporativo com Keycloak | Login único com MFA para GitLab, Grafana, Zabbix, GLPI e ferramentas de IA | Keycloak, OIDC, SAML, MFA, Active Directory |
| [ZmapL](https://github.com/kmpc2013/ZmapL) | Chamados de backup classificados pelo cliente e serviço corretos, com portal para gerenciar o mapeamento | Zabbix (API), Angular, Node.js, MySQL, Docker, Veeam, OTRS |

Só o ZmapL tem repositório público. Os outros são projetos internos da empresa e aparecem no site como "Repositório privado".

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 20.19 ou mais novo.

```bash
# Clonar o repositório
git clone https://github.com/kmpc2013/ebac-frontend-projeto-final.git
cd ebac-frontend-projeto-final

# Instalar as dependências
npm install

# Rodar em desenvolvimento (http://localhost:5173)
npm run dev

# Rodar os testes e o lint
npm test
npm run lint

# Gerar e visualizar o build de produção (http://localhost:4173)
npm run build
npm run preview
```

## Deploy (CI/CD)

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) roda a cada push na `main`:

```
npm ci → lint → testes → build → deploy no GitHub Pages
```

Se o lint ou algum teste falhar, nada é publicado.

## Desempenho e acessibilidade

O hero abre com uma imagem leve (`hero-poster.webp`). O terminal em WebGL é baixado em um arquivo separado e só é montado na primeira interação do visitante (mouse, toque, rolagem ou teclado). A foto foi convertida para WebP. A página toda caiu de 1,8 MB para cerca de 380 KB.

Lighthouse, mobile:

| Métrica | Antes | Depois |
| --- | --- | --- |
| Performance | 41 | 67 |
| Acessibilidade | 93 | 96 |
| Boas práticas | 100 | 100 |
| SEO | 100 | 100 |
| Peso total | 1,8 MB | 381 KB |

"Antes" foi medido no site publicado. "Depois" foi medido no build local (`npm run preview`), com uma execução só.

## Estrutura

```
src/
├── assets/       # foto, poster do hero e diagramas dos projetos
├── components/   # componentes reutilizáveis (Cabecalho, LinhaProjeto, Secao, FormularioContato...)
│   └── reactbits/  # componentes animados do React Bits (com ajustes locais comentados)
├── data/         # conteúdo: perfil, projetos, habilidades e formação
├── hooks/        # useSecaoAtiva (menu) e useAposInteracao (adia o WebGL)
├── sections/     # Inicio, Sobre, Projetos, Habilidades, Formacao, Contato
├── styles/       # CSS global (variáveis e reset)
├── test/         # configuração dos testes
└── utils/        # funções puras, como a validação do formulário
```

Para adicionar um projeto, inclua um objeto em `src/data/projetos.js` e a imagem em `src/assets/projetos/`. Os campos `status` ("Em andamento") e `impacto` (resultado em número) são opcionais.

## Contato

- LinkedIn: https://www.linkedin.com/in/luis-gustavo-fernandes-99a42910b/
- GitHub: https://github.com/kmpc2013
- E-mail: luis.vidio9@gmail.com
