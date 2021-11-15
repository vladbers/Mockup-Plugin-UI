import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const CloseIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M2.707 13.707a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 1 1 1.414 1.415l-9.9 9.9a1 1 0 0 1-1.414 0z" />
            <path d="M2.707 2.393a1 1 0 0 1 1.414 0l9.9 9.9a1 1 0 0 1-1.414 1.414l-9.9-9.9a1 1 0 0 1 0-1.414z" />
        </SvgIcon>
    );
}

