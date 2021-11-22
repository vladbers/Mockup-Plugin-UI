import React from 'react';
import {styled} from "@mui/material/styles";

export const UiPasteBlockContainer = ({children}) => {

    const PasteBlockContainer = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.pure['white'],
        padding: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        gap: '8px'
    }));


    return (
        <PasteBlockContainer>
            {children}
        </PasteBlockContainer>
    )
}
