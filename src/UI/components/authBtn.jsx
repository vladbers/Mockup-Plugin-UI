import React from 'react';
import {Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
// Icons
import {GoogleIcon} from "../icons/ggl";
import {TwitterIcon} from "../icons/tw";
import {FacebookIcon} from "../icons/fb";

export const UiAuthButton = ({text, type, fullWidth, onClick}) => {

    const AuthButton = styled(Button)(({theme}) => ({
        borderRadius: 32,
        border: `solid 1px ${theme.palette.line}`,
        backgroundColor: theme.palette.pure['white'],
        boxShadow: 'none',
        padding: '7px 21px',
        '&:hover': {
            backgroundColor: theme.palette.background['default'],
            boxShadow: 'none'
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        }
    }));

    const createIcon = (t) => {
        // eslint-disable-next-line default-case
        switch (t) {
            case 'google':
                return <GoogleIcon sx={{width: 24}} />
            case 'facebook':
                return <FacebookIcon sx={{width: 24}} />
            case 'twitter':
                return <TwitterIcon sx={{width: 24}} />
        }
    }

    return (
        <AuthButton variant="contained" startIcon={type && createIcon(type)} fullWidth={fullWidth} onClick={onClick}>
            <Typography variant="type-14" sx={{ textTransform: 'none', flexGrow: 0, textAlign: 'left', color: (theme) => theme.palette.text['low'] }}>
                {text}
            </Typography>
        </AuthButton>
    )
}
