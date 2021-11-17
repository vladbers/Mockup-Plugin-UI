import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const HelpiIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8c0-4.409 3.591-8 8-8s8 3.591 8 8-3.591 8-8 8-8-3.591-8-8zm14.4 0c0-3.544-2.856-6.4-6.4-6.4A6.388 6.388 0 0 0 1.6 8c0 3.544 2.856 6.4 6.4 6.4 3.544 0 6.4-2.856 6.4-6.4zM8 3.2a3.2 3.2 0 0 0-3.2 3.2h1.6c0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .745-.52 1.207-1.077 1.7-.638.567-1.323 1.175-1.323 2.3h1.6c0-.592.482-1.055 1.015-1.566.655-.63 1.385-1.33 1.385-2.434A3.2 3.2 0 0 0 8 3.2zm-.8 9.6v-1.6h1.6v1.6H7.2z" />
        </SvgIcon>
    );
}

