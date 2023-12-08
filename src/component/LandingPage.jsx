import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMyContext } from './UserDetailContext';


function LandingPage({ source='/1_Celebrations(Bg) - hashtag.png'}) {
  const { updateSequenceStep } = useMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateSequenceStep(1);
      navigate('/register');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='landing_items'>
      <img
      className='image_center'
      src={source}
      alt='landing picture'
      />
    </div>
  )
}

export default LandingPage