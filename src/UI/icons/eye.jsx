import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const EyeIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 3C3.244 3 .171 7.913.116 8.002a.533.533 0 0 0-.027.625c.009.019 2.588 5.04 7.911 5.04 5.3 0 7.876-4.972 7.907-5.033a.533.533 0 0 0-.022-.631C15.828 7.912 12.755 3 8 3zm0 1.6a3.733 3.733 0 1 1 0 7.467A3.733 3.733 0 0 1 8 4.6zm0 2.133a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
        </SvgIcon>
    );
}

