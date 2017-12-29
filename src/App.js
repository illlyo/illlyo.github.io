import React, { Component } from 'react';
import Nav from './components/Nav.jsx';
import Particles from 'react-particles-js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
            <Particles
                    params={{
                      particles: {
                        line_linked: {
                          shadow: {
                            enable: true,
                            color: "salmon",
                            blur: 1
                          }
                        }
                      },
                    interactivity: {
                      onhover: "repulse"
                    }
                  }}
            />
        </div>
    )
  }
}

export default App;
