import Etiqueta from '../Etiqueta/Etiqueta'
import styles from './LinhaProjeto.module.css'

// Recebe um projeto por props e monta uma linha da lista. Não sabe de onde os dados vêm:
// quem decide a lista é a seção Projetos (que também manda o "numero" da linha).
export default function LinhaProjeto({
  numero,
  titulo,
  descricao,
  impacto,
  imagem,
  tecnologias,
  repositorio,
  demo,
  status,
}) {
  return (
    <article className={styles.linha}>
      <span className={styles.numero} aria-hidden="true">
        {numero}
      </span>

      <div className={styles.corpo}>
        {/* Status opcional (ex.: "Em andamento"), só aparece se o projeto tiver */}
        {status && (
          <p className={styles.status}>
            <span className={styles.ponto} aria-hidden="true" /> {status}
          </p>
        )}
        <h3 className={styles.titulo}>{titulo}</h3>
        {/* Resultado em número (opcional): a primeira coisa que o recrutador lê depois do título */}
        {impacto && (
          <p className={styles.impacto}>
            <span aria-hidden="true">▲ </span>
            {impacto}
          </p>
        )}
        <p className={styles.descricao}>{descricao}</p>

        <ul className={styles.tecnologias} aria-label="Tecnologias usadas">
          {tecnologias.map((tecnologia) => (
            <Etiqueta key={tecnologia}>{tecnologia}</Etiqueta>
          ))}
        </ul>

        <div className={styles.links}>
          {/* Projeto interno não tem link público: mostra só um aviso no lugar do botão.
              target="_blank" abre em outra aba; rel="noreferrer" impede a outra página de controlar esta */}
          {repositorio ? (
            <a href={repositorio} target="_blank" rel="noreferrer" className={`${styles.link} cursor-target`}>
              Repositório <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className={styles.privado}>Repositório privado · projeto interno</span>
          )}
          {/* Renderização condicional: só mostra o link se existir demo */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={`${styles.link} ${styles.linkDemo} cursor-target`}
            >
              Ver online <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* No desktop a imagem fica recortada e se revela ao passar o mouse na linha (ver CSS).
          alt descreve a imagem para leitores de tela e quando ela não carrega. */}
      <div className={styles.moldura}>
        <img src={imagem} alt={`Diagrama do projeto ${titulo}`} className={styles.imagem} loading="lazy" />
      </div>
    </article>
  )
}
