import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './src/app.js';

import createStore from './store';
const store = createStore();

/**
 * Main class component
 * @description Main class that imports the App to attach it to the DOM and wraps it in a provider that provides the store
 */

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
