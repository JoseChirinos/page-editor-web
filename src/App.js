import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
/* Components Testing */
import Header from './components/Header'
import Navigator from './components/Navigator'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Navigator />
        <Header />
        <Detail />
      </ParallaxProvider>
    </div>
  );
}

export default App;
