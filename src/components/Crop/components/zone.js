import React from 'react'
import './zone.css'
/* Components */
import { Button } from '@rmwc/button'

const Zone = ({
    handleChange,
    showPreview,
    children
}) => {
    return (
        <aside className="zone-preview">
            <div style={{ display: `${showPreview ? 'none' : 'block'}` }}>
                <div className="zone-image">
                    <input type='file' id="getImage" accept="image/x-png,image/gif,image/jpeg" className="inputfile" onChange={handleChange} />
                    <label htmlFor="getImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28">
                            <path d="M20 13.5l-.1-.4-5.5-5.5-.4-.1-.4.1-5.4 5.5-.2.4c0 .3.2.5.5.5H12v5.5c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5V14h3.5c.3 0 .5-.2.5-.5zM30 18a6 6 0 0 1-6 6H7a7 7 0 0 1-3-13.3V10a8 8 0 0 1 15.4-3 4 4 0 0 1 6 5.2A6 6 0 0 1 30 18z" />
                        </svg>
                        Agregar Imagen
                    </label>
                </div>
            </div>
            <div style={{ display: `${showPreview ? 'block' : 'none'}` }}>
                <div>
                    {children}
                </div>
                <Button
                    outlined
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