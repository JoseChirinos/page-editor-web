import React from 'react'
import {
    HeaderPreview,
    DetailSimplePreview,
    DetailDefaultPreview,
    DetailVideoPreview,
    PostListPreview,
    CarrouselDefaultPreview,
    CarrouselImagePreview,
    ContactPreview,
    FooterPreview,
    AuthorPreview,
} from '../components/Preview'


// import Header from '../../../components/Header'
// import DetailSimple from '../../../components/Detail/Simple'
// import DetailDefault from '../../../components/Detail'
// import DetailVideo from '../../../components/Detail/Video'
// import PostList from '../../../components/Post'
// import CarrouselDefault from '../../../components/Carousel'
// import CarrouselImage from '../../../components/Carousel/Image'
// import Contact from '../../../components/Contact'
// import Footer from '../../../components/Footer'
// import Author from '../../../components/Author'


export const Options = {
    Header: {
        group: 'Header',
        PreviewComponent: <HeaderPreview />,
    },
    DetailSimple: {
        group: 'Detail',
        PreviewComponent: <DetailSimplePreview />,
    },
    Detail: {
        group: 'Detail',
        PreviewComponent: <DetailDefaultPreview />,
    },
    DetailVideo: {
        group: 'Detail',
        PreviewComponent: <DetailVideoPreview />,
    },
    Post: {
        group: 'Post',
        PreviewComponent: <PostListPreview />,
    },
    Carrousel: {
        group: 'Carrousel',
        PreviewComponent: <CarrouselDefaultPreview />,
    },
    CarrouselImage: {
        group: 'Carrousel',
        PreviewComponent: <CarrouselImagePreview />,
    },
    Contact: {
        group: 'Other',
        PreviewComponent: <ContactPreview />,
    },
    Footer: {
        group: 'Other',
        PreviewComponent: <FooterPreview />,
    },
    Author: {
        group: 'Other',
        PreviewComponent: <AuthorPreview />,
    }
}
