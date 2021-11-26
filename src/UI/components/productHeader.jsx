import React from 'react';
import {styled} from "@mui/material/styles";


export const UiProductHeader = (props) => {

    const ProductHeader = styled('div')(({theme}) => ({
        backgroundColor: props.backgroundColor ?  props.backgroundColor : 'transparent',
        width: '100%',
        minHeight: '308px',
        position: 'relative',
        zIndex: '0',
    }));
    const ProductImage = styled('img')(({theme}) => ({
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1',
        width: '100%',
    }));
    const HeaderElement = styled('div')(({theme}) => ({
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: '0'
    }));
    const FooterElement = styled('div')(({theme}) => ({
        zIndex: '0',
        marginLeft: '20px',
        marginRight: '20px',
        minHeight: '68px',
        backgroundColor: 'inherit'
    }));
    const SpacingElement = styled('div')(({theme}) => ({
        height: '176px',
    }));
    const DividerElement = styled('div')(({theme}) => ({
        height: '1px',
        backgroundColor: theme.palette.transparent['dark-5'],
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '11px'
    }));

    return (
        <ProductHeader>
            {props.image && <ProductImage src={props.image} alt="Cover Image" />}
            <HeaderElement>
                {props.headerElement}
            </HeaderElement>
            <SpacingElement />
            <DividerElement />
            <FooterElement>
                {props.children}
            </FooterElement>
        </ProductHeader>
    )
}
