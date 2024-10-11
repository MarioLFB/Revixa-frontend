import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomeWrapper from './pages/home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeWrapper />
  </StrictMode>,
)
