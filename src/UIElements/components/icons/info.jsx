import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const InfoIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.667 12H7.333V7.333h1.334V12zM8 5.667a1 1 0 1 1 0-2.001 1 1 0 0 1 0 2z" />
        </SvgIcon>
    );
}

