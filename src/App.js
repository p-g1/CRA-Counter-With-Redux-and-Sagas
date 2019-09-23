import React from 'react';
import Counter from './Counter';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>
  );
}

export default App;
