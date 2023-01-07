import ReactDom from 'react-dom/client';
import App from './App';

import './styles/index.css';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <>
        <App />
    </>
)

