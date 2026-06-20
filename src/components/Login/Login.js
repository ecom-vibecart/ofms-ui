import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authSlice';
import './Login.css';
import { VIBECART_URI } from '../Services/service';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');
    if (!email) { setEmailError('Email is required'); valid = false; }
    if (!password) { setPasswordError('Password is required'); valid = false; }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setError('');
    setLoading(true);
    try {
      const response = await axios.post(`${VIBECART_URI}/api/v1/vibe-cart/accounts/validate?type=user`, { email, password, role: 'ADMIN' });
      const token = response.data.message || response.data.token || response.data.data?.token;
      if (!token) throw new Error('No token received');
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('email', email);
      dispatch(login());
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <span className="bold">VIBE</span><span>CART</span>
        </div>
        <p className="login-subtitle">Offer Management System</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${emailError ? 'error-highlight' : ''}`}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@vibecart.com"
              autoFocus
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${passwordError ? 'error-highlight' : ''}`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
          {error && <div className="login-error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
