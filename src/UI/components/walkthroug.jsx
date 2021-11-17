import * as React from 'react';
import {styled} from '@mui/material/styles';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';


const Wg = styled(({className, ...props}) => (
    <Tooltip {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.pure['white'],
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.transparent['light-90'],
        boxShadow: '10px 42.66px 45.32px -13.99px rgba(0, 0, 0, 0.1483)',
        borderRadius: 16,
        backdropFilter: 'blur(94px)',
        color: theme.palette.text['high'],
        fontSize: theme.typography['type-14'].fontSize,
        fontFamily: theme.typography['type-14'].fontFamily,
        fontWeight: theme.typography['type-14'].fontWeight,
        lineHeight: theme.typography['type-14'].lineHeight,
        padding: '20px'
    },
}));


export const Walkthroug = (props) => {
    return (
        <Wg {...props} />
    );
}
