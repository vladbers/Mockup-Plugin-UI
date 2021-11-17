import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const HelpIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1.379-4.667c-.442.408-.712.675-.712 1H7.333c0-.926.633-1.51 1.141-1.98.533-.492.86-.82.86-1.353a1.335 1.335 0 0 0-2.667 0H5.333A2.67 2.67 0 0 1 8 3.333 2.67 2.67 0 0 1 10.667 6c0 1.143-.714 1.803-1.288 2.333z" />
        </SvgIcon>
    );
}

