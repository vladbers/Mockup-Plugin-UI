import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const CursorIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M7.154 0c-.68 0-1.23.55-1.23 1.23V10.77c-1.571-.8-2.285-.923-3.078-.923-.92 0-1.84.355-1.845 1.53l2.768 1.24 1.943 1.942A4.925 4.925 0 0 0 9.194 16h4.114a2.462 2.462 0 0 0 2.461-2.461V7.385a1.23 1.23 0 0 0-2.342-.524 1.093 1.093 0 0 1-.12-.092 1.23 1.23 0 0 0-2.46 0v-.615a1.23 1.23 0 1 0-2.462 0V1.23C8.385.55 7.834 0 7.154 0zM1 11.376H1v.009l.001-.009z" />
        </SvgIcon>
    );
}

