import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const SearchIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm-.665 5.249a6.5 6.5 0 1 1 1.414-1.414l3.376 3.376a1 1 0 0 1-1.414 1.414l-3.376-3.376z" />
        </SvgIcon>
    );
}

