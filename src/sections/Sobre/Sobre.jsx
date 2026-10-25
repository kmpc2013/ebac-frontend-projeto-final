import Secao from '../../components/Secao/Secao'
import ScrollReveal from '../../components/reactbits/ScrollReveal/ScrollReveal'
import RotatingText from '../../components/reactbits/RotatingText/RotatingText'
import { perfil } from '../../data/perfil'
import foto from '../../assets/profile-pic-noback-270x338.png'
import styles from './Sobre.module.css'

export default function Sobre() {
  const { manifesto } = perfil

  return (
    <Secao id="sobre" indice="01" titulo="Sobre mim">
      <div className={styles.grade}>
        {/* Coluna da esquerda: foto numa "tela de monitor" + dados rápidos. Fica presa no desktop. */}
        <aside className={styles.lateral}>
          <figure className={styles.monitor}>
            <img src={foto} alt={`Foto de ${perfil.nome}`} className={styles.foto} />
            <figcaption className={styles.legenda} aria-hidden="true">
              cam_01 · rec ●
            </figcaption>
          </figure>

          {/* <dl> = lista de pares "rótulo: valor", ideal para dados de contato */}
          <dl className={styles.contatos}>
            <dt>Localização</dt>
            <dd>{perfil.localizacao}</dd>
            <dt>E-mail</dt>
            <dd>
              <a href={`mailto:${perfil.email}`} className="cursor-target">
                {perfil.email}
              </a>
            </dd>
            <dt>GitHub</dt>
            <dd>
              <a href={perfil.github} target="_blank" rel="noreferrer" className="cursor-target">
                {perfil.github.replace('https://', '')}
              </a>
            </dd>
          </dl>
        </aside>

        <div className={styles.texto}>
          {/* ScrollReveal (React Bits): as palavras acendem conforme a página rola */}
          {perfil.sobre.map((paragrafo) => (
            <ScrollReveal
              key={paragrafo}
              tag="p"
              containerClassName={styles.paragrafo}
              baseOpacity={0.12}
              enableBlur
              blurStrength={6}
              baseRotation={0}
              wordAnimationEnd="center center"
            >
              {paragrafo}
            </ScrollReveal>
          ))}

          {/* Manifesto: a última palavra troca sozinha (RotatingText, React Bits) */}
          <p className={styles.manifesto}>
            {manifesto.inicio}{' '}
            <RotatingText
              texts={manifesto.estados.map((estado) => `${estado}.`)}
              mainClassName={styles.rotativo}
              staggerFrom="last"
              staggerDuration={0.02}
              splitLevelClassName={styles.rotativoCorte}
              rotationInterval={2200}
            />
          </p>
          <p className={styles.fim}>{manifesto.fim}</p>
        </div>
      </div>
    </Secao>
  )
}
