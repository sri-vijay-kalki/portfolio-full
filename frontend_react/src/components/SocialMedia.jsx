import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div className="app__hyperlinks">
      <a href="https://github.com/sri-vijay-kalki" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    <div className="app__hyperlinks">
      <a href="https://www.linkedin.com/in/srivijaykalki/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div  className="app__hyperlinks">
      <a href="https://www.instagram.com/sri_vj_kalki/" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
