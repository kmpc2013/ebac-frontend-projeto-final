import Secao from '../../components/Secao/Secao'
import { perfil } from '../../data/perfil'
import foto from '../../assets/avatar.svg'
import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <Secao id="sobre" titulo="Sobre mim">
      <div className={styles.grade}>
        <img src={foto} alt={`Foto de ${perfil.nome}`} className={styles.foto} />

        <div>
          {/* Um parágrafo por item do array: o texto fica no arquivo de dados */}
          {perfil.sobre.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}

          {/* <dl> = lista de pares "rótulo: valor", ideal para dados de contato */}
          <dl className={styles.contatos}>
            <dt>Localização</dt>
            <dd>{perfil.localizacao}</dd>
            <dt>E-mail</dt>
            <dd>
              <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
            </dd>
            <dt>GitHub</dt>
            <dd>
              <a href={perfil.github} target="_blank" rel="noreferrer">
                {perfil.github.replace('https://', '')}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </Secao>
  )
}
