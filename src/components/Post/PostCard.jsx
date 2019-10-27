import React from 'react'
import PropTypes from 'prop-types'
/*Components*/
import { 
    CardPrimaryAction,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionButton,
} from '@rmwc/card'
import { CardItem } from './style'
import { Typography } from '@rmwc/typography'
import {
    NavLink
} from 'react-router-dom'
/*Data*/
import { BASE_IMAGE } from '../../pages/@data/@server'

const PostCard = ({
    idPost,
    title,
    author,
    contentMin,
    imageUrl,
    urlPath
})=>{
    return(
        <CardItem>
            <CardPrimaryAction>
                <CardMedia
                    sixteenByNine
                    style={{
                        backgroundImage: `url(${BASE_IMAGE}/thumb_${imageUrl})`
                    }}
                />
                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <Typography use="headline6" tag="h2">
                    { title }
                </Typography>
                <Typography
                    use="subtitle2"
                    tag="h3"
                    theme="textSecondaryOnBackground"
                    style={{ marginTop: '-1rem' }}
                >
                    <strong>Autor: </strong>{ author }
                </Typography>
                <Typography
                    use="body1"
                    tag="div"
                    theme="textSecondaryOnBackground"
                >
                    { contentMin }
                </Typography>
                </div>
            </CardPrimaryAction>
            <CardActions>
                <CardActionButtons>
                    <NavLink to={`${urlPath}/${idPost}`}>
                        <CardActionButton>Ver</CardActionButton>
                    </NavLink> 
                    {/* <CardActionButton>Ver todo</CardActionButton> */}
                </CardActionButtons>
            </CardActions>
        </CardItem>
    )
}

PostCard.propTypes = {
    idPost: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    contentMin: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
}
export default PostCard
