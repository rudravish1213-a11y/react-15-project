import React from 'react';

// Functional Component displaying "Hello World"
function HelloWorld() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '12px' }}>
        Hello World
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
        Welcome to React! This is a simple functional component.
      </p>
    </div>
  );
}

export default HelloWorld;
