import { perfil } from '../../data/perfil'
import styles from './Rodape.module.css'

// Ano calculado ao carregar a página: o rodapé não fica desatualizado em janeiro.
// Fica fora do componente porque o render deve ser "puro" (mesmas props, mesmo resultado).
const ano = new Date().getFullYear()

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p>
        © {ano} {perfil.nome} · Feito com React e Vite
      </p>
    </footer>
  )
}
