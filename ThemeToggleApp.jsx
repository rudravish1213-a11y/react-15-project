import React, { useState, useEffect } from 'react';

function ThemeToggleApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect to react to theme change
  useEffect(() => {
    // Log theme mode transition
    console.log(`Theme updated to: ${isDarkMode ? 'Dark Mode' : 'Light Mode'}`);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={{
      padding: '30px',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      border: '1px solid',
      borderColor: isDarkMode ? '#334155' : 'var(--border-color)',
      boxShadow: 'var(--shadow-md)',
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
        {isDarkMode ? '🌙 Dark Theme Active' : '☀️ Light Theme Active'}
      </h3>
      
      <p style={{
        fontSize: '0.92rem',
        color: isDarkMode ? '#cbd5e1' : 'var(--text-muted)',
        marginBottom: '24px'
      }}>
        This component uses <code>useState</code> to manage theme state and <code>useEffect</code> to synchronize theme updates.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Light</span>
        <button
          onClick={toggleTheme}
          style={{
            width: '60px',
            height: '32px',
            borderRadius: '16px',
            backgroundColor: isDarkMode ? '#2563eb' : '#cbd5e1',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            padding: '4px',
            transition: 'background-color 0.3s'
          }}
        >
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            transform: isDarkMode ? 'translateX(28px)' : 'translateX(0px)',
            transition: 'transform 0.3s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }} />
        </button>
        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Dark</span>
      </div>

      <div style={{
        marginTop: '24px',
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: isDarkMode ? '#1e293b' : '#f1f5f9',
        fontSize: '0.85rem'
      }}>
        Current Theme Status: <strong>{isDarkMode ? 'DARK' : 'LIGHT'}</strong>
      </div>
    </div>
  );
}

export default ThemeToggleApp;
