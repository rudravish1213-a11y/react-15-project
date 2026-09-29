import React from 'react';
import { MemoryRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// User List Data
const usersList = [
  { id: '1', name: 'Rohan Patil', age: 20, course: 'B.Sc.IT' },
  { id: '2', name: 'Aditya Shah', age: 21, course: 'B.Sc.IT' },
  { id: '3', name: 'Kunal Mehta', age: 20, course: 'B.Sc.IT' }
];

// User List Page Component
function UserList() {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Student List (Click name to view details)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {usersList.map((user) => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              padding: '14px 18px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: '600',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span>{user.name}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>View Profile &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// User Details Component using useParams()
function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find user details by route parameter
  const user = usersList.find((u) => u.id === id);

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p style={{ color: 'var(--danger)' }}>User not found!</p>
        <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ marginTop: '12px' }}>
          Back to Student List
        </button>
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid var(--border-color)',
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: '#ffffff',
      maxWidth: '420px',
      margin: '0 auto',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--primary)',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '0.9rem',
          marginBottom: '16px'
        }}
      >
        &larr; Back to Student List
      </button>

      <div style={{
        padding: '6px 12px',
        backgroundColor: 'var(--primary-light)',
        borderRadius: '6px',
        color: 'var(--primary)',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        marginBottom: '16px',
        display: 'inline-block'
      }}>
        Route Param: /user/{id}
      </div>

      <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '12px' }}>{user.name}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Course:</strong> {user.course}</p>
      </div>
    </div>
  );
}

// App Component with React Router MemoryRouter
function DynamicRoutingApp() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </MemoryRouter>
  );
}

export default DynamicRoutingApp;
