import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// index.html carries default SEO tags for crawlers that don't run JS; <Seo>
// renders per-page versions, so drop the defaults to avoid duplicates.
document.querySelectorAll('head [data-seo-default]').forEach((node) => node.remove())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
