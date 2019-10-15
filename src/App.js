import React from 'react'
/* Components Testing */
import Header from './components/Header'
import Navigator from './components/Navigator'
import Detail from './components/Detail'
import DetailSimple from './components/Detail/Simple'
import Carousel from './components/Carousel'
import CarouselImage from './components/Carousel/Image'
import Post from './components/Post'

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
      // bgColor="#000"
      />
      <DetailSimple
        title='Los 4 Pilares fundamentales de la Informática'
        content='A continuación...'
        bgUrl='/assets/images/bg-fundamental.jpg'
      />
      <Detail
        title='¿Por qué es tan importante la Informática en la actualidad?'
        content='La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea.'
        imagePosition='right'
        bgUrl='/assets/images/macnight.jpg'
      />
      <Carousel>
        <DetailSimple
          title='Los 4 Pilares fundamentales de la Informática'
          content='A continuación...'
          bgUrl='/assets/images/bg-fundamental.jpg'
        />
        <Detail
          title='¿Por qué es tan importante la Informática en la actualidad?'
          content='La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea.'
          imagePosition='right'
          bgUrl='/assets/images/macnight.jpg'
        />
      </Carousel>
      <CarouselImage>
        <img src='/assets/images/carousel/c1.jpg' />
        <img src='/assets/images/carousel/c2.jpg' />
        <img src='/assets/images/carousel/c3.jpg' />
        <img src='/assets/images/carousel/c4.jpg' />
        <img src='/assets/images/carousel/c5.jpg' />
        <img src='/assets/images/carousel/c6.jpg' />
      </CarouselImage>
      <Post />
    </div>
  );
}

export default App;
