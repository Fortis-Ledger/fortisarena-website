import React, { Suspense, lazy } from "react";
import Routes from "./Routes";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div className="relative">
      {/* Animated logo/spinner */}
      <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
      <div className="absolute inset-2 rounded-full border-2 border-cyan-500/30 border-b-cyan-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
    </div>
  </div>
);

function App() {
  return (
    <>
      {/* Custom cursor - desktop only */}
      <CustomCursor />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Main routes */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes />
      </Suspense>
    </>
  );
}

export default App;
