import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreateShortCodePage from './pages/CreateShortCodePage'
import RedirectPage from './pages/RedirectPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateShortCodePage />} />
        <Route path='/shorturl/:shortcode' element={<RedirectPage />} />
      </Routes>
    </div>
  )
}

export default App
