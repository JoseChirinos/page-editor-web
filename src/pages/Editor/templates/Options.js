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

import Header from '../components/Preview/components/Header'
import DetailSimple from '../components/Preview/components/Detail/Simple'
import DetailDefault from '../components/Preview/components/Detail'
import DetailVideo from '../components/Preview/components/Detail/Video'
import PostList from '../components/Preview/components/Post'
import Contact from '../components/Preview/components/Contact'
import Footer from '../components/Preview/components/Footer'
import Author from '../components/Preview/components/Author'
import CarrouselDefault from '../components/Preview/components/Carousel'
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
        initialConfig: {
            component: 'Header',
            props: {
                title: 'Hello Header',
                imageUrl: '',
                bgUrl: ''
            }
        }
    },
    DetailSimple: {
        group: 'Detail',
        PreviewComponent: <DetailSimplePreview />,
        initialConfig: {
            component: 'DetailSimple',
            props: {
                title: 'Detalle Simple Titulo',
                content: 'Contenido',
                bgUrl: '',
                bgColor: '#2b2b2b',
            }
        }
    },
    Detail: {
        group: 'Detail',
        PreviewComponent: <DetailDefaultPreview />,
        initialConfig: {
            component: 'DetailDefault',
            props: {
                title: 'Detalle Titulo',
                content: 'Tu contenido',
                imageUrl: '',
                imagePosition: 'right',
                bgUrl: '',
                bgColor: '#2b2b2b',
            }
        }
    },
    DetailVideo: {
        group: 'Detail',
        PreviewComponent: <DetailVideoPreview />,
        initialConfig: {
            component: 'DetailVideo',
            props: {
                title: 'Detalle con Video Titulo',
                content: 'Tu contenido',
                videoUrl: '',
                videoPosition: 'left',
                bgColor: '#000000',
            }
        }
    },
    Post: {
        group: 'Post',
        PreviewComponent: <PostListPreview />,
        initialConfig: {
            component: 'PostList',
            props: {
                title: 'Post Titulo',
                subtitle: 'Subtitulo',
            }
        }
    },
    Carrousel: {
        group: 'Carrousel',
        PreviewComponent: <CarrouselDefaultPreview />,
        initialConfig: {
            component: 'CarrouselDefault',
            props: {
                items: {},
                orderItems: [],
            }
        }
    },
    CarrouselImage: {
        group: 'Carrousel',
        PreviewComponent: <CarrouselImagePreview />,
    },
    Contact: {
        group: 'Other',
        PreviewComponent: <ContactPreview />,
        initialConfig: {
            component: 'Contact',
            props: {}
        }
    },
    Footer: {
        group: 'Other',
        PreviewComponent: <FooterPreview />,
        initialConfig: {
            component: 'Footer',
            props: {
                address: 'tu dirección',
                email: 'correo@mail.com',
                cellphone: '+591 70000000',
                website: 'miwebsite.com',
            }
        }
    },
    Author: {
        group: 'Other',
        PreviewComponent: <AuthorPreview />,
        initialConfig: {
            component: 'Author',
            props: {
                authorName: 'Jaime Rojas',
            }
        }
    }
}


export const OptionsRender = {
    Header: (props) => <Header {...props} />,
    DetailSimple: (props) => <DetailSimple {...props} />,
    DetailDefault: (props) => <DetailDefault {...props} />,
    DetailVideo: (props) => <DetailVideo {...props} />,
    PostList: (props) => <PostList {...props} />,
    Contact: (props) => <Contact {...props} />,
    Footer: (props) => <Footer {...props} />,
    Author: (props) => <Author {...props} />,
    CarrouselDefault: (props, change, id) => <CarrouselDefault {...props} change={change} id={id} />,
}