import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const ResizeIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M0 3.333A3.334 3.334 0 0 1 3.333 0h9.334A3.334 3.334 0 0 1 16 3.333v9.334A3.334 3.334 0 0 1 12.667 16H3.333A3.334 3.334 0 0 1 0 12.667V3.333zm11.429.857H8.762a.38.38 0 1 0 0 .762h1.747L8.604 6.857h-3.27c-.63 0-1.144.513-1.144 1.143v2.667c0 .63.513 1.143 1.143 1.143H8c.63 0 1.143-.513 1.143-1.143V7.396l1.905-1.905v1.747a.38.38 0 1 0 .761 0V4.571a.38.38 0 0 0-.38-.38z" />
        </SvgIcon>
    );
}

