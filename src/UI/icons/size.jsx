import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const SizeIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M14.77 2H1.23C.55 2 0 2.55 0 3.23v9.847c0 .68.55 1.23 1.23 1.23h13.54c.68 0 1.23-.55 1.23-1.23V3.23C16 2.55 15.45 2 14.77 2zM4.307 4.462H2.462v1.846a.615.615 0 1 1-1.231 0V3.846c0-.34.275-.615.615-.615h2.462a.615.615 0 1 1 0 1.23zm10.461 8c0 .34-.275.615-.615.615h-2.462a.615.615 0 1 1 0-1.23h1.847V10a.615.615 0 1 1 1.23 0v2.461z" />
        </SvgIcon>
    );
}

