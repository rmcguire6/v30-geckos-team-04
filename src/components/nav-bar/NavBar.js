import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

const NavBar = props => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          <NavLink exact to="/" className={styles.navLogo}>
            Clean the Air
          </NavLink>

          <ul
            className={
              click ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
            }
          >
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/mission"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                Mission Statement
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/about"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                About Air Quality
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/region"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                Region
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/resources"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                Resources
              </NavLink>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
