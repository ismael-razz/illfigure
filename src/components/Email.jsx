import React from 'react';

function Email() {
  const mail = 'irazzaque@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${mail}`;
  };

  return (
    <button onClick={handleEmailClick} className="email-button">
      HIT ME UP
    </button>
  );
}

export default Email;
