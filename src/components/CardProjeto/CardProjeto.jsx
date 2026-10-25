import Etiqueta from '../Etiqueta/Etiqueta'
import styles from './CardProjeto.module.css'

// Recebe um projeto por props e monta o card. Não sabe de onde os dados vêm:
// quem decide a lista é a seção Projetos.
export default function CardProjeto({ titulo, descricao, imagem, tecnologias, repositorio, demo }) {
  return (
    <article className={styles.card}>
      {/* alt descreve a imagem para leitores de tela e quando ela não carrega */}
      <img
        src={imagem}
        alt={`Captura de tela do projeto ${titulo}`}
        className={styles.imagem}
        loading="lazy"
      />

      <div className={styles.corpo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>

        <ul className={styles.tecnologias} aria-label="Tecnologias usadas">
          {tecnologias.map((tecnologia) => (
            <Etiqueta key={tecnologia}>{tecnologia}</Etiqueta>
          ))}
        </ul>

        <div className={styles.links}>
          {/* target="_blank" abre em outra aba; rel="noreferrer" impede a outra página de controlar esta */}
          <a href={repositorio} target="_blank" rel="noreferrer" className={styles.botaoSecundario}>
            Repositório
          </a>
          {/* Renderização condicional: só mostra o botão se existir demo */}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className={styles.botaoPrimario}>
              Ver online
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
