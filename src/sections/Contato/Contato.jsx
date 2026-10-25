import Secao from '../../components/Secao/Secao'
import FormularioContato from '../../components/FormularioContato/FormularioContato'
import { perfil } from '../../data/perfil'
import styles from './Contato.module.css'

// Redes montadas a partir do perfil: o link é escrito uma vez só, em data/perfil.js
const redes = [
  { nome: 'LinkedIn', url: perfil.linkedin },
  { nome: 'GitHub', url: perfil.github },
  { nome: 'E-mail', url: `mailto:${perfil.email}` },
]

export default function Contato() {
  return (
    <Secao id="contato" titulo="Contato">
      <div className={styles.grade}>
        <div>
          <p>
            Está procurando alguém para o seu time ou quer conversar sobre um projeto? Mande uma
            mensagem ou me encontre nas redes abaixo.
          </p>
          <ul className={styles.redes}>
            {redes.map((rede) => (
              <li key={rede.nome}>
                <a href={rede.url} target="_blank" rel="noreferrer">
                  {rede.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FormularioContato />
      </div>
    </Secao>
  )
}
