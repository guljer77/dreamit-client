import React from 'react';
import './common.css';
import Container from '../Container';
import { Link } from 'react-router-dom';

function CommonBanner({heading}) {
  return (
    <div className='common-bg'>
      <Container>
        <div className='w-full h-[70vh] flex items-center justify-center'>
          <div className='text-white text-center'>
            <h6 className='text-[42px] font-semibold py-3'>{heading}</h6>
            <p className='flex items-center justify-center space-x-3'><Link to="/" className='text-primary pr-3'>Home</Link> / <span>{heading}</span></p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CommonBanner