import React, { useState, useEffect, useContext } from 'react'

/* Components */
import { Parallax } from 'react-parallax'
import PostCard from './PostCard'
import { PostListWrapper, PostWrapper, PreviewTitle } from './style'
import { Typography } from '@rmwc/typography'
import Loading from '../../common/loading'
import Navigator from '../../components/Navigator'

/* Data */
import PostHttp from '../../pages/@data/post-http'
/* Context */
import { UserContext } from '../../context/user-context'

const PostList = (props)=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const user = useContext(UserContext)

    useEffect(()=>{
        if(loading){
            PostHttp.getAll((data)=>{
                if(data.status){
                    setData(data.result)
                }
                setLoading(false)
            },
            (error)=>{
                console.log(error)
            })
        }
    },[setData, setLoading, loading])
    useEffect(() => {
        return () => {
          PostHttp.cancel()
        }
      }, [])
    return (
        <div>
            {
                Object.entries(user).length > 0 &&
                <Navigator />
            }
            <PostListWrapper>
                <Parallax
                    bgImage="/assets/images/bg-login-oficial.jpg"
                    strength={-300}
                    style={{
                        width: '100%',
                        height: 400
                    }}
                >
                    <PreviewTitle>
                        <aside>
                            <Typography 
                                use="headline4"
                                style={{
                                    fontFamily: `'Sarala', sans-serif`,
                                    color: `#fff`,
                                    textShadow: `1px 2px 1px #000`,
                                }}
                            >
                                Lista de Posts
                            </Typography>
                            <div/>
                        </aside>
                    </PreviewTitle>
                </Parallax>
                {
                    loading ?
                    <Loading/>
                    :
                    <PostWrapper>
                        {
                            data.map( post=>(
                                <PostCard
                                    key={post.idPost}
                                    idPost={post.idPost}
                                    title={post.title}
                                    author={`${post.first_name} ${post.last_name}`}
                                    contentMin={post.summary}
                                    imageUrl={post.urlImage}
                                    posted={post.data_start}
                                    urlPath={`/posts`}
                                />
                            ))
                        }
                    </PostWrapper>
                }
                {
                    data.length === 0 && !loading &&
                    <Typography 
                        use="headline6"
                        style={{
                            color: `#000`,
                            textAlign: 'center',
                        }}
                    >
                        Aún no hay Posts
                    </Typography>
                }
            </PostListWrapper>
        </div>
    )
}

export default PostList
