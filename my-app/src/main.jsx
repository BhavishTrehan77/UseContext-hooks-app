import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/Themecontext.jsx'
import Userprovider from './context/Usercontext.jsx'


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Userprovider>
    <App />
    </Userprovider>
  </ThemeProvider>,
)
