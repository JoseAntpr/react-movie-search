import React, { Component } from 'react';

// CSS
import './App.css';
import 'bulma/css/bulma.css';

// Pages
import { Detail } from './pages/Detail';
import { Home } from './pages/home';

class App extends Component {

  render() {
    const url = new URL(document.location);
    const Page = url.searchParams.has('id')
      ? <Detail id={url.searchParams.get('id')}/>
      :  <Home />

    return (
      <div className="App">
        { Page }
      </div>
    );
  }
}

export default App;
