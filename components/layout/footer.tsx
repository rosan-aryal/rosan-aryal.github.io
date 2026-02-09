import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-6xl mx-auto">
        <div className="footer-logo">
          <h2>
            Roshan Aryal
            <br />
          </h2>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ marginBottom: "20px" }}>
            <Link
              href="#"
              style={{
                color: "var(--text-primary)",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              TWITTER
            </Link>
            <Link
              href="#"
              style={{
                color: "var(--text-primary)",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              GITHUB
            </Link>
            <Link
              href="#"
              style={{
                color: "var(--text-primary)",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              LINKEDIN
            </Link>
          </div>
          <p className="copyright">ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
