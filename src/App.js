import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Brands from './components/Brands';
import MyCart from './components/MyCart';
import Login from './components/Login';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/myCart" element={<MyCart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
