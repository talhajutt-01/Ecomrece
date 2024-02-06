import React from 'react';

const Footer = function App() {
  return (
    <footer className='bg-dark text-center text-white rounded mt-auto'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        {(new Date().getFullYear())} Copyright All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
