import React, { Component } from 'react'
/* Styles */
import '../../@style/form.css'
/* Components */
import { Redirect } from 'react-router-dom'
import Header from '../../../common/header'
import PostForm from './Form'
import Action from '../../../common/action'
import Loading from '../../../common/loading'
import Alert from '../../../common/alert'
/* Interface */
import { PostSchema } from '../post-schema'
/* Data */
import PostHttp from '../../@data/post-http'
import { getUrl } from '../../@data/get-url'
/* Context */
import { UserContext } from '../../../context/user-context'

class PostNew extends Component {
    constructor(props) {
        super()
        this.state = {
            data: Object.assign({}, PostSchema),
            load: false,
            completed: false,
            urlCompleted: '/',
            alert: {
                visible: false,
                message: 'default',
                theme: 'default'
            }
        }
        this.cropRef = React.createRef()
    }
    handleSend = (e) => {
        e.preventDefault()
        this.setState({
            load: true
        })
        const sendData = this.state.data
        this.cropRef.current.getResult((data64) => {
            sendData.cover_image = data64
            this.serverConexion(sendData)
        })
    }
    serverConexion = (dataSend) => {
        let self = this
        PostHttp.add(dataSend,
            (data) => {
                if (data.status) {
                    self.completeSend(data.result)
                } else {
                    self.completeError(data.message)
                }
            },
            (error) => {
                self.completeError(error)
            })
    }
    completeSend = () => {
        this.setState({
            completed: true
        })
    }
    completeError = (message) => {
        this.setState({
            load: false
        })
        this.showAlert(message, 'error')
    }
    showAlert = (message, theme) => {
        this.setState({
            alert: {
                visible: true,
                message,
                theme
            }
        })
    }
    hideAlert = () => {
        this.setState({
            alert: false,
            message: '',
            theme: 'default'
        })
    }
    changeState = (newData) => {
        this.setState({
            data: newData
        })
    }
    componentDidMount() {
        const url = getUrl.back(this.props.history.location.pathname)
        const idUser = this.context.idUser
        console.log(idUser)
        this.setState({
            urlCompleted: url.path,
            data: {
                ...this.state.data,
                idUser,
            }
        })
    }
    render() {
        return (
            <div>
                <Header
                    title="Publicar Post"
                    history={this.props.history}
                    theme={{
                        background: "#610dd8",
                        color: "#fff"

                    }}
                />
                {
                    this.state.load ?
                        <Loading title="Guardando Datos..." />
                        :
                        <form onSubmit={this.handleSend} className="app-form-container">
                            <PostForm
                                data={this.state.data}
                                changeState={this.changeState}
                                cropRef={this.cropRef}
                            />
                            <Action
                                match={this.props.match}
                            />
                        </form>
                }

                {
                    this.state.alert.visible ?
                        <Alert
                            message={this.state.alert.message}
                            theme={this.state.alert.theme}
                            hideAlert={this.hideAlert}
                        />
                        :
                        <span />
                }

                {
                    this.state.completed ?
                        <Redirect to={this.state.urlCompleted} />
                        :
                        <span />
                }
            </div>
        )
    }
}

PostNew.contextType = UserContext

export default PostNew