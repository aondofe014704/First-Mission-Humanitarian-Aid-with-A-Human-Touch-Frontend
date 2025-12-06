import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Organogram from './pages/Organogram';
import Governance from './pages/Governance';
// import Donations from './pages/Donations';
import StoriesSection from './pages/StoriesSection';
import StoryDetail from './pages/StoryDetail';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Toaster
                position="top-right"
                richColors
                expand={false}
                duration={4000}
            />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/organogram" element={<Organogram />} />
                <Route path="/governance" element={<Governance />} />
                {/*<Route path="/donations" element={<Donations />} />*/}
                <Route path="/stories" element={<StoriesSection />} />
                <Route path="/stories/:id" element={<StoryDetail />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;