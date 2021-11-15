import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const ErrorIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.964 1.613A1.279 1.279 0 0 1 8.077 1c.435 0 .87.204 1.113.613l6.79 11.401c.5.84-.142 1.986-1.113 1.986H1.285c-.97 0-1.611-1.146-1.11-1.986l6.79-11.4zm7.585 11.924L8.135 2.767 1.72 13.538h12.828zM7.305 5.652v3.895h1.544V5.652H7.305zm0 7.01v-1.557h1.544v1.558H7.305z" />
        </SvgIcon>
    );
}

