import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {CloseIcon} from "../icons/close";
import {UiRoundButton} from "./roundButton";


const useStyles = makeStyles(theme => ({
    banner: {
        borderRadius: 24,
        backgroundColor: theme.palette.transparent['dark-60'],
        backdropFilter: 'blur(9px)',
        color: theme.palette.pure['white'],
        padding: 12,
        position: 'relative'
    },
    iconBox: {
        display: 'flex',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 10
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    boxRoot: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    }
}));

// Fixed Bug
const AlertBanner = styled(Alert)(() => ({
    '& .MuiAlert-message': {
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        justifyContent: 'space-between'
    }
}));

export const UiBanner = ({close, icon, title, subtext}) => {
    const classes = useStyles();


    return (
        <AlertBanner icon={false} className={classes.banner}>
            <div className={classes.boxRoot}>
                {icon.element && <div className={classes.iconBox} style={{background: icon.background}}>
                    {icon.element}
                </div>}
                <div className={classes.textBox}>
                    <Typography variant="type-14" component="p" sx={{color: (theme) => theme.palette.pure['white']}}>
                        {title}
                    </Typography>
                    <Typography variant="type-14" component="span" sx={{color: (theme) => theme.palette.transparent['light-70']}}>
                        {subtext}
                    </Typography>
                </div>
            </div>
            <UiRoundButton icon={<CloseIcon sx={{width: 16, color: (theme) => theme.palette.pure['white']}} />} onClick={() => close(false)} />
        </AlertBanner>
    );
}
