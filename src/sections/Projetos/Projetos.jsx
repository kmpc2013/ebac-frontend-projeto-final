import Secao from '../../components/Secao/Secao'
import CardProjeto from '../../components/CardProjeto/CardProjeto'
import { projetos } from '../../data/projetos'
import styles from './Projetos.module.css'

export default function Projetos() {
  return (
    <Secao id="projetos" titulo="Projetos">
      <div className={styles.grade}>
        {/* {...projeto} espalha cada campo do objeto como uma prop do card */}
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.id} {...projeto} />
        ))}
      </div>
    </Secao>
  )
}
