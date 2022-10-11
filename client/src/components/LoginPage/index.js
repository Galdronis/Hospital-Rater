import React from 'react'

function Login() {
    return (
        <div>
    <form>
        <label for="user-name">Username:</label>
        <input type="text" id="user-name" />
        <label for="user-password">Password:</label>
        <input type="password" id="user-password" />
        <input type="submit" id="postFormSubmit" name="formSubmit" value="Submit"/>
    </form>
    <p>Not a User?</p>
    <a href="/create">Click Here to Create an Account!</a>
        </div>
    )
}

export default Login