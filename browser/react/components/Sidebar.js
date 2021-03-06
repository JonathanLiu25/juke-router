import React from 'react';
import { Link } from 'react-router'

const Sidebar = () => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <ul className="sidebar-menu">
          <li>
            <h4 className="menu-item active">
              <Link to='/albums'>ALBUMS</Link>
            </h4>
          </li>
          <li>
            <h4 className="menu-item">
              <Link to='/artists'>ARTISTS</Link>
            </h4>
          </li>
        </ul>
      </section>
    </sidebar>
  );
}

export default Sidebar;
