import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import Games from './Games';
import Team from './Team';
import './index.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="d-flex h-100 align-items-center justify-content-center">
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/games">
          <Games />
        </Route>

        <Route exact path="/team">
          <Team />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;

