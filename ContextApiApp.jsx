import React, { createContext, useContext, useState } from 'react';

// 1. Create React Context
const AuthContext = createContext();

// 2. Context Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username: username || 'Alex Johnson', role: 'Student User', email: 'alex.j@example.com' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for consuming Context easily
function useAuth() {
  return useContext(AuthContext);
}

// Sub-Component 1: Navbar consuming context
function Header() {
  const { user, isLoggedIn, logout, login } = useAuth();

  return (
    <header style={{
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      padding: '14px 20px',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#38bdf8' }}>
        App Portal (Context API Demo)
      </div>

      <div>
        {isLoggedIn ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.88rem' }}>Welcome, <strong>{user.username}</strong></span>
            <button className="btn btn-danger" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={logout}>
              Log Out
            </button>
          </div>
        ) : (
          <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem' }} onClick={() => login('Alex Johnson')}>
            Log In
          </button>
        )}
      </div>
    </header>
  );
}

// Sub-Component 2: Profile Status consuming context deeply without props
function UserProfileCard() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px dashed var(--border-color)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>🔒 Please log in from the header to view your authentication context data.</p>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>👤 User Profile Context</h4>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '4px' }}><strong>Username:</strong> {user.username}</p>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '4px' }}><strong>Role:</strong> {user.role}</p>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

// Main Parent Component
function ContextApiApp() {
  return (
    <AuthProvider>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Header />
        <UserProfileCard />
      </div>
    </AuthProvider>
  );
}

export default ContextApiApp;
