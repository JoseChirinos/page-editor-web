import React from 'react'

/* Thumb Preview Components */
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

/* Preview Components */
import Header from '../components/Preview/components/Header'
import DetailSimple from '../components/Preview/components/Detail/Simple'
import DetailDefault from '../components/Preview/components/Detail'
import DetailVideo from '../components/Preview/components/Detail/Video'
import PostList from '../components/Preview/components/Post'
import Contact from '../components/Preview/components/Contact'
import Footer from '../components/Preview/components/Footer'
import Author from '../components/Preview/components/Author'
import CarrouselDefault from '../components/Preview/components/Carousel'
import CarrouselImage from '../components/Preview/components/Carousel/Image'

/* Info Edit Components */
import HeaderEdit from '../components/Edit/HeaderEdit'
import DetailSimpleEdit from '../components/Edit/DetailSimpleEdit'
import DetailDefaultEdit from '../components/Edit/DetailDefaultEdit'
import DetailVideoEdit from '../components/Edit/DetailVideoEdit'
import PostListEdit from '../components/Edit/PostListEdit'
import CarrouselDefaultEdit from '../components/Edit/CarrouselDefaultEdit'
import CarrouselImageEdit from '../components/Edit/CarrouselImageEdit'
import ContactEdit from '../components/Edit/ContactEdit'
import FooterEdit from '../components/Edit/FooterEdit'
import AuthorEdit from '../components/Edit/AuthorEdit'

export const Options = {
    Header: {
        group: 'Header',
        PreviewComponent: <HeaderPreview />,
        initialConfig: {
            component: 'Header',
            editInfo: 'HeaderEdit',
            props: {
                title: 'Hello Header',
                imageUrl: '',
                idImageUrl: 0,
                bgUrl: '',
                idBgUrl: 0,
            }
        }
    },
    DetailSimple: {
        group: 'Detail',
        PreviewComponent: <DetailSimplePreview />,
        initialConfig: {
            component: 'DetailSimple',
            editInfo: 'DetailSimpleEdit',
            props: {
                title: 'Detalle Simple Titulo',
                content: 'Contenido',
                bgUrl: '',
                bgColor: '#2b2b2b',
                linkAction: '/',
                linkLabel: '',
                linkExternal: "false",
            }
        }
    },
    DetailDefault: {
        group: 'Detail',
        PreviewComponent: <DetailDefaultPreview />,
        initialConfig: {
            component: 'DetailDefault',
            editInfo: 'DetailDefaultEdit',
            props: {
                title: 'Detalle Titulo',
                content: 'Tu contenido',
                imageUrl: '',
                imagePosition: 'right',
                bgUrl: '',
                bgColor: '#2b2b2b',
                linkAction: '/',
                linkLabel: '',
                linkExternal: "false",
            }
        }
    },
    DetailVideo: {
        group: 'Detail',
        PreviewComponent: <DetailVideoPreview />,
        initialConfig: {
            component: 'DetailVideo',
            editInfo: 'DetailVideoEdit',
            props: {
                title: 'Detalle con Video Titulo',
                content: 'Tu contenido',
                videoUrl: '',
                videoPosition: 'left',
                bgColor: '#000000',
                linkAction: '/',
                linkLabel: '',
                linkExternal: "false",
            }
        }
    },
    PostList: {
        group: 'Post',
        PreviewComponent: <PostListPreview />,
        initialConfig: {
            component: 'PostList',
            editInfo: 'PostListEdit',
            props: {
                title: 'Post Titulo',
                subtitle: 'Subtitulo',
            }
        }
    },
    CarrouselDefault: {
        group: 'Carrousel',
        PreviewComponent: <CarrouselDefaultPreview />,
        initialConfig: {
            component: 'CarrouselDefault',
            editInfo: 'CarrouselDefaultEdit',
            props: {
                items: {},
                orderItems: [],
            }
        }
    },
    CarrouselImage: {
        group: 'Carrousel',
        PreviewComponent: <CarrouselImagePreview />,
        initialConfig: {
            component: 'CarrouselImage',
            editInfo: 'CarrouselImageEdit',
            props: {
                items: {},
                orderItems: [],
            }
        }
    },
    Contact: {
        group: 'Other',
        PreviewComponent: <ContactPreview />,
        initialConfig: {
            component: 'Contact',
            editInfo: 'ContactEdit',
            props: {}
        }
    },
    Footer: {
        group: 'Other',
        PreviewComponent: <FooterPreview />,
        initialConfig: {
            component: 'Footer',
            editInfo: 'FooterEdit',
            props: {
                idImageUrl: 0,
                imageUrl: '',
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
            editInfo: 'AuthorEdit',
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
    CarrouselDefault: (props, change, id, handleInfoEdit, active) => <CarrouselDefault {...props} change={change} id={id} handleInfoEdit={handleInfoEdit} active={active} />,
    CarrouselImage: (props, change, id) => <CarrouselImage {...props} change={change} id={id} />,
    Contact: (props) => <Contact {...props} />,
    Footer: (props) => <Footer {...props} />,
    Author: (props) => <Author {...props} />,
}

export const OptionsEdit = {
    HeaderEdit: (props, change) => <HeaderEdit {...props} change={change} />,
    DetailSimpleEdit: (props, change) => <DetailSimpleEdit {...props} change={change} />,
    DetailDefaultEdit: (props, change) => <DetailDefaultEdit {...props} change={change} />,
    DetailVideoEdit: (props, change) => <DetailVideoEdit {...props} change={change} />,
    PostListEdit: (props, change) => <PostListEdit {...props} change={change} />,
    CarrouselDefaultEdit: (props, change) => <CarrouselDefaultEdit {...props} change={change} />,
    CarrouselImageEdit: (props, change) => <CarrouselImageEdit {...props} change={change} />,
    ContactEdit: (props, change) => <ContactEdit {...props} change={change} />,
    FooterEdit: (props, change) => <FooterEdit {...props} change={change} />,
    AuthorEdit: (props, change) => <AuthorEdit {...props} change={change} />,
}