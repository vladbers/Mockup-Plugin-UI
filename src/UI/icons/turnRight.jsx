import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const TurnRightIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 19 20'}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.6 3.6V2.4C15.6 1.73726 15.0627 1.2 14.4 1.2H12.6C12.2686 1.2 12 0.931371 12 0.6C12 0.268629 12.2686 0 12.6 0H14.4C15.7255 0 16.8 1.07452 16.8 2.4V3.6H17.919C18.4277 3.6 18.7056 4.19331 18.3799 4.58411L16.6609 6.64688C16.4211 6.93473 15.9789 6.93473 15.7391 6.64688L14.0201 4.58411C13.6944 4.19331 13.9723 3.6 14.481 3.6H15.6Z"
                  fill="#505050"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.4 0C1.07452 0 0 1.07452 0 2.4V10.8C0 12.1255 1.07452 13.2 2.4 13.2H3.6V10.8C3.6 8.81177 5.21178 7.2 7.2 7.2H10.8V2.4C10.8 1.07452 9.72548 0 8.4 0H2.4Z"
                  fill="#505050"/>
            <rect x="17.4" y="8.9999" width="9.6" height="12" rx="1.8" transform="rotate(90 17.4 8.9999)" fill="#E3F4FF"
                  stroke="#006BF5" stroke-width="1.2"/>
        </SvgIcon>
    );
}

