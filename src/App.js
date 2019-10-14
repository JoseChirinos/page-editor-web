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
        {/* <Navigator /> */}
        <Header />
        <Detail
          key={1}
          title="En que consiste la carrera de Ingenieria Informática?"
          content="La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos."
          imageUrl="/assets/images/computer-science.png"
          imagePosition="left"
          bgUrl="/assets/images/bg-computer.jpg"
        />
        {/* <Detail
          key={2}
          title="¿Por qué es tan importante la Informática en la actualidad?"
          content="La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea."
          imagePosition="right"
          bgUrl="/assets/images/macnight.jpg"
        />
        <Detail
          key={3}
          title="¿Por qué es tan importante la Informática en la actualidad?"
          content="La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea."
          imagePosition="right"
          bgUrl="/assets/images/bg-yellow.jpg"
        /> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
