import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import topBeautyText from '../assets/topBeautyText.png';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <Navbar className={styles.navbar} expand="lg">
      {/* <Container className={styles.container}> */}
      <Navbar.Brand className={styles.brand}>
        <Link to="/" style={{ margin: 0, padding: 0 }}>
          <img src={topBeautyText} alt="Top Beauty" className={styles.logo} />
        </Link>
      </Navbar.Brand>

      <div
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-end',
          textAlign: 'right',
        }}
      >
        <Link style={{ color: 'var(--lipstick-red)' }} to="/myCart">
          <i className="fas fa-shopping-cart"></i>&nbsp;
          <span>0</span>
        </Link>
        &nbsp;&nbsp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/brands">Shop By Brand</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      {/* </Container> */}
    </Navbar>
  );
}
