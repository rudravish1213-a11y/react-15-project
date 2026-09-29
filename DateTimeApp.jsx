import React, { useState, useEffect } from 'react';

function DateTimeApp() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update date and time every 1 second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div style={{ textAlign: 'center', padding: '30px 20px' }}>
      <div style={{
        maxWidth: '450px',
        margin: '0 auto',
        padding: '32px',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }}>
        <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#38bdf8', marginBottom: '16px' }}>
          Real-Time Clock & Calendar
        </h3>
        
        <div style={{ fontSize: '2.8rem', fontWeight: 'bold', letterSpacing: '1px', fontFamily: 'monospace', margin: '12px 0' }}>
          {formattedTime}
        </div>

        <div style={{ fontSize: '1.1rem', color: '#cbd5e1', marginTop: '8px' }}>
          {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default DateTimeApp;
