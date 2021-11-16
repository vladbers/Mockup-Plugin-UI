import React from 'react';
import {styled} from "@mui/material/styles";

export const UiVerticalMenuBox = ({children}) => {

    const VerticalMenuBox = styled('div')(({ theme }) => ({
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    }));


    return (
        <VerticalMenuBox>
            {children}
        </VerticalMenuBox>
    )
}
