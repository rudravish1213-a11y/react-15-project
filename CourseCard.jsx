import React from 'react';

// Child Component
function CourseCard(props) {
  return (
    <div style={{
      border: '1px solid var(--border-color)',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: '#ffffff',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {props.code}
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {props.credits} Credits
        </span>
      </div>

      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>
        {props.title}
      </h4>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
        {props.description}
      </p>

      <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px dashed var(--border-color)', fontSize: '0.85rem', color: '#475569' }}>
        Instructor: <strong>{props.instructor}</strong>
      </div>
    </div>
  );
}

export default CourseCard;
