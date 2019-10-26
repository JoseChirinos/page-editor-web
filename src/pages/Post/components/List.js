import React, { useEffect, useState } from 'react'
import '../../@style/tables.css'
/* Components */
import Header from '../../../common/header'
import {
    Grid,
    GridCell
} from '@rmwc/grid'
/* Data */
import PostHttp from '../../@data/post-http'

const PostList = (props) => {
    const [data, setData] = useState([])
    const urlPath = String(props.match.url).replace(/[/]$/g, '')

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
                match={props.match}
                history={props.history}
                actions={[
                    {
                        on: `${urlPath}/nuevo`,
                        title: 'Agregar',
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
                    [1, 2, 3, 4, 5, 7, 8, 9, 4, 5, 6, 2].map((i, index) => (
                        <GridCell desktop={4} tablet={4} phone={12} key={index}>{i}</GridCell>
                    ))
                }
            </Grid>
        </section>
    )
}
export default PostList