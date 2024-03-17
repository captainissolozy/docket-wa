// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="kanit-reg"><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
