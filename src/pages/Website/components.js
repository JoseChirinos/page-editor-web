import React from 'react'
import Header from '../../components/Header'
import DetailSimple from '../../components/Detail/Simple'
import DetailDefault from '../../components/Detail'
import DetailVideo from '../../components/Detail/Video'
import PostList from '../../components/Post'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Author from '../../components/Author'
import CarrouselDefault from '../../components/Carousel'
import CarrouselImage from '../../components/Carousel/Image'

export const ComponentsRender = {
    Header: (props, key) => <Header {...props} key={key} />,
    DetailSimple: (props, key) => <DetailSimple {...props} key={key} />,
    DetailDefault: (props, key) => <DetailDefault {...props} key={key} />,
    DetailVideo: (props, key) => <DetailVideo {...props} key={key} />,
    PostList: (props, key) => <PostList {...props} key={key} />,
    CarrouselDefault: (props, key) => <CarrouselDefault {...props} key={key} />,
    CarrouselImage: (props, key) => <CarrouselImage {...props} key={key} />,
    Contact: (props, key) => <Contact {...props} key={key} />,
    Footer: (props, key) => <Footer {...props} key={key} />,
    Author: (props, key) => <Author {...props} key={key} />,
}