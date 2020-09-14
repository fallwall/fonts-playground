import React from 'react';
import { getFonts } from './services/gfonts';
import './App.css';

class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      fonts: []
    }
  }
  componentDidMount= async()=> {
    const fonts = await getFonts();
    this.setState({
      fonts
    })
    console.log(fonts);
  }
  
  render() {
    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;
