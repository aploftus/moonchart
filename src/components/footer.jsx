import React from 'react';
import ReactDOM from 'react-dom';

import github from '../img/github.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer row justify-content-center">
        <a href="http://www.github.com/aploftus">
          <img className="icon" src={github} alt="www.github.com/aploftus" height="50px" />
        </a>
      </footer>
    );
  }
}

export default Footer;