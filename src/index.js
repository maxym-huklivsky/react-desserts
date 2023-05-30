import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl);
root.render(
  <BrowserRouter basename="/react-desserts">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
