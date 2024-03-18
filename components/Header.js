// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div id="header" className="wrap_header">
          <div className="img_logo"><img src="/images/docket_logo.svg" width="100" height="45"/></div>
          <div className="wrap_menu">
            <div className="menu_item active">Docket Data</div>
            <div className="menu_item">Member List</div>
            <div className="menu_item">Master Data</div>
          </div>
          <div className="wrap_profile">
            <div className="profile_head">
              <div className="profile_logo"><span className="prf_char">J</span></div>
              <div className="profile_info">
                <div className="profile_name kanit-med">Jay Hargudson</div>
                <div className="profile_position">Manager</div>
              </div>
              <div className="icon-db"></div>
            </div>
            <div className="profile_menu">
              <div className="wrap_container">
                <div className="pf_item"><span className="pf_icon profile"></span>My Profile</div>
                <div className="pf_item"><span className="pf_icon logout"></span>Log out</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
