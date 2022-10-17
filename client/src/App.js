import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Login from './pages/Login'
import Home from './pages/Home';
import Signup from './pages/Signup'
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './pages/Feed'
import FirstHospital from './components/HospitalView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './utils/sidebar';
import './css/sidebar.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route
            path='/'
            element={<Home />}
            />
            <Route
            path='/login'
            element={<Login />}
            />
            <Route
            path='/signup'
            element={<Signup />}
            />
            <Route
            path='/feed'
            element={<Feed />}
            />
            <Route
            path='/feed/firstHospital/:id'
            element={<FirstHospital />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
