import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import { PostContainer, PostWrapper, PostTitle, PostMore } from './style'
import { Button } from '@rmwc/button';
import Loading from '../../common/loading'
/* Data */
import PostHttp from '../../pages/@data/post-http'

const Post = (props)=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        PostHttp.getFirst((data)=>{
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
        <PostContainer>
            <PostTitle>
                <h1>
                    Areas Dónde se destaca la informática
                    <small>
                        Ultimos Post publicados
                    </small>
                </h1>
            </PostTitle>
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
                                urlPath={``}
                            />
                        ))
                    }
                </PostWrapper>
                :
                <Loading/>
            }
            <PostMore>
                <Button raised>Ver más post</Button>
            </PostMore>
        </PostContainer>
    )
}

export default Post
