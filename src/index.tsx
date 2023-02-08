import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './global-styles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

reportWebVitals();
