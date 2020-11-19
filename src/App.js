import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
