import React from 'react';
import {styled} from "@mui/material/styles";

const VerticalMenuDivider = styled('div')(({ theme }) => ({
    borderBottom: '1px solid ' + theme.palette.line,
}));


export const UiVerticalMenuDivider = ({margin}) => {

    return (
        <VerticalMenuDivider sx={{margin: margin}}/>
    )
}
