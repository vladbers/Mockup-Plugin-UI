import React from 'react';
import {styled} from "@mui/material/styles";
import {Grow} from "@mui/material";
import {CloseIcon} from "../icons/close";

const Root = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    background: 'rgba(207, 207, 207, 0.28)',
    position: 'absolute',
    top: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
}));
const Lightbox = styled('div')(({theme}) => ({
    background: theme.palette.pure['white'],
    marginRight: '20px',
    marginLeft: '20px',
    borderRadius: '32px',
    width: '100%',
    padding: '52px',
    position: 'relative'
}));
const CloseButtonBox = styled('div')(({theme}) => ({
    position: 'absolute',
    right: '21.69px',
    top: '21.1px',
    transition: '0.4s ease-in-out',
    '& :hover': {
        transition: '0.8s ease-in-out',
        opacity: '0.6',
        cursor: 'pointer',
    }
}));


export const UiLightBox = ({children, handleOpen, handleClose}) => {


    return (
        <Grow
            in={handleOpen}
            {...(handleOpen ? {timeout: 1} : {})}>
            <Root>
                <Grow
                    in={handleOpen}
                    {...(handleOpen ? {timeout: 700} : {})}>
                    <Lightbox>
                        <CloseButtonBox>
                            <CloseIcon onClick={handleClose} sx={{width: 16}}/>
                        </CloseButtonBox>
                        {children}
                    </Lightbox>
                </Grow>
            </Root>
        </Grow>
    )
}
