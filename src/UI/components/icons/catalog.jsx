import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const CatalogIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M7.273 0c-.804 0-1.455.65-1.455 1.455v13.09c0 .804.651 1.455 1.455 1.455h7.273c.803 0 1.454-.651 1.454-1.455V1.455C16 .65 15.35 0 14.546 0H7.273zM3.625.717a.727.727 0 0 0-.716.738v13.09a.728.728 0 1 0 1.455 0V1.455a.727.727 0 0 0-.739-.738zm-2.909.728A.727.727 0 0 0 0 2.182v11.636a.727.727 0 1 0 1.455 0V2.182a.727.727 0 0 0-.739-.737z" />
        </SvgIcon>
    );
}

