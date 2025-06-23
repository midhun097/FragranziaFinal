import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Ensure App.js exists in src/
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css'; // optional, based on your setup

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
