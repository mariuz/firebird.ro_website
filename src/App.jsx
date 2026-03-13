import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Downloads from './pages/Downloads';
import Community from './pages/Community';
import Support from './pages/Support';
import Development from './pages/Development';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentatie" element={<Documentation />} />
          <Route path="/descarcari" element={<Downloads />} />
          <Route path="/comunitate" element={<Community />} />
          <Route path="/suport" element={<Support />} />
          <Route path="/dezvoltare" element={<Development />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
