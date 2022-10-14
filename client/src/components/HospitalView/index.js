import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';

import Auth from '../../utils/auth';

const FirstHospital = () => {
  const [formState, setFormState] = useState({ review: '', author: '' });
  const [review, { error, data }] = useMutation(ADD_REVIEW);

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
      const { data } = await review({
        variables: { ...formState },
      });

      Auth.review(data.review.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      review: '',
      author: '',
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
          value={formState.review}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Author of this Glowing Review"
          name="author"
          type="text"
          value={formState.author}
          onChange={handleChange}
        />
        <input
          name="rating"
          type="radio"
          value= "1"
        /> 1 <br/>
        <input
          name="rating"
          type="radio"
          value= "2"
        /> 2 <br/>
        <input
          name="rating"
          type="radio"
          value= "3"
        /> 3 <br/>
        <input
          name="rating"
          type="radio"
          value= "4"
        /> 4 <br/>
        <input
          name="rating"
          type="radio"
          value= "5"
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