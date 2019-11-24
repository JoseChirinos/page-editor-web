import styled from 'styled-components'
import { Icon } from '@rmwc/icon'

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: ${({ content }) => content || 'space-evenly'};
    align-items: center;
    flex-direction: ${({ direction }) => direction || 'row'};
    width: 130px;
    height: 75px;
    margin: 4px auto;
    background-color: #e9eaeb;
    user-select: none;
    cursor: grab;
    :active{
        cursor: grabbing;
    }
`
export const PreviewGroup = styled.div`
    width: ${({ width }) => width || '70%'};
    padding: 10px 0px;
    margin: 0;
    text-align: center;
`
export const PreviewParrafo = styled.p`
    width: ${({ width }) => width || '70%'};
    height: 5px;
    margin: 1px 0px;
    text-align: center;
    background-color: ${({ bgColor }) => bgColor || '#999a9a'};
`
export const PreviewImage = styled(Icon)`
    text-align: center;
    color: #999a9a;
`