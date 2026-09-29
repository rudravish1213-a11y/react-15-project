import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileCardApp() {
  return (
    <div>
      <h3 style={{ marginBottom: '20px', color: 'var(--text-main)', textAlign: 'center' }}>
        User Profile Details (Props Demo)
      </h3>
      
      {/* Passing props to ProfileCard child component */}
      <ProfileCard
        name="Aarav Sharma"
        age={20}
        email="aarav.sharma@example.com"
        course="T.Y. B.Sc.IT"
      />
    </div>
  );
}

export default ProfileCardApp;
