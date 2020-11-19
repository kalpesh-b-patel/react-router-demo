import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MyRoutes from './components/MyRoutes';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='content'>
        <MyRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
