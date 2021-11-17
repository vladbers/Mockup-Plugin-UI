import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const NewWindowIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M11.995 3a.998.998 0 0 0-.111.01h-6.87a1 1 0 1 0 0 2H9.6l-6.293 6.293a1 1 0 1 0 1.415 1.414l6.292-6.293v4.586a1 1 0 1 0 2 0V4.137A1 1 0 0 0 11.995 3z" />
        </SvgIcon>
    );
}

