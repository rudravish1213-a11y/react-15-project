import React from 'react';

// Child Component that receives user information via props
function ProfileCard(props) {
  return (
    <div style={{
      border: '1px solid var(--border-color)',
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: '#ffffff',
      boxShadow: 'var(--shadow-sm)',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          fontWeight: 'bold'
        }}>
          {props.name ? props.name.charAt(0) : 'U'}
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>{props.name}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600', margin: 0 }}>{props.course}</p>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '12px 0' }} />

      <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Course:</strong> {props.course}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
