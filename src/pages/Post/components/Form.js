import React from 'react'
import PropTypes from 'prop-types'
import '../../@style/container.css'
import '../../@style/form.css'
/* Components */
import { Parallax } from 'react-parallax'
import { TextField } from '@rmwc/textfield'
import Crop from '../../../components/Crop'
import Remove from '../../../common/remove'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'

/* Data */
import { BASE_IMAGE } from '../../@data/@server'

const mdParser = new MarkdownIt()

const PostForm = ({
    data,
    editForm,
    changeState,
    removePost,
    cropRef
}) => {

    return (
        <div className="app-container">
            {
                editForm &&
                <Parallax
                    bgImage={`${BASE_IMAGE}/${data.urlImage}`}
                    strength={700}
                    style={{
                        width: '100%',
                        height: 300
                    }}
                />
            }
            <div className="app-form-wrapper">
                {
                    !editForm &&
                    <fieldset className="app-form--fieldset">
                        <legend>
                            Portada
                        </legend>

                        <aside className="app-post--control">
                            <Crop
                                ref={cropRef}
                                size={{
                                    width: 900,
                                    height: 450
                                }}
                            />
                        </aside>

                    </fieldset>
                }

                <fieldset className="app-form--fieldset">
                    <legend>
                        Datos Básicos
                    </legend>

                    <aside className="app-post--control">
                        <TextField
                            outlined
                            required
                            type="text"
                            label="Titulo"
                            helpText="Escriba un Titulo"
                            value={data.title}
                            onChange={(e) => changeState({ ...data, title: e.currentTarget.value })}
                            characterCount
                            maxLength={100}
                            style={{ width: '100%' }}
                        />
                    </aside>

                    <div className="app-separate" />

                    <aside className="app-post--control">
                        <TextField
                            textarea
                            outlined
                            required={true}
                            type="text"
                            label="Resumen"
                            helpText="Escriba un resumen"
                            value={data.summary}
                            onChange={(e) => changeState({ ...data, summary: e.currentTarget.value })}
                            characterCount
                            maxLength={150}
                            style={{ width: '100%' }}
                        />
                    </aside>

                </fieldset>

                <fieldset className="app-form--fieldset">
                    <legend>
                        Contenido
                    </legend>

                    <aside className="app-app--control">
                        <MdEditor
                            value={data.content}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={({ text }) => { changeState({ ...data, content: text }) }}
                            required
                        />
                    </aside>

                </fieldset>

                {
                    editForm &&
                    <Remove
                        text="(*) Si usted esta seguro que quiere eliminar este post, es bajo su responsabilidad."
                        label="Eliminar"
                        handleEvent={removePost}
                    />
                }

            </div>
        </div>
    )
}

PostForm.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        summary: PropTypes.string,
        cover_image: PropTypes.string,
    }),
    editForm: PropTypes.bool,
    changeState: PropTypes.func,
    removePost: PropTypes.func,
    cropRef: PropTypes.shape({}).isRequired,
}

PostForm.defaultProps = {
    data: {
        title: '',
        content: '',
        summary: '',
        cover_image: ''
    },
    editForm: false,
    changeState: () => { },
    removePost: () => { },
}

export default PostForm