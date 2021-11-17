import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const PlusIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm4 8.667H8.667V12a.667.667 0 0 1-1.334 0V8.667H4a.667.667 0 0 1 0-1.334h3.333V4a.667.667 0 0 1 1.334 0v3.333H12a.667.667 0 0 1 0 1.334z" />
        </SvgIcon>
    );
}

