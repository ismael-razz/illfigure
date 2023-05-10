import React from 'react';

function Email() {
  const mail = 'irazzaque@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${mail}`;
  };

  return (
    <>
    <button onClick={handleEmailClick} className="email-button">
      YERRRR
    </button>
    
    <p style={{textAlign:'center', marginTop:'2%', marginBottom: '-100px'}}><span style={{fontSize: '80px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: 'white'}}>CATCH ME IN NY</span></p>
</>
  );
}

export default Email;
