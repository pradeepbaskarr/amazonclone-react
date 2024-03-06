import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import HomePage from './components/RenderPages/HomePage'
import SignInPage from './components/RenderPages/SignInPage';
import MensCollectionPage from './components/RenderPages/MensCollectionPage';
import CartPage from './components/RenderPages/CartPage';
import MobileProductPage from './components/RenderPages/mobileProducts';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/menscollectionpage" element={<MensCollectionPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/MobileProductPage" element={<MobileProductPage />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
