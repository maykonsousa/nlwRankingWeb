import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Action } from './components/Action';
import { Footer } from './components/Footer';
import { UserProvider } from './context/Context';
import { GlobalStyles } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <Action />
      <Footer />
    </UserProvider>

    <GlobalStyles />
  </React.StrictMode>
);
