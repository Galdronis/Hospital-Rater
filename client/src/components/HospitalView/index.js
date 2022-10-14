import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const FirstHospital = () => {
  const [formState, setFormState] = useState({ review: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      review: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Children's Hospital</h2>
      <h3>700 Children's Dr, Columbus, Ohio</h3>
      <h4>Rating: 7 stars</h4>
      <h5>Reviews</h5>
      <div>This is where the review goes.</div>
      <h4>Add a Review</h4>
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Your text here..."
          name="review"
          type="text"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="radio"
          value={formState.password}
        /> 1 <br/>
        <input
          name="password"
          type="radio"
          value={formState.password}
        /> 2 <br/>
        <input
          name="password"
          type="radio"
          value={formState.password}
        /> 3 <br/>
        <input
          name="password"
          type="radio"
          value={formState.password}
        /> 4 <br/>
        <input
          name="password"
          type="radio"
          value={formState.password}
        /> 5 <br/>
        <button
          className="btn btn-block btn-info"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Submit
        </button>
      </form>

    </div>
  );
};

export default FirstHospital;