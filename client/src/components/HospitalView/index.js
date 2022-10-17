import React from 'react';
import { QUERY_HOSPITALS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ReviewBody from '../ReviewBodies';
import ReviewForm from '../ReviewForm';


import Auth from '../../utils/auth';

const FirstHospital = () => {
  const { id } = useParams();
  if (id) {
    console.log(id)
  }

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
  


  return (
    <div>
      <h2>{hospitalName}</h2>
      <h3>{hospitalLocation}</h3>
      <h4>Rating: 7 stars</h4>
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