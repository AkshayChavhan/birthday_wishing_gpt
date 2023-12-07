import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function LandingPage({ source='../../public/1_Celebrations(Bg) - hashtag.png'}) {

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
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