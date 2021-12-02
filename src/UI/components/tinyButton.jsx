import React from 'react';
import {Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export const UiTinyButton = ({text, variant, icon, onClick}) => {

    const AccentButton = styled(Button)(({theme}) => ({
        padding: '4px 13px',
        borderRadius: "8px",
        backgroundColor: theme.palette.transparent['color-20'],
        color: theme.palette.accent['two'],
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.transparent['color-40'],
            boxShadow: 'none'
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        }
    }));

    const GreyButton = styled(Button)(({theme}) => ({
        padding: '4px 13px',
        borderRadius: "8px",
        color: theme.palette.text['low'],
        backgroundColor: theme.palette.transparent['dark-5'],
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.transparent['dark-10'],
            boxShadow: 'none'
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        }
    }));

    const DefaultButton = styled(Button)(({theme}) => ({
        padding: '4px 13px',
        borderRadius: "8px",
        opacity: 0.3,
        color: theme.palette.pure['white'],
        backgroundColor: theme.palette.text['low'],
        boxShadow: 'none',
        '&:hover': {
            color: theme.palette.pure['white'],
            backgroundColor: theme.palette.text['low'],
            boxShadow: 'none'
        },
        '& .MuiButton-startIcon': {
            marginLeft: 0
        }
    }));

    return (<>
            {variant === 'accent' && !icon &&
            <AccentButton variant="contained" onClick={onClick}>
                <Typography variant="type-12" sx={{ textTransform: 'none' }}>
                    {text}
                </Typography>
            </AccentButton>
            }
            {variant === 'grey' && !icon &&
            <GreyButton variant="contained" onClick={onClick}>
                <Typography variant="type-12" sx={{ textTransform: 'none' }}>
                    {text}
                </Typography>
            </GreyButton>
            }
            {!variant  && !icon &&
            <DefaultButton variant="contained" onClick={onClick}>
                <Typography variant="type-12" sx={{ textTransform: 'none' }}>
                    {text}
                </Typography>
            </DefaultButton>
            }
            {variant === 'accent' && icon &&
            <AccentButton variant="contained" startIcon={icon} onClick={onClick}>
                <Typography variant="type-12" sx={{ textTransform: 'none' }}>
                    {text}
                </Typography>
            </AccentButton>
            }
            {variant === 'grey' && icon &&
            <GreyButton variant="contained" startIcon={icon} onClick={onClick}>
                <Typography variant="type-12" sx={{ textTransform: 'none' }}>
                    {text}
                </Typography>
            </GreyButton>
            }
            {!variant  && icon &&
            <DefaultButton variant="contained" startIcon={icon} onClick={onClick}>
                <Typography variant="type-12" sx={{ textTransform: 'none' }}>
                    {text}
                </Typography>
            </DefaultButton>
            }
        </>
    )
}
