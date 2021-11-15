import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const MockSizeIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="#152557" fill-opacity="0.05"/>
            <path d="M5.33532 12H6.44327L7.97381 6.55256H8.03063L9.56117 12H10.6656L12.6862 4.72727H11.5285L10.1151 10.3629H10.0477L8.57395 4.72727H7.43049L5.95676 10.3594H5.88929L4.47239 4.72727H3.31827L5.33532 12Z" fill="#8C94A1"/>
        </SvgIcon>
    );
}




