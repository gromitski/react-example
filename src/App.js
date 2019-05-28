import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';

import Home from './pages/Home';
import ActualPage from './pages/ActualPage';


function App() {
  return (
      <main>
        <Router>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/hello-world">Actual Page</NavLink></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route exact path="/hello-world" component={ActualPage}/>
          </div>
        </Router>
      </main>
  );
}

export default App;
