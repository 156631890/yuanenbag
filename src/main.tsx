import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './collection.css'

const root = document.getElementById('root')!
const path=window.location.pathname
if (root.hasChildNodes() && root.querySelector('main')) hydrateRoot(root, <App path={path} />)
else createRoot(root).render(<App path={path} />)

import './product-sections.css'
