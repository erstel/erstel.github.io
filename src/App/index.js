import { Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import './index.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="d-flex h-100 align-items-center justify-content-center">
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;

