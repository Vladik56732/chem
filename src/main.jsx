import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './index.css'
import { App } from './App.jsx'

import './i18n'

createRoot(document.getElementById('root')).render(
    <Theme appearance="dark">
        <BrowserRouter basename="/chem">
            <App />
        </BrowserRouter>
    </Theme>,
)
