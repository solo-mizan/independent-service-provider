import React from "react";
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-white footer-div">
      <MDBContainer className="">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://facebook.com/solo.mizan/"
            target="_blank"
            rel="noreferrer"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <MDBIcon fab className="fab fa-facebook-f" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 disabled"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <MDBIcon fab className="fa-twitter" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 disabled"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <MDBIcon fab className="fa-google" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 disabled"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <MDBIcon fab className="fa-instagram" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 disabled"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <MDBIcon fab className="fa-linkedin" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/solo-mizan/"
            target="_blank"
            rel="noreferrer"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <MDBIcon fab className="fa-github" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 - 2024<span> - </span>
        <a className="text-dark" href="https://github.com/solo.mizan">
          Miki & Mitu Skincare LTD.
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
