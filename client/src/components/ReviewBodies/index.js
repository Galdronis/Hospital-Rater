import React from "react";

function ReviewBody(review1) {
  const {
    reviewAuthor,
    reviewText,
    _id,
    hospitalRating
  } = review1;

  return (
    <div className="card thin">
      <div className="card-body">
        <h5 className="card-title">Review Author: {reviewAuthor}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{reviewText}</h6>
        <p>Rating: {hospitalRating}</p>
      </div>
    </div>
  );
}

export default ReviewBody;
