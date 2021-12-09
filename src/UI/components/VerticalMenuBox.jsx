import React from 'react';
import {styled} from "@mui/material/styles";

const VerticalMenuBox = styled('div')(({ theme }) => ({
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
}));



export const UiVerticalMenuBox = ({children}) => {

    return (
        <VerticalMenuBox>
            {children}
        </VerticalMenuBox>
    )
}
