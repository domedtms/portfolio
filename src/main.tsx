import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Application root element not found.')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
