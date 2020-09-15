import React from 'react';
import Sort from './components/Sort';
import List from './components/List';
import Current from './components/Current';
import { getAllFonts } from './services/gfonts';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fonts: [],
      currentFont: 0
    }
  }

  componentDidMount = async () => {
    const fonts = await getAllFonts();
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

  render() {
    return (
      <div className="App">
        <Sort />
        <List
          fonts={this.state.fonts}
          changeCurrentFont={this.changeCurrentFont}
        />
        <Current
          font={this.state.fonts[this.state.currentFont]}
        />
      </div>
    );
  }
}

export default App;
