import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import RouteWithHelmet from './components/RouteWithHelmet';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <RouteWithHelmet title="Home | Your Site Name" description="Welcome to the home page of Your Site Name. Discover amazing content and features.">
                      <Home />
                    </RouteWithHelmet>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <RouteWithHelmet title="About | Your Site Name" description="Learn more about Your Site Name and what we do.">
                      <About />
                    </RouteWithHelmet>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <RouteWithHelmet title="Skills | Your Site Name" description="Explore the skills and expertise we offer.">
                      <Skills />
                    </RouteWithHelmet>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <RouteWithHelmet title="Projects | Your Site Name" description="Check out our projects and what we've been working on.">
                      <Projects />
                    </RouteWithHelmet>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <RouteWithHelmet title="Contact | Your Site Name" description="Get in touch with us through our contact page.">
                      <Contact />
                    </RouteWithHelmet>
                  }
                />
                {/* Catch all other routes */}
                <Route
                  path="*"
                  element={
                    <RouteWithHelmet title="404 Not Found | Your Site Name" description="The page you're looking for does not exist.">
                      <NotFound />
                    </RouteWithHelmet>
                  }
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
