import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// We will create these next
import Page1Question from './pages/Page1Question';
import Page2Compliment from './pages/Page2Compliment';
import Page3Birthday from './pages/Page3Birthday';
import Page4VirtualHug from './pages/Page4VirtualHug';
import Page5Love from './pages/Page5Love';
import Page6Envelope from './pages/Page6Envelope';
import Page7Memories from './pages/Page7Memories';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-800">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page1Question />} />
          <Route path="/compliment" element={<Page2Compliment />} />
          <Route path="/birthday" element={<Page3Birthday />} />
          <Route path="/hug" element={<Page4VirtualHug />} />
          <Route path="/love" element={<Page5Love />} />
          <Route path="/envelope" element={<Page6Envelope />} />
          <Route path="/memories" element={<Page7Memories />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
