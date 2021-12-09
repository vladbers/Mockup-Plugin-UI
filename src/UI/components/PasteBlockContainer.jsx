import React from 'react';
import {styled} from "@mui/material/styles";

const PasteBlockContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.pure['white'],
    padding: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    gap: '8px'
}));


export const UiPasteBlockContainer = ({children}) => {

    return (
        <PasteBlockContainer>
            {children}
        </PasteBlockContainer>
    )
}
