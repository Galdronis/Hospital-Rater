import React from 'react';
import { QUERY_HOSPITALS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ReviewBody from '../ReviewBodies';
import ReviewForm from '../ReviewForm';


import Auth from '../../utils/auth';

const FirstHospital = () => {
  const { id } = useParams();
  

  const { data } = useQuery(QUERY_HOSPITALS);

  let hospitalName = ""
  let hospitalLocation = ""
  let hospitalReviews = []
  let hospitalId = ""
  if (data) {


    hospitalReviews = data.hospital[id].reviews
    hospitalLocation = data.hospital[id].location
    hospitalName = data.hospital[id].hospitalName
    hospitalId = data.hospital[id]._id
    
  }
  // console.log(hospitalReviews[0].hospitalRating)
  let something1 = 0
  const something = (input) => {
    for (let i = 0; i < input.length; i++) {
      something1 = something1 + input[i].hospitalRating
    }

    return (something1/input.length)
  }
  

  return (
    <div>
      <h2>{hospitalName}</h2>
      <h3>{hospitalLocation}</h3>
      <h4>Hospital Average Rating: {something(hospitalReviews)}</h4>
      <h5>Reviews</h5>
      <div>{hospitalReviews.map((SubmittedReviews) => (
        <ReviewBody
          key={SubmittedReviews._id}
          _id={SubmittedReviews._id}
          reviewAuthor={SubmittedReviews.reviewAuthor}
          reviewText={SubmittedReviews.reviewText}
          hospitalRating={SubmittedReviews.hospitalRating}
        />
      ))}</div>
      <h4>Add a Review</h4>
      <div><ReviewForm hospitalId={hospitalId} /></div>

    </div>
  );
};

export default FirstHospital;