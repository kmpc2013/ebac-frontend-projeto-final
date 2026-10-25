import Secao from '../../components/Secao/Secao'
import LinhaProjeto from '../../components/LinhaProjeto/LinhaProjeto'
import { projetos } from '../../data/projetos'
import styles from './Projetos.module.css'

export default function Projetos() {
  return (
    <Secao id="projetos" indice="02" titulo="Projetos">
      <div className={styles.lista}>
        {/* {...projeto} espalha cada campo do objeto como uma prop da linha;
            o número (01, 02...) vem da posição no array */}
        {projetos.map((projeto, indice) => (
          <LinhaProjeto key={projeto.id} numero={String(indice + 1).padStart(2, '0')} {...projeto} />
        ))}
      </div>
    </Secao>
  )
}
