import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import tree from "./images/Rectangle 5.png";
import house from "./images/Rectangle 6.png";
import car from "./images/Rectangle 5 (1).png";
import people1 from "./images/Rectangle 3 (1).png";
import people2 from "./images/Rectangle 4.png";
import people3 from "./images/Rectangle 7.png";
import people4 from "./images/Rectangle 3 (2).png";

const Home = () => {
  return (
    <div className='mx-5'>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>All posts(32)</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Article</Nav.Link>
              <Nav.Link>Event</Nav.Link>
              <Nav.Link>Education</Nav.Link>
              <Nav.Link>Job</Nav.Link>

            </Nav>
            <Nav>
              <NavDropdown className='px-2 rounded bg-light' title="Write a post" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='px-2 ml-1 rounded bg-primary text-white'>Join Group</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className='mx-5' />
      <div>
        <div className='row'>
          <div className='mx-5 col-12 col-lg-6 justify-content-between'>
            <div className='border rounded'>
              <img className='cover img-fluid' src={tree} alt="" />
              <div className='px-2'>
                <h5 className='m-3'>Aticle</h5>
                <h4>What if famous brands had regular fonts? Meet <br /> RegulaBrands!</h4>
                <p><small>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</small></p>
              </div>
              <div className='d-flex align-items-center justify-content-between p-2'>
                <div className='d-flex align-items-center'>
                  <img src={people1} alt="" />
                  <h5 className='mx-2'>Sarthak Kamra</h5>
                </div>
                <div>
                  <p className='mx-3'><small>1.4k views</small></p>
                </div>
              </div>
            </div>
            <div className='border rounded mt-3'>
              <img className='cover img-fluid' src={house} alt="" />
              <div className='px-2'>
                <h5 className='m-3'>🔬️ Education</h5>
                <h4>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h4>
                <p><small>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</small></p>
              </div>
              <div className='d-flex align-items-center justify-content-between p-2'>
                <div className='d-flex align-items-center'>
                  <img src={people2} alt="" />
                  <h5 className='mx-2'>Sarah West</h5>
                </div>
                <div>
                  <p className='mx-3'><small>1.4k views</small></p>
                </div>
              </div>
            </div>
            <div className='border rounded mt-3'>
              <img className='cover img-fluid' src={car} alt="" />
              <div className='px-2'>
                <h5 className='m-3'>🗓️ Meetup</h5>
                <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                <div className='d-flex'>
                  <h6>Fri, 12 Oct, 2018</h6>
                  <h6 className='ms-5'>Ahmedabad, India</h6>
                </div>
                <button className='w-100 my-2 text-danger border rounded p-1'>Visit Website</button>
              </div>
              <div className='d-flex align-items-center justify-content-between p-2'>
                <div className='d-flex align-items-center'>
                  <img src={people3} alt="" />
                  <h5 className='mx-2'>Ronal Jones</h5>
                </div>
                <div>
                  <p className='mx-3'><small>1.4k views</small></p>
                </div>
              </div>
            </div>
            <div className='border rounded mt-3 py-4 px-2'>
              <h6>💼️ Job</h6>
              <h4>Software Developer</h4>
              <div className='d-flex'>
                <h6>Innovaccer Analytics Private Ltd.</h6>
                <h6>Noida, India</h6>
              </div>
              <button className='w-100 my-2 text-success border rounded p-1'>Apply on Timesjobs</button>
              <div className='d-flex align-items-center justify-content-between p-2'>
                <div className='d-flex align-items-center'>
                  <img src={people4} alt="" />
                  <h5 className='mx-2'>Ronal Jones</h5>
                </div>
                <div>
                  <p className='mx-3'><small>1.4k views</small></p>
                </div>
              </div>
            </div>
          </div>
          <aside className='mt-5 col-12 col-lg-4'>
            <h6>Noida, India</h6>
            <hr />
            <p><small>Your location will help us serve better <br /> and extend a personalised experience.</small></p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;