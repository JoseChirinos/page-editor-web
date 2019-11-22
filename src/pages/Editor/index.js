import React, { useState, useEffect, useCallback } from 'react'
/* Components */
import Platform from './components/Platform'
import Loading from '../../common/loading'
/* Options */
import { Options } from './templates/Options'
/* Data */
import PageHttp from '../@data/page-http.js'

const firstLoad = {
    status: true,
    now: (setLoading, setIdPage, setWebsite, setOrderWeb) => {
        if (firstLoad.status) {
            firstLoad.status = false
            PageHttp.getNow(
                (data) => {
                    if (data.status > 0) {
                        // hacemos algo
                        setIdPage(data.result.idPage)
                        setWebsite(JSON.parse(data.result.context))
                        setOrderWeb(JSON.parse(data.result.context_order))
                    }
                    setLoading(false)
                },
                (error) => {
                    console.log(error)
                })
        }
    },
    destroy: () => {
        firstLoad.status = true
    }
}

const saveWebsite = (idPage, website, orderWeb, setIdPage) => {
    const data = {
        idPage,
        context: JSON.stringify(website),
        context_order: JSON.stringify(orderWeb),
    }
    PageHttp.save(data,
        (response) => {
            setIdPage(response.result.idPage)
        },
        (error) => {
            console.log(error)
        })
}

const Editor = (props) => {
    const [loading, setLoading] = useState(true)
    const [idPage, setIdPage] = useState('')
    const [website, setWebsite] = useState({})
    const [orderWeb, setOrderWeb] = useState([])

    const initialData = useCallback(() => {
        firstLoad.now(setLoading, setIdPage, setWebsite, setOrderWeb)
    }, [setLoading, setIdPage, setWebsite, setOrderWeb])

    const saveData = useCallback(() => {
        saveWebsite(idPage, website, orderWeb, setIdPage)
    }, [idPage, website, orderWeb, setIdPage])

    useEffect(() => {
        if (loading) {
            initialData()
        }
    }, [loading, initialData])

    useEffect(() => {
        if (orderWeb.length > 0) {
            if (Object.entries(website).length === orderWeb.length) {
                saveData()
            }
        }
    }, [website, orderWeb, saveData])

    useEffect(() => {
        return () => {
            firstLoad.destroy()
        }
    }, [])

    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <Platform
                        items={website}
                        change={setWebsite}
                        itemsOrder={orderWeb}
                        changeOrder={setOrderWeb}
                        options={Options}
                    />
            }
        </div>
    )
}

export default Editor
