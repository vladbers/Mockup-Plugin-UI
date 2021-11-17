import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const ArrowIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M11.071 4.121a1 1 0 0 0-1.414-1.414L4.013 8.351a.018.018 0 0 0 0 .026.018.018 0 0 1 0 .025.018.018 0 0 0 0 .025l5.644 5.644a1 1 0 0 0 1.414-1.414L6.803 8.389l4.268-4.268z" />
        </SvgIcon>
    );
}

