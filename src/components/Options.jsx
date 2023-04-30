import React from 'react';

function Options() {
  const tabs = [
    {
      id: 1,
      title: 'Gallery',
      url: 'https://docs.google.com/presentation/d/1vY1KUCMicyjJ4jVY56kaOtjhOaFYCLZqCynN4muTNVA/edit?usp=sharing',
    },
    {
      id: 2,
      title: 'UX/UI',
      url: 'https://docs.google.com/presentation/d/17j5QQc8b1xvgg2mJ74FsqKLe79I07I-l0E5m1dMgl6c/edit?usp=sharing',
    },
    {
      id: 3,
      title: 'About',
      url: 'https://docs.google.com/presentation/d/1jnL6jYSoKs7ow9bMJqabfQFGyA7U7i7i9tsvsSn9rus/edit?usp=sharing',
    },
  ];

  return (
    <div>
      {tabs.map((tab) => (
        <a key={tab.id} href={tab.url} target="_blank" rel="noopener noreferrer" className="button-link-tab">
          {tab.title}
        </a>
      ))}
    </div>
  );
}

export default Options;
