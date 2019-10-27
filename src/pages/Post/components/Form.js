import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../@style/container.css'
import '../../@style/form.css'
/* Components */
import { TextField } from '@rmwc/textfield'
import Crop from '../../../components/Crop'
import {
    DraftailEditor,
    INLINE_STYLE,
    BLOCK_TYPE,
    ENTITY_TYPE,
    BR_ICON,
    UNDO_ICON,
    REDO_ICON,
    TINY_TEXT_BLOCK,
    REDACTED_STYLE,
} from "draftail"
import Remove from '../../../common/remove'
import {
    NavLink
} from 'react-router-dom'
/* Data */
import PASS from '../../@data/@pass'

const PostForm = ({
    data,
    editForm,
    changeState,
    removePost,
    cropRef
}) => {

    const initial = JSON.parse(sessionStorage.getItem("draftail:content"))
    const onSave = (content) => {
        console.log("saving", content)
        sessionStorage.setItem("draftail:content", JSON.stringify(content))
    }
    return (
        <div className="app-container">
            <div className="app-form-wrapper">
                <fieldset className="app-form--fieldset">
                    <legend>
                        Portada
                    </legend>

                    <aside className="app-post--control">
                        <Crop
                            ref={cropRef}
                        />
                    </aside>

                </fieldset>

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
                            pattern="^[a-zA-Zñüáéíóú ]{1,100}$"
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
                            pattern="^[a-zA-Zñüáéíóú ]{1,100}$"
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
                        <DraftailEditor
                            rawContentState={initial || null}
                            onSave={onSave}
                            blockTypes={[
                                { type: BLOCK_TYPE.HEADER_ONE },
                                { type: BLOCK_TYPE.HEADER_THREE },
                                { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
                            ]}
                            inlineStyles={[
                                { type: INLINE_STYLE.BOLD },
                                { type: INLINE_STYLE.ITALIC },
                                { type: INLINE_STYLE.UNDERLINE }
                            ]}
                        />
                    </aside>

                </fieldset>

                {
                    editForm &&
                    <Remove
                        text="(*) Si usted esta seguro que quiere deshabilitar al usuario, es bajo su responsabilidad."
                        label="DESHABILITAR"
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