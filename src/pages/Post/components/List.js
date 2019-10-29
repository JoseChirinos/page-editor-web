import React, { useEffect, useState } from 'react'
/* Components */
import Header from '../../../common/header'
import PostCard from '../../../components/Post/PostCard'
import { GridList } from './atoms/GridList'
/* Data */
import PostHttp from '../../@data/post-http'

const PostList = ({
    match,
    history
}) => {
    const [data, setData] = useState([])
    const urlPath = String(match.url).replace(/[/]$/g, '')

    useEffect(() => {
        PostHttp.getAll(
            (data) => {
                setData(data.result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [setData])

    console.log(data)

    return (
        <section>
            <Header
                title="Posts"
                actions={[
                    {
                        on: `${urlPath}/nuevo`,
                        title: 'Publicar',
                        icon: 'post_add',
                        theme: 'Header-btn'
                    }
                ]}
                theme={{
                    background: "#6200ee",
                    color: "#fff"
                }}
            />
            <GridList>
                {
                    data.map((p, index) => (
                        <PostCard
                            edit
                            key={index}
                            idPost={p.idPost}
                            title={p.title}
                            author={p.first_name}
                            posted={p.data_start}
                            contentMin={p.summary}
                            imageUrl={p.urlImage}
                            urlPath={urlPath}
                        />
                    ))
                }
            </GridList>
        </section>
    )
}
export default PostList