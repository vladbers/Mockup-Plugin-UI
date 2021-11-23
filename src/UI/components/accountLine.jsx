import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const UiAccountLine = ({data}) => {

    const AccountLine = styled('div')(({theme}) => ({

    }));
    const BoxLine = styled('div')(({theme}) => ({
        background: theme.palette.transparent['dark-5'],
        borderRadius: '7px',
    }));
    const DaysLine = styled('div')(({theme}) => ({
        background: theme.palette.transparent['dark-5'],
        borderRadius: '7px',
        padding: '7px 9px'
    }));

    const LineDays = ({days}) => {
        const next_build_date = new Date(days * 1000);
        const today = new Date();
        const days_left = Math.floor((next_build_date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        const remaining_percent = 50;
        return <>
            <BoxLine>
                <DaysLine sx={{ background: (theme) => theme.palette.accent['one'], width: `${remaining_percent}%` }}>
                    <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.pure['white']}}>{days_left} days left</Typography>
                </DaysLine>
            </BoxLine>
        </>
    }


    return (
        <AccountLine>
            {data.subscriptions.map(subscription =>
                <>
                    <Typography variant="type-16" component="p" sx={{
                        color: '#353946',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>{subscription.subscriptionTitle}
                    </Typography>
                    <LineDays days={subscription.daysLeft} />
                </>
            )}
        </AccountLine>
    )
}
