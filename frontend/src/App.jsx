import { Route, Routes } from 'react-router-dom'

import Stack from '@mui/material/Stack';


import HomePage from './pages/HomePage'
import CreateShortCodePage from './pages/CreateShortCodePage'
import RedirectPage from './pages/RedirectPage'
import HeadNav from './components/HeadNav'

function App() {

  return (
    <Stack spacing={2}>
      <HeadNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateShortCodePage />} />
        <Route path='/shorturl/:shortcode' element={<RedirectPage />} />
      </Routes>
    </Stack>
  )
}

export default App
