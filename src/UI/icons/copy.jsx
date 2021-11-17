import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const CopyIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 0C3.592 0 0 3.592 0 8c0 4.408 3.592 8 8 8 4.408 0 8-3.592 8-8 0-4.408-3.592-8-8-8zm0 11.2c.88 0 1.6-.72 1.6-1.6h1.6a3.2 3.2 0 1 1-6.4 0V6.4a3.2 3.2 0 1 1 6.4 0H9.6c0-.88-.72-1.6-1.6-1.6-.88 0-1.6.72-1.6 1.6v3.2c0 .88.72 1.6 1.6 1.6z" />
        </SvgIcon>
    );
}

