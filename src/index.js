import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import AppRouter from './components/containers/AppRouter';
import './styles/styles.scss';

const store = configureStore();

const MyApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(MyApp, document.getElementById('root'));
