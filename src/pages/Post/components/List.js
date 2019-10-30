import React, { useEffect, useState, useContext } from 'react'
/* Components */
import Header from '../../../common/header'
import PostCard from '../../../components/Post/PostCard'
import { GridList } from './atoms/GridList'
/* Data */
import PostHttp from '../../@data/post-http'
/* Context */
import { UserContext } from '../../../context/user-context'

const PostList = ({
    match,
    history,
    context
}) => {
    const user = useContext(UserContext)
    const [data, setData] = useState([])
    const urlPath = String(match.url).replace(/[/]$/g, '')

    useEffect(() => {
        const idUser = user.idUser
        PostHttp.getAllUser(idUser,
            (data) => {
                setData(data.result)
            },
            (error) => {
                console.log(error)
            }
        )
        // PostHttp.getAll(
        //     (data) => {
        //         setData(data.result)
        //     },
        //     (error) => {
        //         console.log(error)
        //     }
        // )
    }, [context, setData, user])

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