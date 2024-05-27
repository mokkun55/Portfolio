import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  return (
    <div className="contact">
      <h1 className="title">
        {"<"}CONTACT/{">"}
        <div className="contacts">
          <a
            href="https://x.com/mo_okkun"
            target="_blank"
            rel="noreferrer"
            className="contact-box"
          >
            <TwitterIcon></TwitterIcon>
            <div className="text">
              <h1>Twitter</h1>
              <p>@mo_okkun</p>
            </div>
          </a>

          <div className="contact-box">
            <EmailIcon></EmailIcon>
            <div className="text">
              <h1>Email</h1>
              <p>mokkunpc@gmail.com</p>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Contact;
