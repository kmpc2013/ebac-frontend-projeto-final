import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import TargetCursor from './components/reactbits/TargetCursor/TargetCursor'
import Inicio from './sections/Inicio/Inicio'
import Sobre from './sections/Sobre/Sobre'
import Projetos from './sections/Projetos/Projetos'
import Habilidades from './sections/Habilidades/Habilidades'
import Formacao from './sections/Formacao/Formacao'
import Contato from './sections/Contato/Contato'

// App só organiza a página: a ordem das seções aqui é a ordem na tela.
export default function App() {
  return (
    <>
      {/* Cursor-mira (React Bits): trava nos elementos com a classe "cursor-target".
          Ele mesmo se desliga em telas de toque e com "reduzir movimento" ativo. */}
      <TargetCursor targetSelector=".cursor-target" cursorColor="#c6ff3d" spinDuration={3} blendMode="normal" />
      <Cabecalho />
      <main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Formacao />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
