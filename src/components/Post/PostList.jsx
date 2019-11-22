import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import PostCard from './PostCard'
import { PostListWrapper, PostWrapper, PreviewTitle } from './style'
import { Typography } from '@rmwc/typography'
import Loading from '../../common/loading'

/* Data */
import PostHttp from '../../pages/@data/post-http'

const PostList = (props)=>{
    const [data, setData] = useState([])

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
    )
}

export default PostList
