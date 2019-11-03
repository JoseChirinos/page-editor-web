import React from 'react';
/* Components */
import {
    PreviewContainer,
    PreviewGroup,
    PreviewParrafo,
    PreviewImage
} from './style'

export const HeaderPreview = ()=>(
    <PreviewContainer direction='column'>
        <PreviewParrafo width="70px"/>
        <PreviewImage icon='image'/>
    </PreviewContainer>
)
export const DetailSimplePreview = ()=>(
    <PreviewContainer direction='column'>
        <PreviewGroup width="50px">
            <PreviewParrafo width='50px'/>
            <PreviewParrafo width='50px'/>
            <PreviewParrafo
                width='25px' 
                bgColor='#2196F3'
                style={{marginTop:7, marginLeft:'auto',marginRight:'auto'}}
            />
        </PreviewGroup>
    </PreviewContainer>
)
export const DetailDefaultPreview = ()=>(
    <PreviewContainer direction='row'>
        <PreviewGroup width="50px">
            <PreviewParrafo width='50px'/>
            <PreviewParrafo width='50px'/>
            <PreviewParrafo
                width='25px' 
                bgColor='#2196F3' 
                style={{marginTop:7}}
            />
        </PreviewGroup>
        <PreviewImage icon='image'/>
    </PreviewContainer>
)
export const DetailVideoPreview = ()=>(
    <PreviewContainer direction='row-reverse'>
        <PreviewGroup width="50px">
            <PreviewParrafo width='50px'/>
            <PreviewParrafo width='50px'/>
            <PreviewParrafo
                width='25px' 
                bgColor='#2196F3' 
                style={{marginTop:7}}
            />
        </PreviewGroup>
        <PreviewImage icon='video_library'/>
    </PreviewContainer>
)
export const PostListPreview = ()=>(
    <PreviewContainer direction='column'>
        <PreviewParrafo width='50px'/>
        <PreviewContainer direction='row' style={{margin:0, height: 'auto'}}>
            <PreviewParrafo width='25px' style={{height: 30}}/>
            <PreviewParrafo width='25px' style={{height: 30}}/>
            <PreviewParrafo width='25px' style={{height: 30}}/>
        </PreviewContainer>
        <PreviewParrafo
            width='25px' 
            bgColor='#2196F3' 
            style={{marginTop:7}}
        />
    </PreviewContainer>
)
export const CarrouselDefaultPreview = ()=>(
    <PreviewContainer direction='row' content='space-between'>
        <PreviewImage icon='navigate_before'/>
        <PreviewGroup width="50px">
            <PreviewParrafo width='50px'/>
            <PreviewParrafo width='50px'/>
            <PreviewParrafo
                width='25px'
                bgColor='#2196F3'
                style={{marginTop:7}}
            />
        </PreviewGroup>
        <PreviewImage icon='navigate_next'/>
    </PreviewContainer>
)
export const CarrouselImagePreview = ()=>(
    <PreviewContainer direction='row' content='space-between'>
        <PreviewImage icon='navigate_before'/>
        <PreviewGroup width="50px">
            <PreviewImage icon='image'/>
        </PreviewGroup>
        <PreviewImage icon='navigate_next'/>
    </PreviewContainer>
)
export const ContactPreview = ()=>(
    <PreviewContainer direction='column'>
        <PreviewGroup width="50px">
            <PreviewImage icon='email'/>
            <PreviewParrafo width='50px' style={{borderRadius: 5,margin: '3px auto'}}/>
            <PreviewParrafo width='50px' style={{borderRadius: 5,margin: '3px auto'}}/>
            <PreviewParrafo
                width='25px' 
                bgColor='#2196F3'
                style={{borderRadius: 5,marginTop:7, marginLeft:'auto',marginRight:'auto'}}
            />
        </PreviewGroup>
    </PreviewContainer>
)
export const FooterPreview = ()=>(
    <PreviewContainer direction='row'>
        <PreviewGroup width="50px">
            <PreviewImage icon='image'/>
        </PreviewGroup>
        <PreviewGroup width="50px">
            <PreviewParrafo style={{margin: '3px auto'}}/>
            <PreviewParrafo style={{margin: '3px auto'}}/>
            <PreviewParrafo style={{margin: '3px auto'}}/>
        </PreviewGroup>
        <PreviewGroup width="50px">
            <PreviewParrafo style={{margin: '3px auto'}}/>
            <PreviewParrafo style={{margin: '3px auto'}}/>
            <PreviewParrafo style={{margin: '3px auto'}}/>
        </PreviewGroup>
    </PreviewContainer>
)
export const AuthorPreview = ()=>(
    <PreviewContainer direction='row'>
        <PreviewParrafo style={{margin: '3px auto'}}/>
    </PreviewContainer>
)