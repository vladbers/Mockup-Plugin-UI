import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const LogoutIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M7.995 0c3.101 0 5.792 1.775 7.116 4.363a.667.667 0 1 1-1.186.607 6.652 6.652 0 0 0-5.93-3.637A6.655 6.655 0 0 0 1.333 8a6.655 6.655 0 0 0 6.662 6.667 6.652 6.652 0 0 0 5.93-3.637.67.67 0 0 1 .652-.386.666.666 0 0 1 .534.993A7.994 7.994 0 0 1 7.995 16C3.588 16 0 12.41 0 8s3.588-8 7.995-8zm.673 4.66a.666.666 0 0 1 .465 1.145L7.605 7.333h7.72a.666.666 0 1 1 0 1.334h-7.72l1.528 1.528a.666.666 0 1 1-.943.943L5.584 8.53a.667.667 0 0 1 .001-1.061L8.19 4.862a.666.666 0 0 1 .478-.202z" />
        </SvgIcon>
    );
}
