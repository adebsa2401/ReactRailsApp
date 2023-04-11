// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import Greeting from './components/greeting';
import store from './feature/configureStore';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <nav>
        <Link to="/greeting">greeting</Link>
      </nav>
      <Routes>
        <Route element={<Greeting />} path="/greeting" />
      </Routes>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
