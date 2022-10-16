import React from 'react';
import {
  useQuery
} from '@apollo/client';
import { QUERY_HOSPITALS } from '../utils/queries';
import '../css/feed.css'


function Feed() {

  const {data} = useQuery(QUERY_HOSPITALS)

  console.log(data)

  return (
  <div className='flex'>
    <div className="card thin">
  <div className="card-body">
    <h5 className="card-title">Children's Hospital</h5>
    <h6 className="card-subtitle mb-2 text-muted">700 Children's Dr, Columbus, Ohio</h6>
    <a href="/feed/firstHospital" className="card-link">reviews</a>
  </div>
</div>
</div>
  );
};

export default Feed;