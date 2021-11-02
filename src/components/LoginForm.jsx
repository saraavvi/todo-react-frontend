import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../api/Api';
import classes from './Form.module.css';

const LoginForm = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: formData.email,
      password: formData.password,
    };
    Api.login(loginData).then((res) => {
      if (res.data.token) {
        localStorage.setItem('jwt', res.data.token);
        history.push('/lists');
        setShowModal(false);
      } else window.alert('Invalid email or password. Please try again.');
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <h2>Log In:</h2>
      </div>
      <div className={classes.control}>
        <label htmlFor="loginEmail">Email address</label>
        <input
          type="email"
          autoComplete="email"
          id="loginEmail"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          autoComplete="password"
          id="loginPassword"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
      </div>
      <div className={classes.actions}>
        <input type="submit" value="Log In" className="btn btn_small" />
      </div>
    </form>
  );
};

export default LoginForm;
