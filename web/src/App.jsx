import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import DocsPage from './pages/DocsPage';
import FlasherPage from './pages/FlasherPage';
import MapPage from './pages/MapPage';
import MerchPage from './pages/MerchPage';

function App() {
    return (
        <Router basename="/Meshcore">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/flasher" element={<FlasherPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/merch" element={<MerchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
