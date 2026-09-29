import React, { useState, useEffect } from 'react';

function UseEffectLogApp() {
  const [clickCount, setClickCount] = useState(0);
  const [logMessages, setLogMessages] = useState([]);

  // Demonstration of useEffect triggered whenever clickCount changes
  useEffect(() => {
    if (clickCount > 0) {
      const logText = `[useEffect Triggered] Button has been clicked ${clickCount} time(s). Timestamp: ${new Date().toLocaleTimeString()}`;
      
      // Log to browser console as required
      console.log(logText);

      // Also append to state for visual output on screen
      setLogMessages(prevLogs => [...prevLogs, logText]);
    }
  }, [clickCount]);

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
  };

  const handleClearLogs = () => {
    setClickCount(0);
    setLogMessages([]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
          Click the button below to update state and trigger the <code>useEffect</code> hook.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Click Me ({clickCount})
          </button>
          <button className="btn btn-secondary" onClick={handleClearLogs}>
            Clear Logs
          </button>
        </div>
      </div>

      <div style={{
        backgroundColor: '#0f172a',
        color: '#38bdf8',
        borderRadius: '10px',
        padding: '16px',
        fontFamily: 'monospace',
        fontSize: '0.88rem',
        minHeight: '180px',
        maxHeight: '260px',
        overflowY: 'auto',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
      }}>
        <div style={{ color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '12px', fontWeight: 'bold' }}>
          Console & Screen Log Output Feed:
        </div>

        {logMessages.length === 0 ? (
          <div style={{ color: '#64748b', italic: 'true' }}>
            No click events logged yet. Click the button above to test useEffect!
          </div>
        ) : (
          logMessages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '6px', color: '#4ade80' }}>
              &gt; {msg}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UseEffectLogApp;
