import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const TurnLeftIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 19 20'}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.91897 3.6V2.4C3.91897 1.73726 4.45623 1.2 5.11897 1.2H6.91897C7.25034 1.2 7.51897 0.931371 7.51897 0.6C7.51897 0.268629 7.25035 0 6.91897 0H5.11897C3.79349 0 2.71897 1.07452 2.71897 2.4V3.6H1.6C1.0913 3.6 0.813403 4.19331 1.13907 4.58411L2.85804 6.64688C3.09792 6.93473 3.54003 6.93473 3.77991 6.64688L5.49888 4.58411C5.82455 4.19331 5.54665 3.6 5.03795 3.6H3.91897Z" fill="#505050"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.119 0C18.4445 0 19.519 1.07452 19.519 2.4V10.8C19.519 12.1255 18.4445 13.2 17.119 13.2H15.919V10.8C15.919 8.81177 14.3072 7.2 12.319 7.2H8.71897V2.4C8.71897 1.07452 9.79349 0 11.119 0H17.119Z" fill="#505050"/>
            <rect x="0.6" y="0.6" width="9.6" height="12" rx="1.8" transform="matrix(0 1 1 0 1.51897 8.3999)" fill="#E3F4FF" stroke="#006BF5" stroke-width="1.2"/>
        </SvgIcon>
    );
}

