import React from 'react';
import ReactLogo from '../images/corona.svg';
function disclaimer() {
  return (
    <div>
      <img src={ReactLogo} className="svgLogo rotate" alt="coronaBL" />
      <div className="container alert alert-danger mt-2" role="alert">
        Disclaimer: All the information collected from different type of
        sources. I will not be liable or responsible in any way if it does not
        match with real data. Data sources:{' '}
        <a
          href="https://covid19.who.int/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          WHO
        </a>
        {', '}
        <a
          href="https://corona.lmao.ninja/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          corona.lmao.ninja
        </a>
        {', '}
        <a
          href="https://www.worldometers.info/"
          target="_blank"
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
        >
          Worldometers.info
        </a>
        {', '}
        <a
          href="https://corona.gov.bd"
          target="_blank"
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
        >
          corona.gov.bd
        </a>
        {', '}
        <a
          href=" https://dghs.gov.bd"
          target="_blank"
          style={{ textDecoration: 'none' }}
          rel="noopener noreferrer"
        >
          dghs.gov.bd
        </a>
      </div>
    </div>
  );
}

export default disclaimer;
