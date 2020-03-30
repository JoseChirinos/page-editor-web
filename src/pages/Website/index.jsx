import React, { useContext, useState, useEffect} from 'react'
/* Components */
import Navigator from '../../components/Navigator'
import LoadPage from '../../common/loadpage'
import Detail from '../../components/Detail'

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
          if(data.status){
            setWebsite(JSON.parse(data.result.context))
            setOrderWeb(JSON.parse(data.result.context_order))
          }
          setLoading(false)
        },
        (error)=>{
          console.log(error)
        }
      )
    }
  },[loading, setLoading, website, setWebsite])

  return (
    <div className="App">
      {
        Object.entries(user).length>0 &&
        <Navigator />
      }

      {
        loading ?
        <LoadPage/>
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
      {
        !loading && orderWeb.length === 0 &&
        <Detail
          title='Hello World'
          content='Ingresa y edita tu página web.'
          imageUrl='/assets/images/computer-science.png'
          imagePosition='left'
          imageSource="local"
          bgColor="#000"
          linkAction="/login"
          linkLabel="Empezar"
        />
      }
    </div>
  );
}

export default Website
