import * as React from 'react';
import Box from '@mui/material/Box';
import {makeStyles} from "@mui/styles";
import {CloseIcon} from "../icons/close";
import {UiRoundButton} from "./roundButton";


const useStyles = makeStyles(theme => ({
    banner: {
        borderRadius: 36,
        backgroundColor: theme.palette.transparent['dark-60'],
        backdropFilter: 'blur(9px)',
        color: theme.palette.pure['white'],
        padding: '72px 20px',
        display: 'flex',
        flexDirection: 'column'
    },
    closeBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1
    },
    bodyBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        gap: '14px'
    },
    headerText: {
        fontSize: theme.typography['type-24'].fontSize,
        fontWeight: theme.typography['type-24'].fontWeight,
        fontFamily: theme.typography['type-24'].fontFamily,
        lineHeight: theme.typography['type-24'].lineHeight,
        textAlign: 'center',
        /* Pure White */
        color: theme.palette.pure['white'],
        flex: 'none',
        order: 0,
        flexGrow: 0,
    },
    subText: {
        fontSize: theme.typography['type-14'].fontSize,
        fontWeight: theme.typography['type-14'].fontWeight,
        fontFamily: theme.typography['type-14'].fontFamily,
        lineHeight: theme.typography['type-14'].lineHeight,
        textAlign: 'center',
        /* Pure White */
        color: theme.palette.transparent['light-70'],
        flex: 'none',
        order: 0,
        flexGrow: 0,
    }
}));


export const UiPopupInfo = ({close, title, subtext, button}) => {
    const classes = useStyles();


    return (
        <Box sx={{position: 'relative'}}>
                <div className={classes.closeBox}>
                    <UiRoundButton
                        icon={<CloseIcon sx={{width: 16, color: (theme) => theme.palette.pure['white']}}/>}
                        onClick={() => close(false)}/>
                </div>
                <div className={classes.banner}>
                    <div className={classes.bodyBox}>
                        <div className={classes.headerText}>
                            {title}
                        </div>
                        <div className={classes.subText}>
                            {subtext}
                        </div>
                        {button && <div>
                            {button}
                        </div>}
                    </div>
                </div>
        </Box>
    );
}
