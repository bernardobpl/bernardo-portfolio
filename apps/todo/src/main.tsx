import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from '@portfolio/ui'

createRoot(document.getElementById('root')!).render( //eslint-disable-line
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
