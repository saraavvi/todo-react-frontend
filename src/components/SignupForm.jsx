import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../api/Api';

const SignupForm = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const signupData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    };
    Api.signup(signupData).then((res) => {
      if (res.data.token) {
        localStorage.setItem('jwt', res.data.token);
        history.push('/lists');
        setShowModal(false);
      } else window.alert('Error in signing up. Please try again.');
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <h2>Sign Up:</h2>
      </div>
      <div>
        <label htmlFor="signupName">Name</label>
        <input
          type="name"
          autoComplete="name"
          id="signupName"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="signupEmail">Email address</label>
        <input
          type="email"
          autoComplete="email"
          id="signupEmail"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="signupPassword">Password</label>
        <input
          type="password"
          autoComplete="password"
          id="signupPassword"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="signupPasswordConfirm">Confirm your password</label>
        <input
          type="passwordConfirm"
          autoComplete="passwordConfirm"
          id="signupPasswordConfirm"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <input type="submit" value="Sign Up" />
      </div>
    </form>
  );
};

export default SignupForm;
