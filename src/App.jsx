import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Introduction from './pages/Introduction';
import Vision from './pages/Vision';
import Platform from './pages/Platform';
import Economy from './pages/Economy';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default App;

