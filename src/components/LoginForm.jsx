import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../api/Api';

const LoginForm = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  function handleOnChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleOnSubmit(e) {
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
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <h2>Log In:</h2>
      </div>
      <div>
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
      <div>
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
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
  );
};

export default LoginForm;
