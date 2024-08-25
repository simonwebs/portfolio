import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';

// Lazy load the App component
const App = lazy(() => import('/imports/ui/App'));

Meteor.startup(() => {
  // Set the language attribute for the HTML document
  document.documentElement.setAttribute('lang', 'en');

  // Get the container element where the React app will be rendered
  const container = document.getElementById('react-target');
  
  if (container) {
    const root = createRoot(container); // Create a React root
    root.render(
      <Suspense fallback={<div>Loading...</div>}> {/* Show fallback while loading */}
        <App />
      </Suspense>
    );
  }
});
