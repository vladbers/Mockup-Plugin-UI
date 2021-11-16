import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const StyleIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M8 0a8 8 0 0 0 0 16h.667a2 2 0 0 0 2-2v-2c0-.737.596-1.333 1.333-1.333h2.667c.736 0 1.333-.597 1.333-1.334V8a8 8 0 0 0-8-8zm0 1.333A1.333 1.333 0 1 1 8 4a1.333 1.333 0 0 1 0-2.666zm-5.333 8a1.333 1.333 0 1 1-.001-2.666 1.333 1.333 0 0 1 0 2.666zm5 5.334a1.666 1.666 0 1 1 0-3.333 1.666 1.666 0 0 1 0 3.333zm5.666-5.334a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666zm-.619-4.162a1.333 1.333 0 1 1-1.885-1.885 1.333 1.333 0 0 1 1.885 1.885zm-9.428 0a1.333 1.333 0 1 1 1.885-1.885 1.333 1.333 0 0 1-1.885 1.885z" />
        </SvgIcon>
    );
}
