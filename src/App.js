import React, { Component } from 'react';
import logo from './logo.svg';
import { Nav, NavItem, NavDropdown, Navbar, MenuItem } from 'react-bootstrap';
import './main.css';
import fondo from './triangle_pattern.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


const Angle = ({ direccion }) => {
  const mesures = { top_left: '0, 200 0, 0 200, 0', bottom_left: '200, 200 0, 200 0, 0', bottom_right: '200, 0 200, 200 0, 200' }
  return (
    <div className={'angle_' + direccion}>
      <svg viewBox='0 0 200 200' preserveAspectRatio='none'>
        <polygon points={mesures[direccion]}></polygon>
      </svg>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className='outer-container' id='intro'>
          <div className='color-wrapper'>
            <div className='inner-container'>
              <article>
                <h1>MELANIE OCHARAN</h1>
                <p>Front-end Developer Jr.</p>
                <p>Pasión por la Programación. Estudiante de Laboratoria.</p>
                <a href='#' className='button white '>About Me</a>
                <a href='#' className='button white '>Contact</a>
              </article>
            </div>
            <Angle direccion='bottom_left' />
          </div>
        </section>
        <section className='outer-container' id='portfolio'>
          <div className='inner-container'>
            <h2>Portafolio</h2>
          </div>
        </section>
        <section className='outer-container' id='about'>
          <div className='color-wrapper'>
            <Angle direccion='top_left' />
            <div className='inner-container'>
              <h2>About Me</h2>
            </div>
            <Angle direccion='bottom_left' />
          </div>
        </section>
        <section className='outer-container' id='stats'>
          <div className='inner-container'>
            <h2>Conocimientos</h2>
          </div>
          <Angle direccion='bottom_right' />
        </section>
        <section className='outer-container' id='twitter'>
          <div className='inner-container'>

          </div>
          <Angle direccion='bottom_right' />
        </section>
        <section className='outer-container' id='intagram'>
          <div className='inner-container'>

          </div>
        </section>
        <section className='outer-container' id='clients'>
          <div className='color-wrapper' >
            <Angle direccion='top_left' />
            <div className='inner-container'>
              <h2>Clientes</h2>
            </div>
            <Angle direccion='bottom_left' />
          </div>
        </section>
        <footer id='footer'>
          <div className='inner-container'>

          </div>
        </footer>
      </div>
    );
  }
}

export default App;
