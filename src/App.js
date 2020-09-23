import React from 'react';
import Nav from './components/Nav';
import List from './components/List';
import Current from './components/Current';
import { getAllFonts } from './services/gfonts';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fonts: [],
      currentFont: 0,
      fontSize: 80
    }
  }

  componentDidMount = async () => {
    const fonts = await getAllFonts(0);
    this.setState({
      fonts
    })
    console.log(this.state.currentFont);
  }

  changeCurrentFont = (i) => {
    this.setState({
      currentFont: i
    })
  }

  changeSorting = async (s) => {
    const fonts = await getAllFonts(s);
    this.setState({
      fonts
    })
  }

  changeFontSize = (v) => {
    this.setState({
      fontSize: v
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="content">
          <List
            fonts={this.state.fonts}
            currentFont={this.state.currentFont}
            changeSorting={this.changeSorting}
            changeCurrentFont={this.changeCurrentFont}
          />
          <Current
            font={this.state.fonts[this.state.currentFont]}
            fontSize={this.state.fontSize}
            changeFontSize={this.changeFontSize}
          />
        </div>

      </div>
    );
  }
}

export default App;
