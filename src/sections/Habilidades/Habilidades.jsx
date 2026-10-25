import Secao from '../../components/Secao/Secao'
import Etiqueta from '../../components/Etiqueta/Etiqueta'
import { habilidades } from '../../data/habilidades'
import styles from './Habilidades.module.css'

export default function Habilidades() {
  return (
    <Secao id="habilidades" titulo="Habilidades">
      <div className={styles.grade}>
        {/* map dentro de map: primeiro os grupos, depois os itens de cada grupo */}
        {habilidades.map((grupo) => (
          <div key={grupo.categoria} className={styles.grupo}>
            <h3 className={styles.categoria}>{grupo.categoria}</h3>
            <ul className={styles.lista}>
              {grupo.itens.map((item) => (
                <Etiqueta key={item}>{item}</Etiqueta>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Secao>
  )
}
