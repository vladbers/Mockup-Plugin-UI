import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const MenuIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1z" />
        </SvgIcon>
    );
}

