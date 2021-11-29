import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const UiChangeEmail = ({email, handlerChange}) => {

    const EmailBox = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.transparent['color-20'],
        padding: '13px 17px',
        borderRadius: '12px',
    }));


    return (
        <EmailBox>
            <Typography variant="type-14" component="p"
                        sx={{color: (theme) => theme.palette.text['high']}}>
                {email}
                <Typography variant="type-10" component="span"
                            onClick={handlerChange}
                            sx={{color: (theme) => theme.palette.accent['two'], cursor: 'pointer', marginLeft: '5px'}}>
                    Change
                </Typography>
            </Typography>
        </EmailBox>
    )
}
