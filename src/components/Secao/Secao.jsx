import styles from './Secao.module.css'

// Moldura comum a todas as seções: id para a âncora do menu, título e largura máxima.
// "children" é o conteúdo que cada seção coloca dentro da moldura.
export default function Secao({ id, titulo, children }) {
  return (
    <section id={id} className={styles.secao} aria-labelledby={`${id}-titulo`}>
      <h2 id={`${id}-titulo`} className={styles.titulo}>
        {titulo}
      </h2>
      {children}
    </section>
  )
}
