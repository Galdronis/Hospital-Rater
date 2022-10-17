import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}

`;
export const ADD_PROFILE = gql`
mutation Mutation($username: String, $email: String, $password: String) {
createUser(username: $username, email: $email, password: $password) {
 username
 email
 password
}
}
`;
export const ADD_ = gql`
mutation Mutation($reviewText: String!, $reviewAuthor: String!, $hospitalId: ID, $hospitalRating: Int) {
    addReview(reviewText: $reviewText, reviewAuthor: $reviewAuthor, hospitalId: $hospitalId, hospitalRating: $hospitalRating) {
      _id
      reviews {
        reviewAuthor
        reviewText
        hospitalRating
      }
    }
  }
 `;
