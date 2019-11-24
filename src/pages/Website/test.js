import React from 'react'

/* Components */
import Header from '../../components/Header'
import Detail from '../../components/Detail'
import DetailSimple from '../../components/Detail/Simple'
import DetailVideo from '../../components/Detail/Video'
import Carousel from '../../components/Carousel'
import CarouselImage from '../../components/Carousel/Image'
import Post from '../../components/Post'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Author from '../../components/Author'

const Test = () => (
    <div>
        <Header
            title='Bienvenido a nuestra Página de Ingenieria Informática'
            bgUrl='/website/assets/images/bg-whois.jpg'
            imageUrl='/website/assets/images/img-header.png'
        />
        <Detail
            key={1}
            title='En que consiste la carrera de Ingenieria Informática?'
            content='La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.'
            imageUrl='/website/assets/images/computer-science.png'
            imagePosition='left'
            bgUrl='/website/assets/images/bg-computer.jpg'
        />
        <Detail
            key={2}
            title='¿Por qué es tan importante la Informática en la actualidad?'
            content='La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea.'
            imagePosition='right'
            bgUrl='/website/assets/images/macnight.jpg'
        // bgColor="#000"
        />
        <DetailVideo
            title='Perfil de un Ingeniero Informático'
            content='Online video and Youtube particularly is now more popular than cable television. Mobirise provides a support for YouTube and Vimeo that allow you to liven up your sites.'
            videoPosition='left'
            videoUrl='https://www.youtube.com/watch?v=szby7ZHLnkA'
        />
        <Carousel>
            <DetailSimple
                title='Los 4 Pilares fundamentales de la Informática'
                content='A continuación...'
                bgUrl='/website/assets/images/bg-fundamental.jpg'
            />
            <DetailVideo
                title='Perfil de un Ingeniero Informático'
                content='Online video and Youtube particularly is now more popular than cable television. Mobirise provides a support for YouTube and Vimeo that allow you to liven up your sites.'
                videoPosition='right'
                videoUrl='/website/assets/video/¿Qué hace un Ingeniero Informático.mp4'
            />
            <Detail
                title='¿Por qué es tan importante la Informática en la actualidad?'
                content='La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea.'
                imagePosition='right'
                bgUrl='/website/assets/images/macnight.jpg'
            />
        </Carousel>
        <CarouselImage>
            <img src='/website/assets/images/carousel/c1.jpg' alt='' />
            <img src='/website/assets/images/carousel/c2.jpg' alt='' />
            <img src='/website/assets/images/carousel/c3.jpg' alt='' />
            <img src='/website/assets/images/carousel/c4.jpg' alt='' />
            <img src='/website/assets/images/carousel/c5.jpg' alt='' />
            <img src='/website/assets/images/carousel/c6.jpg' alt='' />
        </CarouselImage>
        <Post />
        <Contact />
        <Footer
            address="Colegio 3 abril, cerca del centro"
            email="jaime@gmail.com"
            cellphone="76895436"
            website="jaimerojas.com"
        />
        <Author
            authorName='Jaime Rojas'
        />
    </div>
)

export default Test
