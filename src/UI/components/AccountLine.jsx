import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

const CcountLine = styled('div')(({theme}) => ({

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
const AutoReNewBox = styled('div')(({theme}) => ({
    marginTop: '10px',
    display: 'flex',
    gap: '8px'
}));

export const UiAccountLine = ({data, clickToCancel}) => {

    const LineDays = ({days, eventTime}) => {
        const nextBuildDate = new Date(days * 1000);
        const today = new Date();
        const daysLeft = Math.floor((nextBuildDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        const prevPayDate = new Date(eventTime * 1000)
        const sumPercents = (next, prev, cur) => {
            const fullSum = next - prev;
            const numberOfPercents = next - cur;
            // Формула вычисления процента числа от числа: 141 * 100 / 155
            return (numberOfPercents * 100) / fullSum;
        };
        const remainingPercent = sumPercents(nextBuildDate.getTime(), prevPayDate.getTime(), today.getTime());
        console.log('remainingPercent', remainingPercent)
        return <>
            <BoxLine>
                <DaysLine sx={{ background: (theme) => theme.palette.accent['one'], width: `${remainingPercent}%` }}>
                    <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.pure['white']}}>{daysLeft} days left</Typography>
                </DaysLine>
            </BoxLine>
        </>
    }
    const AutoReNew = ({days, cancelClick}) => {
        // we use to en-US locale timezone converter
        const nextBuildDate = new Date(days * 1000);
        let options = {year: 'numeric', month: 'short', day: 'numeric'};
        return <>
            <AutoReNewBox>
                 <Typography variant="type-12" component="p" sx={{color: (theme) => theme.palette.text['low']}}>
                     Autorenew on {nextBuildDate.toLocaleString('en-US', options)}
                 </Typography>
                <Typography variant="type-12" component="span" sx={{
                    color: (theme) => theme.palette.accent['two'],
                    cursor: 'pointer'
                }}
                            onClick={cancelClick}
                >
                    Cancel
                </Typography>
            </AutoReNewBox>
        </>
    }

    return (
        <CcountLine>
            {data.subscriptions.map(subscription =>
                <>
                    <Typography variant="type-16" component="p" sx={{
                        color: '#353946',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>{subscription.subscriptionTitle}
                    </Typography>
                    <LineDays days={subscription.daysLeft} eventTime={subscription.eventTime} />
                    <AutoReNew days={subscription.daysLeft} cancelClick={clickToCancel}/>
                </>
            )}
        </CcountLine>
    )
}
