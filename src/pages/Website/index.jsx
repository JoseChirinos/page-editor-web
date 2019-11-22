import React, { useContext, useState, useEffect} from 'react'
/* Components */
import Navigator from '../../components/Navigator'
import Loading from '../../common/loading'

/* Data */
import PageHttp from '../@data/page-http'
/* Context */
import { UserContext } from '../../context/user-context'
/* Render */
import { ComponentsRender } from './components'

const Website = ()=> {
  const user = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const [website, setWebsite] = useState({})
  const [orderWeb, setOrderWeb] = useState([])

  useEffect( ()=>{
    if(loading && Object.entries(website).length === 0){
      PageHttp.getNow(
        (data)=>{
          console.log(data)
          setWebsite(JSON.parse(data.result.context))
          setOrderWeb(JSON.parse(data.result.context_order))
          setLoading(false)
        },
        (error)=>{
          console.log(error)
        }
      )
    }
  },[loading, setLoading, website, setWebsite])
  console.log(orderWeb,website)
  return (
    <div className="App">
      {
        Object.entries(user).length>0 &&
        <Navigator />
      }

      {
        loading ?
        <Loading/>
        :
        <div>
          {
            orderWeb.map( (el)=>(
              <div key={el}>
                {
                  ComponentsRender[website[el].component](website[el].props, el)
                }
              </div>
            ))
          }
        </div>
      }

      {/* <Header
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
          bgUrl='/assets/images/bg-fundamental.jpg'
        />
        <DetailVideo
            title='Perfil de un Ingeniero Informático'
            content='Online video and Youtube particularly is now more popular than cable television. Mobirise provides a support for YouTube and Vimeo that allow you to liven up your sites.'
            videoPosition='right'
            videoUrl='/assets/video/¿Qué hace un Ingeniero Informático.mp4'
        />
        <Detail
          title='¿Por qué es tan importante la Informática en la actualidad?'
          content='La informática se convirtió en una herramienta indispensable para la persona ya que esta se encuentra en todo lo que nos rodea.'
          imagePosition='right'
          bgUrl='/assets/images/macnight.jpg'
        />
      </Carousel>
      <CarouselImage>
        <img src='/assets/images/carousel/c1.jpg' alt=''/>
        <img src='/assets/images/carousel/c2.jpg' alt=''/>
        <img src='/assets/images/carousel/c3.jpg' alt=''/>
        <img src='/assets/images/carousel/c4.jpg' alt=''/>
        <img src='/assets/images/carousel/c5.jpg' alt=''/>
        <img src='/assets/images/carousel/c6.jpg' alt=''/>
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
      /> */}
    </div>
  );
}

export default Website
