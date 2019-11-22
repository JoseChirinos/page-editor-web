import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction, IconPreview } from './style'
import ReactPlayer from 'react-player'
import { Button } from '@rmwc/button';

const DetailVideo = ({
    title,
    content,
    videoUrl,
    videoPosition,
    bgColor,
    linkLabel,
}) => {

    return (
        <DetailWrapper
            imagePosition = { videoPosition }
            heightSize = '350px'
            bgColor = { bgColor }
        >
            <span>
                { title }
                <p>
                    { content }
                </p>
                <DetailAction>
                    <Button raised>{ linkLabel === ""? "ACCION": linkLabel }</Button>
                </DetailAction>
            </span>
            {
                videoUrl !== ''?
                <ReactPlayer
                    className="react-player"
                    url = { videoUrl }
                    controls
                />
                :
                <IconPreview icon="video_library" />
            }
        </DetailWrapper>
    )
}

DetailVideo.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
    videoPosition: PropTypes.oneOf(['left','right']),
    bgColor: PropTypes.string,
    linkLabel: PropTypes.string,
}
DetailVideo.defaultProps = {
    videoPosition: 'left',
    videoUrl: '',
    bgColor: '#000',
    linkLabel: "ACCION",
}
export default DetailVideo