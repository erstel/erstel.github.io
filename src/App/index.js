import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import Games from './Games';
import PhoneCallHome from './Games/phone-call-home';
import Protosim from './Games/protosim';
import Team from './Team';
import './index.css';

function App() {
  return (
    <HashRouter>
      <div className="h-100">
        <Navbar />
        <div className="-content d-flex justify-content-center">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/games">
            <Games />
          </Route>

          <Route exact path="/games/protosim">
            <Protosim />
          </Route>

          <Route exact path="/games/phone-call-home">
            <PhoneCallHome />
          </Route>

          <Route exact path="/team">
            <Team />
          </Route>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

