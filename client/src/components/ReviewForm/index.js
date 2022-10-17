import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const ReviewForm = ({ hospitalId }) => {
  const [reviewText, setReviewText] = useState('');
 const [hospitalRating, setHospitalRating] = useState('');
  const [addReview, { error }] = useMutation(ADD_REVIEW);



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          hospitalId,
          reviewText,
          reviewAuthor: Auth.getProfile().data.username,
          hospitalRating
        },
      });

      setReviewText('');
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target; 
    setReviewText(value);    
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    Number(value)
    setHospitalRating(Number(value));   
    console.log(typeof Number(value))
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Your text here..."
          name="review"
          type="text"
          value={reviewText}
          onChange={handleChange}
        />
        <input
          name="hospitalRating"
          type="radio"
          value="1"
          onChange={handleChange2}
        /> 1 <br />
        <input
          name="hospitalRating"
          type="radio"
          value="2"
          onChange={handleChange2}
        /> 2 <br />
        <input
          name="hospitalRating"
          type="radio"
          value="3"
          onChange={handleChange2}
        /> 3 <br />
        <input
          name="hospitalRating"
          type="radio"
          value="4"
          onChange={handleChange2}
        /> 4 <br />
        <input
          name="hospitalRating"
          type="radio"
          value="5"
          onChange={handleChange2}
        /> 5 <br />
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

export default ReviewForm;