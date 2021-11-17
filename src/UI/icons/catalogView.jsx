import React from 'react';
import {SvgIcon} from "@mui/material";

// Иконка создана по примеру из mui https://mui.com/components/icons/

export const CatalogViewIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox={'0 0 16 16'}>
            <path d="M1.6 0A1.6 1.6 0 0 0 0 1.6v4c0 .874.726 1.6 1.6 1.6h4c.874 0 1.6-.726 1.6-1.6v-4A1.6 1.6 0 0 0 5.6 0h-4zm8.8 0a1.6 1.6 0 0 0-1.6 1.6v4c0 .874.726 1.6 1.6 1.6h4c.874 0 1.6-.726 1.6-1.6v-4A1.6 1.6 0 0 0 14.4 0h-4zM1.6 1.5h4v4.1h-4V1.5zm8.8 0h4v4.1h-4V1.5zM1.6 8.8A1.6 1.6 0 0 0 0 10.4v4c0 .874.726 1.6 1.6 1.6h4c.874 0 1.6-.726 1.6-1.6v-4a1.6 1.6 0 0 0-1.6-1.6h-4zm8.8 0a1.6 1.6 0 0 0-1.6 1.6v4c0 .874.726 1.6 1.6 1.6h4c.874 0 1.6-.726 1.6-1.6v-4a1.6 1.6 0 0 0-1.6-1.6h-4zm-8.8 1.5h4v4.1h-4v-4.1zm8.8 0h4v4.1h-4v-4.1z" />
        </SvgIcon>
    );
}

