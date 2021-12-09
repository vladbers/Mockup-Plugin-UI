import React from 'react';
import {styled} from "@mui/material/styles";
import {IconButton} from "@mui/material";

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

export const UiRoundButton = ({icon, variant, onClick}) => {


    return (
        icon && <RoundButton onClick={variant !== 'ignore' && onClick}>{icon}</RoundButton>
    )
}
