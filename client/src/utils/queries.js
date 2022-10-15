import { gql } from '@apollo/client';

export const QUERY_HOSPITALS = gql`
query Query {
  hospital {
    _id
    hospitalName
    location
    reviews {
      _id
      reviewAuthor
      reviewText
      hospitalRating
    }
  }
}
`;
