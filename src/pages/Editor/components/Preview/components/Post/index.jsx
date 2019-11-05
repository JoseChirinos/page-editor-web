import React from 'react'
import PostCard from './PostCard'
import { PostContainer, PostWrapper, PostTitle, PostMore } from './style'
import { Button } from '@rmwc/button';

const Post = ({
    title,
    subtitle
})=>{
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
            <PostWrapper>
                <PostCard />
                <PostCard />
                <PostCard />
            </PostWrapper>
            <PostMore>
                <Button raised>Ver más post</Button>
            </PostMore>
        </PostContainer>
    )
}

export default Post
