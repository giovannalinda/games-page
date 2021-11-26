import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './ui'

import { Home } from './pages'
import { HOME } from './routes'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
