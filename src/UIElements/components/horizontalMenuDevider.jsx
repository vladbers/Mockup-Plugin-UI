import React from 'react';
import {styled} from "@mui/material/styles";

export const UiHorizontalMenuDivider = () => {

    const UiHorizontalMenuDivider = styled('div')(({ theme }) => ({
        borderBottom: '1px solid ' + theme.palette.line,
        marginBottom: 10,
        marginTop: 10
    }));


    return (
        <UiHorizontalMenuDivider />
    )
}
