import React from 'react'
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

const PostCard = (props)=>{    
    return(
        <CardItem>
            <CardPrimaryAction>
                <CardMedia
                    tag="div"
                    sixteenByNine
                    style={{
                        backgroundImage: `url(/website/assets/images/bg-fundamental.jpg)`
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
                    Titulo del Post
                </Typography>
                <Typography
                    use="subtitle2"
                    tag="h3"
                    theme="textSecondaryOnBackground"
                    style={{ marginTop: '-1rem' }}
                >
                    <span style={{verticalAlign: 'top'}}>Autor</span>
                    <Icon icon="navigate_next"/>
                    <span style={{verticalAlign: 'top', color: '#4e4e4e'}}>Fecha</span>
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
                    Resumen del post
                </Typography>
                </div>
            </CardPrimaryAction>
            <CardActions
                tag="div"
            >
                <CardActionButtons>
                    <CardActionButton>
                        Leer
                    </CardActionButton>
                </CardActionButtons>
            </CardActions>
        </CardItem>
    )
}

export default PostCard
