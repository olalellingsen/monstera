import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className='contact-info'>
        <p>
        Ola Lømo Ellingsen <br />
        ola.l.ellingsen@gmail.com <br />
        +47 90 19 73 81
        </p>
      </div>


      <a className='fjordgata-logo' href="https://www.fjordgatarecords.com/">
      <img src="fjordgata.png" alt="fjordgata" />
      </a>

    </footer>
  );
};

export default Footer;
