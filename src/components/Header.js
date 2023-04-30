import React from 'react';


const Header = () => {
  return (
    <header style={{ backgroundColor: '#525252', width: '100%', padding: '.5rem 0'}}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto'}}>
        <img src="./public/logo-white.png" alt="Logo" style={{ height: '50px' }} />
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem'}}>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="#">Preferences</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
