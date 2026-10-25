import Secao from '../../components/Secao/Secao'
import FormularioContato from '../../components/FormularioContato/FormularioContato'
import CurvedLoop from '../../components/reactbits/CurvedLoop/CurvedLoop'
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
    <Secao id="contato" indice="05" titulo="Contato">
      {/* Faixa curva (CurvedLoop, React Bits): dá para arrastar com o mouse. Decorativa. */}
      <div className={styles.faixaCurva} aria-hidden="true">
        <CurvedLoop
          marqueeText="Vamos conversar ✦ Bora construir ✦ "
          speed={1.5}
          curveAmount={260}
          fontSize={110}
          fontWeight={800}
          color="var(--cor-destaque)"
          interactive
        />
      </div>

      <div className={styles.grade}>
        <div className={styles.chamada}>
          <p className={styles.texto}>
            Está procurando alguém para o seu time ou quer conversar sobre um projeto? Mande uma
            mensagem ou me encontre nas redes abaixo.
          </p>

          {/* E-mail gigante: o caminho mais curto para falar comigo */}
          <a href={`mailto:${perfil.email}`} className={`${styles.email} cursor-target`}>
            {perfil.email}
          </a>

          <ul className={styles.redes}>
            {redes.map((rede, indice) => (
              <li key={rede.nome}>
                <a href={rede.url} target="_blank" rel="noreferrer" className="cursor-target">
                  <span aria-hidden="true">{String(indice + 1).padStart(2, '0')}</span>
                  {rede.nome}
                  <span aria-hidden="true">↗</span>
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
