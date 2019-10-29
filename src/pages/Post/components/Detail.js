import React, { Component } from 'react'
/* Styles */
import '../../@style/form.css'
/* Components */
import { Redirect } from 'react-router-dom'
import Header from '../../../common/header'
import Loading from '../../../common/loading'
import PostForm from './Form'
import Action from '../../../common/action'
import Alert from '../../../common/alert'

/* Interface */
import { PostSchemaDetail } from '../post-schema'

/* Data */
import PostHttp from '../../@data/post-http'
import { getUrl } from '../../@data/get-url'

class PostDetail extends Component {
    constructor(props) {
        super()
        this.state = {
            data: Object.assign({}, PostSchemaDetail),
            load: true,
            loadText: 'Cargando Información',
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
    componentDidMount() {
        const idPost = this.props.match.params.id
        const url = getUrl.back(this.props.history.location.pathname)
        const self = this
        PostHttp.getId(
            idPost,
            (data) => {
                self.setState({
                    urlCompleted: url.path,
                    load: false,
                    data: {
                        ...data.result
                    }
                })
            },
            (error) => {
                console.log(error)
            }
        )
    }
    handleSend = (e) => {
        e.preventDefault()
        let data = this.state.data
        this.setState({
            load: true,
            loadText: 'Guardando'
        })
        this.sendUpdate(data)
    }
    sendUpdate = (data) => {
        let self = this
        PostHttp.update(data,
            (data) => {
                if (data.status) {
                    self.completeSend(data)
                } else {
                    self.completeError(data.message)
                }
            },
            (error) => {
                self.completeError(error)
            })
    }

    removePost = () => {
        const idPost = this.props.match.params.id
        const idUser = this.state.data.idUser
        const self = this
        if (window.confirm("Esta seguro que quiere eliminar este post?")) {
            PostHttp.delete({
                idPost, idUser
            },
                (data) => {
                    if (data.status) {
                        self.completeSend(data)
                    } else {
                        self.completeError(data.message)
                    }
                },
                (error) => {
                    self.completeError(error)
                })
        }
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
    render() {
        return (
            <div>
                <Header
                    title="Editar Post"
                    theme={{
                        background: "#610dd8",
                        color: "#fff"

                    }}
                />

                {
                    !this.state.load ?
                        <form onSubmit={this.handleSend} className="app-form-container">
                            <PostForm
                                editForm
                                data={this.state.data}
                                changeState={this.changeState}
                                cropRef={this.cropRef}
                                disabledAccount={this.disabledAccount}
                                removePost={this.removePost}
                            />
                            <Action
                                match={this.props.match}
                            />
                        </form>
                        :
                        <Loading title={this.state.loadText} />
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

export default PostDetail