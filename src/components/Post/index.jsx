import React from 'react'
import PostCard from './PostCard'
import { PostWrapper } from './style'

const Post = (props)=>{
    return (
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
    )
}

export default Post
