import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
/* Components Testing */
import Header from './components/Header'
import Navigator from './components/Navigator'
import Detail from './components/Detail'
import DetailSimple from './components/Detail/Simple'

function App() {
  return (
    <div className="App">
      <Navigator />
      <Header
        title='Bienvenido a nuestra Página de Ingenieria Informática'
        bgUrl='/assets/images/bg-whois.jpg'
        imageUrl='/assets/images/img-header.png'
      />
      <Detail
        key={1}
        title='En que consiste la carrera de Ingenieria Informática?'
        content='La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.'
        imageUrl='/assets/images/computer-science.png'
        imagePosition='left'
        bgUrl='/assets/images/bg-computer.jpg'
      />
      <Detail
        key={2}
        title='¿Por qué es tan importante la Informática en la actualidad?'
        content='La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea.'
        imagePosition='right'
        bgUrl='/assets/images/macnight.jpg'
      />
      <DetailSimple
        title='Los 4 Pilares fundamentales de la Informática'
        content='A continuación...'
        bgUrl='https://picjumbo.com/wp-content/uploads/black-on-black-things_free_stock_photos_picjumbo_HNCK3562-2210x1473.jpg'
      />
    </div>
  );
}

export default App;
