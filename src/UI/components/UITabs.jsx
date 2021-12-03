import * as React from 'react';
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {useState} from "react";


const useStyles = makeStyles(theme => ({
    tabPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        webkitBackdropFilter: 'blur(94px)',
        backdropFilter: 'blur(94px)',
        backgroundColor: theme.palette.transparent['dark-5'],
        padding: 2
    },
    tabButton: {
        padding: '8px 7px',
        cursor: 'pointer',
        transition: '1.5s',
    },
    tabActive: {
        padding: '8px 7px',
        borderRadius: 8,
        backgroundColor: theme.palette.pure['white'],
        boxShadow: '1px 1px 1px 0 rgba(0, 0, 0, 0.08), 4px 4px 3px 0 rgba(0, 0, 0, 0.01)',
        cursor: 'pointer',
        transition: '1.5s',
    },
    subtextSpan: {
        flexGrow: 0,
        textAlign: 'left',
        color: theme.palette.transparent['dark-45']
    }
}))

export const UiTabsHeader = ({tabs, selectedID, defaultTabId}) => {
    const [selected, setSelected] = useState(defaultTabId ? defaultTabId : 0);
    const classes = useStyles()

    const dispatchTab = (id) => {
        selectedID(id);
        setSelected(id);
    }

    const TabPanel = (props) => {
        return (
            <div className={classes.tabPanel}>{props.children}</div>
        )
    }
    const TabSubtext = ({text}) => {
        return <>
            {text.length > 0 &&
                    <span className={classes.subtextSpan}>{text}</span>
            }
        </>
    }
    const TabButton = (props) => {
        return (
            <div className={selected === props.id ? classes.tabActive : classes.tabButton} key={props.id} onClick={() => props.click(props.id)}>
                <Typography variant="type-12" component="p" sx={{ color: (theme) => theme.palette.text['high'] }}>
                    {props.label} <TabSubtext text={props.subtext}/>
                </Typography>
            </div>
        )
    }
    return (<>
        <TabPanel>
            {tabs.map(tab => <TabButton id={tab.id} label={tab.label} subtext={tab.subtext} click={dispatchTab}/>)}
        </TabPanel>
    </>);
}
