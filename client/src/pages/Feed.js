import React from 'react';
import {
  useQuery
} from '@apollo/client';
import { QUERY_HOSPITALS } from '../utils/queries';
import '../css/feed.css'
import { Link } from "react-router-dom";


function Feed() {
  let hospitalName = []
  let hospitalLocation = []
  const {data} = useQuery(QUERY_HOSPITALS)
  if (data)
  for (let i = 0; i < data.hospital.length; i++) {
  
    if (data) {
      console.log(data)
      hospitalLocation[i] = data.hospital[i].location
      hospitalName[i] = data.hospital[i].hospitalName
    }
}

  return (
  <div className='flex'>
  <div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[0]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[0]}</h6>
    <Link to="/feed/firstHospital/0"><p className="card-link">reviews</p></Link>
  </div>
  </div>
  <div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[1]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[1]}</h6>
      <a href="/feed/firstHospital/1" className="card-link">reviews</a>
    </div>
  </div>
  <div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[2]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[2]}</h6>
    <a href="/feed/firstHospital/2" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[3]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[3]}</h6>
    <a href="/feed/firstHospital/3" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[4]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[4]}</h6>
    <a href="/feed/firstHospital/4" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[5]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[5]}</h6>
    <a href="/feed/firstHospital/5" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[6]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[6]}</h6>
    <a href="/feed/firstHospital/6" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[7]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[7]}</h6>
    <a href="/feed/firstHospital/7" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[8]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[8]}</h6>
    <a href="/feed/firstHospital/8" className="card-link">reviews</a>
  </div>
</div>
<div className="card thin">
  <div className="card-body">
    <h5 className="card-title">{hospitalName[9]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{hospitalLocation[9]}</h6>
    <a href="/feed/firstHospital/9" className="card-link">reviews</a>
  </div>
</div>
</div>
  )};


export default Feed;