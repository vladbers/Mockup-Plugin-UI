import React from 'react';
import {styled} from "@mui/material/styles";
import Switch from '@mui/material/Switch';

const ToggleButton = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 18,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        color: theme.palette.pure['white'],
        '&.Mui-checked': {
            transform: 'translateX(14px)',
            color: theme.palette.pure['white'],
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.accent['one'],
            },
        },
    },
    '& .MuiSwitch-thumb': {
        width: 14,
        height: 14,
        borderRadius: 20,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 20,
        opacity: 1,
        backgroundColor: theme.palette.transparent['dark-5'],
        boxSizing: 'border-box',
    },
}));


export const UiToggleButton = ({variant, checked, handleChange}) => {

    return (
        <ToggleButton disabled={variant === 'ignore' && true} defaultChecked={checked}  onChange={handleChange} />
    )
}
