import React, { useState, useEffect } from 'react';

// List of Indian names to map onto the API response items
const indianNames = [
  "Aarav Sharma",
  "Rohan Patil",
  "Aditya Shah",
  "Kunal Mehta",
  "Arjun Desai",
  "Vivaan Joshi",
  "Ishaan Shah",
  "Rahul Mehta",
  "Yash Patil",
  "Dev Malhotra"
];

function ApiFetchApp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from public API endpoint
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data from API');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3 style={{ marginBottom: '20px', color: 'var(--text-main)', textAlign: 'center' }}>
        Public API User Directory (JSONPlaceholder)
      </h3>

      {/* Loading state message */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '30px' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>
            ⏳ Loading user data from API...
          </p>
        </div>
      )}

      {/* Error handling state */}
      {error && (
        <div style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fca5a5',
          color: '#b91c1c',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          ❌ Error: {error}
        </div>
      )}

      {/* Display fetched users using map() with Indian names mapped by index */}
      {!loading && !error && (
        <div className="grid-2">
          {users.map((user, index) => {
            const displayName = indianNames[index] || user.name;
            return (
              <div
                key={user.id}
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '18px 22px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                  {displayName}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ApiFetchApp;
