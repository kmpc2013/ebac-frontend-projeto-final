import { perfil } from '../../data/perfil'
import styles from './Inicio.module.css'

// Página inicial (hero): primeira coisa que o recrutador vê. Nome, cargo, resumo e chamadas.
export default function Inicio() {
  return (
    <section id="inicio" className={styles.inicio}>
      <p className={styles.saudacao}>Olá, eu sou</p>
      {/* Único h1 da página: o nome é o assunto principal do site */}
      <h1 className={styles.nome}>{perfil.nome}</h1>
      <p className={styles.cargo}>{perfil.cargo}</p>
      <p className={styles.resumo}>{perfil.resumo}</p>

      <div className={styles.acoes}>
        <a href="#projetos" className={styles.botaoPrimario}>
          Ver projetos
        </a>
        <a href="#contato" className={styles.botaoSecundario}>
          Fale comigo
        </a>
      </div>
    </section>
  )
}
