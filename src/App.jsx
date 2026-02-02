import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Introduction from './pages/Introduction';
import Vision from './pages/Vision';
import Platform from './pages/Platform';
import NFT_Utility from './pages/NFT-Utility';
import Roadmap from './pages/Roadmap';
import PredictionToEarn from './pages/PredictionToEarn';
import WeeklyRewards from './pages/WeeklyRewards';

function App() {
  const [isMuted, setIsMuted] = useState(false); // Start unmuted

  return (
    <Router>
      <ScrollToTop />
      <Navigation isMuted={isMuted} setIsMuted={setIsMuted} />
      <Routes>
        <Route path="/" element={<Home isMuted={isMuted} />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/nft-utility" element={<NFT_Utility />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/prediction-to-earn" element={<PredictionToEarn />} />
        <Route path="/weekly-rewards" element={<WeeklyRewards />} />
      </Routes>
    </Router>
  );
}

export default App;

