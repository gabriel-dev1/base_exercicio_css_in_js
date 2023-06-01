

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './Global'
import { GlobalStyle } from './Global'

function App() {
return (
  <>
    <GlobalStyle/>
    <Header />
    <Hero />
    <div>
      <ListaVagas />
    </div>
   </>
  )
}



export default App
