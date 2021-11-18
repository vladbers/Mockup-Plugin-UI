import React from 'react';
import {styled} from "@mui/material/styles";

export const UiVerticalMenuDivider = ({margin}) => {

    const VerticalMenuDivider = styled('div')(({ theme }) => ({
        borderBottom: '1px solid ' + theme.palette.line,
        margin: margin
    }));


    return (
        <VerticalMenuDivider />
    )
}
