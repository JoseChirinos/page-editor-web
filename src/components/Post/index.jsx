import React from 'react'
import PostCard from './PostCard'
import { PostContainer, PostWrapper, PostTitle, PostMore } from './style'
import { Button } from '@rmwc/button';

const Post = (props)=>{
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
            <PostWrapper>
                <PostCard
                    idPost='1'
                    title='Capo Jose'
                    author='jose chirinos'
                    contentMin='Visit ten places on our planet that are undergoing the biggest
                    changes today.'
                    imageUrl='/assets/images/carousel/c1.jpg'
                />
                <PostCard
                    idPost='2'
                    title='Capo Jose'
                    author='jose chirinos'
                    contentMin='Visit ten places on our planet that are undergoing the biggest
                    changes today.'
                    imageUrl='/assets/images/carousel/c1.jpg'
                />
                <PostCard
                    idPost='3'
                    title='Capo Jose'
                    author='jose chirinos'
                    contentMin='Visit ten places on our planet that are undergoing the biggest
                    changes today.'
                    imageUrl='/assets/images/carousel/c1.jpg'
                />
            </PostWrapper>
            <PostMore>
                <Button raised>Ver más post</Button>
            </PostMore>
        </PostContainer>
    )
}

export default Post
