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
import { Icon } from '@rmwc/icon'
import {
    NavLink
} from 'react-router-dom'
/*Data*/
import { BASE_IMAGE } from '../../pages/@data/@server'
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const PostCard = ({
    edit,
    idPost,
    title,
    author,
    posted,
    contentMin,
    imageUrl,
    urlPath
})=>{
    const formated = moment(posted,'YYYY/MM/DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
    const day = moment(formated).fromNow()
    
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
                <Typography 
                    use="subtitle1"
                    tag="h2"
                    style={{ 
                        padding: '12px 0px',
                        textTransform: 'uppercase',
                        lineHeight: '1.7rem',
                        fontWeight: 500,
                    }}>
                    { title }
                </Typography>
                <Typography
                    use="subtitle2"
                    tag="h3"
                    theme="textSecondaryOnBackground"
                    style={{ marginTop: '-1rem' }}
                >
                    <span style={{verticalAlign: 'top'}}>{ author }</span>
                    <Icon icon="navigate_next"/>
                    <span style={{verticalAlign: 'top', color: '#4e4e4e'}}>{ day }</span>
                    <span style={{
                        display: 'block',
                        verticalAlign: 'middle',
                        width: '100%',
                        height: 2,
                        backgroundColor: '#ececec',
                    }}/>
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
                        <CardActionButton>
                        { edit ? 'Editar': 'Leer'}
                        </CardActionButton>
                    </NavLink>
                    {
                        edit &&
                        <NavLink to={`${urlPath}/${idPost}/preview`}>
                            <CardActionButton>Preview</CardActionButton>
                        </NavLink> 
                    }
                </CardActionButtons>
            </CardActions>
        </CardItem>
    )
}

PostCard.propTypes = {
    edit: PropTypes.bool,
    idPost: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    posted: PropTypes.string.isRequired,
    contentMin: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
}
PropTypes.defaultProps = {
    edit: false
}
export default PostCard
