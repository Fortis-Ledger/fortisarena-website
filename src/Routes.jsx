import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CommunityPage from './pages/community';
import TokenomicsPage from './pages/tokenomics';
import RoadmapPage from './pages/roadmap';
import CreatorStudio from './pages/creator-studio';
import About from './pages/about';
import Homepage from './pages/homepage';
import Waitlist from './pages/waitlist';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/tokenomics" element={<TokenomicsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/creator-studio" element={<CreatorStudio />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
