import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="d-flex h-100 align-items-center justify-content-center">
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

