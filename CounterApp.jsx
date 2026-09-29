import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px 20px' }}>
      <div style={{
        maxWidth: '380px',
        margin: '0 auto',
        padding: '32px',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        boxShadow: 'var(--shadow-md)'
      }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Interactive Counter
        </h3>

        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: count > 0 ? 'var(--success)' : count < 0 ? 'var(--danger)' : 'var(--text-main)',
          margin: '20px 0',
          transition: 'color 0.2s ease'
        }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-danger" onClick={handleDecrement} style={{ width: '60px', fontSize: '1.4rem' }}>
            -
          </button>
          
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>

          <button className="btn btn-primary" onClick={handleIncrement} style={{ width: '60px', fontSize: '1.4rem' }}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
