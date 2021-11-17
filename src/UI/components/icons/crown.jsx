import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const CrownIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 1.066a1.067 1.067 0 0 0-.502 2.008l-2.11 3.955-2.87-1.689a1.067 1.067 0 1 0-.812.52l.427 4.273H13.866l.428-4.272A1.069 1.069 0 0 0 15.466 4.8a1.066 1.066 0 1 0-1.985.54l-2.87 1.689-2.109-3.955A1.067 1.067 0 0 0 8 1.066zM2.133 11.2v1.066c0 .59.478 1.067 1.067 1.067h9.6c.59 0 1.066-.477 1.066-1.067V11.2H2.133z" />
        </SvgIcon>
    );
}

