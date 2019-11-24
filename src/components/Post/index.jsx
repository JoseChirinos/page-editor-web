import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import { PostContainer, PostWrapper, PostTitle, PostMore } from './style'
import { Button } from '@rmwc/button';
import { Typography } from '@rmwc/typography'
import Loading from '../../common/loading'
import {
    NavLink
} from 'react-router-dom'
/* Data */
import PostHttp from '../../pages/@data/post-http'

const Post = ({
    title,
    subtitle
})=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        if(loading){
            PostHttp.getFirst((data)=>{
                if(data.status){
                    setData(data.result)
                }
                setLoading(false)
            },
            (error)=>{
                console.log(error)
            })
        }
    },[loading, setData, setLoading])
    useEffect(() => {
        return () => {
          PostHttp.cancel()
        }
      }, [])
    return (
        <PostContainer>
            <PostTitle>
                <h1>
                    { title }
                    <small>
                        { subtitle }
                    </small>
                </h1>
            </PostTitle>
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
                                urlPath={`posts/${post.idPost}`}
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
            <PostMore>
                <NavLink to="/posts">
                    <Button raised>Ver más post</Button>
                </NavLink>
            </PostMore>
        </PostContainer>
    )
}

export default Post
