import React from 'react';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'

class App extends React.Component {
  render() {
    return  (
      <Navbar>
        <NavItem icon="😊"></NavItem>
        <NavItem icon="😊"></NavItem>
        <NavItem icon="😊"></NavItem>
      </Navbar>
    )
  }
}

export default App;
