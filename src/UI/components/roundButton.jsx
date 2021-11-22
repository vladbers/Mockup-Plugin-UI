import React from 'react';
import {styled} from "@mui/material/styles";
import {IconButton} from "@mui/material";

export const UiRoundButton = ({icon, variant, onClick}) => {

    const RoundButton = styled(IconButton)(({theme}) => ({
        width: 34,
        height: 34,
        borderRadius: 100,
        padding: 9,
        backgroundColor: theme.palette.transparent['dark-5'],
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.transparent['dark-10']
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        }
    }));


    return (
        icon && <RoundButton disabled={variant === 'ignore' && true} onClick={onClick}>{icon}</RoundButton>
    )
}
