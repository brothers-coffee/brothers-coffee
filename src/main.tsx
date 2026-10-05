import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { prepareLocale } from './i18n/locale.ts'
import './index.css'
import App from './App.tsx'

prepareLocale()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
