import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import Inicio from './sections/Inicio/Inicio'
import Sobre from './sections/Sobre/Sobre'
import Projetos from './sections/Projetos/Projetos'
import Habilidades from './sections/Habilidades/Habilidades'
import Contato from './sections/Contato/Contato'

// App só organiza a página: a ordem das seções aqui é a ordem na tela.
export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
