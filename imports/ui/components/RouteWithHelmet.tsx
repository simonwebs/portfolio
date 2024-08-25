import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface RouteWithHelmetProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const RouteWithHelmet: React.FC<RouteWithHelmetProps> = ({ title, description, children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default RouteWithHelmet;
