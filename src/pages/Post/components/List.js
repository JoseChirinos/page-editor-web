import React, { useEffect, useState, useContext, useCallback } from 'react'
/* Components */
import { TabsContainer } from './style'
import Header from '../../../common/header'
import PostCard from '../../../components/Post/PostCard'
import { GridList } from './atoms/GridList'
import { TabBar, Tab } from '@rmwc/tabs'
/* Data */
import PostHttp from '../../@data/post-http'
/* Context */
import { UserContext } from '../../../context/user-context'

const PostList = ({
    match,
    history,
    context
}) => {
    const { idUser, type_user } = useContext(UserContext)
    const [data, setData] = useState([])
    const urlPath = String(match.url).replace(/[/]$/g, '')

    const getAll = useCallback(() => {
        PostHttp.getAll(
            (data) => {
                setData(data.result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [])

    const getUser = useCallback(() => {
        PostHttp.getAllUser(idUser,
            (data) => {
                setData(data.result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [idUser])

    useEffect(() => {
        if (type_user === 'P') {
            getUser()
        } else {
            getAll()
        }

    }, [getUser, getAll, type_user])

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
            {
                type_user !== 'P' &&
                <TabsContainer>
                    <TabBar>
                        <Tab onClick={() => { getAll() }}>Todos</Tab>
                        <Tab onClick={() => { getUser() }}>Mis Post</Tab>
                    </TabBar>
                </TabsContainer>
            }
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