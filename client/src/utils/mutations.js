import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($username: String, $email: String, $password: String) {
createUser(username: $username, email: $email, password: $password) {
 username
 email
 password
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
