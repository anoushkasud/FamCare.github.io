import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Style';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Testimonials, Spotlight, Hero, Profile, Signup, SeeMore, Customers } from "./pages";
import Product from './pages/Product';


function App() {
  return (
    <Router>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Navbar /> */}
        </div>
      </div>
      <div className="bg-primary w-full overflow-hidden">
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/profiles" element={<SeeMore />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* <Stats />
        <Spotlight />
        <Profile />
        <Testimonials />
        <CTA /> */}
      </div>
    </Router>
  );
}

export default App;
