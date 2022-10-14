import React from 'react';

import '../css/feed.css'

const feed = () => {
  return (
  <div className='flex'>
    <div className="card thin">
  <div className="card-body">
    <h5 className="card-title">Children's Hospital</h5>
    <h6 className="card-subtitle mb-2 text-muted">700 Children's Dr, Columbus, Ohio</h6>
    <a href="/feed/firstHospital" className="card-link">reviews</a>
  </div>
</div>
  
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

export default feed;