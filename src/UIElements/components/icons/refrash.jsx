import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const RefreshIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 12 12'}>
            <path d="M6 0.75C3.10492 0.75 0.75 3.1055 0.75 6H1.91667C1.91667 3.74833 3.74892 1.91667 6 1.91667C7.27464 1.91667 8.40637 2.5098 9.15478 3.42855L7.75 4.83333H11.25V1.33333L9.98649 2.59684C9.02449 1.46847 7.59627 0.75 6 0.75ZM10.0833 6C10.0833 8.25108 8.25108 10.0833 6 10.0833C4.72536 10.0833 3.59363 9.4902 2.84521 8.57145L4.25 7.16667H0.75V10.6667L2.01351 9.40316C2.97551 10.5315 4.40373 11.25 6 11.25C8.89508 11.25 11.25 8.89508 11.25 6H10.0833Z" />
        </SvgIcon>
    );
}

