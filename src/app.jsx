import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import Home from './components/home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container row main">
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));