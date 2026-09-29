import React, { useState } from 'react';

function LoginFormApp() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Controlled Component Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field specific error on edit
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation Logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username or Email is required.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto' }}>
      {submitted && (
        <div className="success-box" style={{ marginBottom: '20px' }}>
          ✅ Login Successful! Welcome back, <strong>{formData.username}</strong>.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '28px',
        backgroundColor: '#ffffff',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h3 style={{ marginBottom: '20px', color: 'var(--text-main)', textAlign: 'center' }}>
          Controlled Login Form
        </h3>

        <div className="form-group">
          <label htmlFor="username">Username / Email</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginFormApp;
