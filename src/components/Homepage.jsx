import React from 'react';
import AVBG from '../assets/AVBG.gif';

function Homepage() {
    return (
      <div classname="">
        <div className="bg-gray-400 bg-blend-soft-light bg-center"
        style={{
            backgroundImage: `${AVBG}`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
        >


        </div>
      </div>
    )
  
}
export default Homepage