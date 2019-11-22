import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/* Components */
import { Parallax } from 'react-parallax'
import LoadPage from '../../common/loadpage'
import Header from '../../common/header'
import ReactMarkdown from 'react-markdown'
import toc from 'remark-toc'
import CodeBlock from './components/CodeBlock'
import {
    PreviewContainer,
    PreviewWrapper,
    PreviewTitle
} from './style'
import { Icon } from '@rmwc/icon'
/* Interface */
import { PostSchemaDetail } from '../../pages/Post/post-schema'
/* Data */
import PostHttp from '../../pages/@data/post-http'
import { BASE_IMAGE } from '../../pages/@data/@server'
import moment from 'moment';
import 'moment/locale/es';

/* Style */
import 'github-markdown-css'
import { Typography } from '@rmwc/typography'

moment.locale('es');

const PostPreview = ({
    match,
    edit
}) => {
    const [loading, setLoading] = useState(true)
    const [mdSource, setMdSource] = useState('')
    const [data, setData] = useState(Object.assign({}, PostSchemaDetail))

    useEffect( ()=>{
        if(loading){
            const idPost = match.params.id
            PostHttp.getId(idPost,
            (data) => {
                setMdSource(data.result.content)
                setData(data.result)
                setLoading(false)
            },
            (error) => {
                console.log(error)
            })
        }        
    },[match, setMdSource, setData, loading])

    const formated = moment(data.data_start,'YYYY/MM/DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
    const day = moment(formated).fromNow()

    return (
        <section>
            {
                loading ?
                <LoadPage/>
                :
                <PreviewContainer>
                    {
                        edit &&
                        <Header
                            back
                            title="Preview"
                            theme={{
                                background: "#610dd8",
                                color: "#fff"
            
                            }}
                        />
                    }
                    {
                        data.urlImage !== '' ?
                        <Parallax
                            bgImage={`${BASE_IMAGE}/${data.urlImage}`}
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
                                        {data.title}
                                    </Typography>
                                    <div/>
                                    <Typography 
                                        use="subtitle1"
                                        style={{
                                            fontFamily: `'Lato', sans-serif`,
                                            color: `#fff`,
                                            textShadow: `1px 2px 1px #000`,
                                        }}
                                    >
                                        <span style={{verticalAlign: 'top'}}>
                                            {`${data.first_name} ${data.last_name}`}
                                        </span>
                                        <span style={{verticalAlign: 'top', padding: '0px 5px 0px 20px'}}>
                                            <Icon icon='access_time'/>
                                        </span>
                                        <span style={{verticalAlign: 'top'}}>
                                            {day}
                                        </span>
                                    </Typography>
                                </aside>
                            </PreviewTitle>
                        </Parallax>
                        :
                        <span/>
                    }
                    <PreviewWrapper className='markdown-body'>
                        <ReactMarkdown
                            source={ mdSource }
                            plugins={[toc]}
                            skipHtml={false}
                            escapeHtml={false}
                            renderers={{code: CodeBlock}}
                        />  
                    </PreviewWrapper>
                </PreviewContainer>
            }
        </section>
    )
}

PostPreview.propTypes = {
    edit: PropTypes.bool
}
PostPreview.defaultProps = {
    edit: false
}

export default PostPreview