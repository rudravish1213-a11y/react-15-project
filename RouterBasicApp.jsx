import React from 'react';
import { MemoryRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Home Page Component
function Home() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
      <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>🏠 Home Page</h3>
      <p style={{ color: 'var(--text-muted)' }}>
        Welcome to the Home Page of our React Router demonstration application.
      </p>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
      <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>ℹ️ About Page</h3>
      <p style={{ color: 'var(--text-muted)' }}>
        This page demonstrates client-side navigation between pages using React Router without reloading the page.
      </p>
    </div>
  );
}

// Navigation Bar Component
function NavigationBar() {
  const location = useLocation();

  const navLinkStyle = (path) => ({
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    backgroundColor: location.pathname === path ? 'var(--primary)' : 'transparent',
    color: location.pathname === path ? '#ffffff' : 'var(--text-main)',
    transition: 'all 0.2s ease'
  });

  return (
    <nav style={{
      display: 'flex',
      gap: '12px',
      padding: '12px 16px',
      backgroundColor: '#f1f5f9',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <Link to="/" style={navLinkStyle('/')}>Home</Link>
      <Link to="/about" style={navLinkStyle('/about')}>About</Link>
    </nav>
  );
}

// Main App Container using MemoryRouter for practical isolation
function RouterBasicApp() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default RouterBasicApp;
