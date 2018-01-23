import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tab.jsx';

// import logo from '../img/logo-white.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <span className="tabs row justify-content-end">
          <Tab title={'HOME'} />
        </span>
      </div>
    );
  }
}

export default Header;