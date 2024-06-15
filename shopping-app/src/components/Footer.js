import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4">
              <h5>Company Name</h5>
              <p>
                1234 Street Name <br />
                City, State, 12345
              </p>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            {/* Quick Links */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled social-media">
                <li>
                  <a href="#facebook">Facebook</a>
                </li>
                <li>
                  <a href="#twitter">Twitter</a>
                </li>
                <li>
                  <a href="#instagram">Instagram</a>
                </li>
                <li>
                  <a href="#linkedin">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>&copy; 2024 Company Name. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
