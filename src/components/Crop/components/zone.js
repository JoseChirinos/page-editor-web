import React from 'react'
import './zone.css'
/* Components */
import { Button } from '@rmwc/button'
import { Icon } from '@rmwc/icon'

const Zone = ({
    handleChange,
    showPreview,
    children
}) => {
    return (
        <aside className="zone-preview">
            <div style={{ display: `${showPreview ? 'none' : 'block'}` }}>
                <div className="zone-image">
                    <input type='file' id="getImage" accept="image/x-png,image/gif,image/jpeg" className="inputfile" onChange={handleChange} required={true} />
                    <label htmlFor="getImage">
                        <Icon icon="add_to_photos" />
                        AGREGAR IMAGEN
                    </label>
                </div>
            </div>
            <div style={{ display: `${showPreview ? 'block' : 'none'}` }}>
                <div>
                    {children}
                </div>
                <Button
                    outlined
                    type='button'
                >
                    <label htmlFor="getImage" style={{ margin: 0 }}>
                        Cambiar Imagen
                    </label>
                </Button>
            </div>
        </aside>
    )
}

export default Zone