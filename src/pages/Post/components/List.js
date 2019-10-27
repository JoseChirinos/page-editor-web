import React, { useEffect, useState } from 'react'
import '../../@style/tables.css'
/* Components */
import Header from '../../../common/header'
import PostCard from '../../../components/Post/PostCard'
import {
    Grid,
    GridCell
} from '@rmwc/grid'
/* Data */
import PostHttp from '../../@data/post-http'

const PostList = ({
    match,
    history
}) => {
    const [data, setData] = useState([])
    const urlPath = String(match.url).replace(/[/]$/g, '')

    // showDetail = (e, handleOriginal, rowInfo) => {
    //     if (typeof (rowInfo) !== "undefined") {
    //         if (rowInfo.original.idUser !== null) {
    //             this.props.history.push(`${this.urlPath}/${rowInfo.original.idUser}`)
    //         } else {
    //             console.error('Existe un error en ShowDetail el objeto no existe')
    //         }
    //     }
    // }
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
                match={match}
                history={history}
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
            <Grid>
                {
                    data.map((p, index) => (
                        <GridCell align='middle' desktop={4} tablet={4} phone={12} key={index}>
                            <PostCard
                                idPost={p.idPost}
                                title={p.title}
                                author={p.first_name}
                                contentMin={p.summary}
                                imageUrl={p.urlImage}
                                urlPath={urlPath}
                            />
                        </GridCell>
                    ))
                }
            </Grid>
        </section>
    )
}
export default PostList