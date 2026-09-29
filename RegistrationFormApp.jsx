import React, { useState } from 'react';

function RegistrationFormApp() {
  const [formData, setFormData] = useState({
    fullName: 'Kunal Mehta',
    email: 'kunal.mehta@example.com',
    password: 'password123',
    confirmPassword: 'password123'
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Registration successful!');
    }
  };

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto' }}>
      {successMessage && (
        <div className="success-box" style={{ marginBottom: '20px', textAlign: 'center' }}>
          🎉 <strong>{successMessage}</strong> Welcome, {formData.fullName}.
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
          Registration Form
        </h3>

        <div className="form-group">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="kunal.mehta@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationFormApp;
