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
    const [data, setData] = useState([])
    const user = useContext(UserContext)

    useEffect(()=>{
        PostHttp.getAll((data)=>{
            setData(data.result)
        },
        (error)=>{
            console.log(error)
        })
    },[setData])
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
                    bgImage="/website/assets/images/bg-login-oficial.jpg"
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
                    data.length > 0 ?
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
                    :
                    <Loading/>
                }
            </PostListWrapper>
        </div>
    )
}

export default PostList
