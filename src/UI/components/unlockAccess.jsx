import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {TableContainer} from "./tabsContainer";
import {UiBigButton} from "./bigButton";


const useStyles = makeStyles(theme => ({
    tabPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        webkitBackdropFilter: 'blur(94px)',
        backdropFilter: 'blur(94px)',
        backgroundColor: theme.palette.accent['two'],
        padding: 2
    },
    tabButton: {
        padding: '8px 7px',
        cursor: 'pointer',
        transition: '1.5s',
    },
    tabActive: {
        padding: '6.5px',
        borderRadius: 8,
        backgroundColor: theme.palette.pure['white'],
        boxShadow: '1px 1px 1px 0 rgba(0, 0, 0, 0.08), 4px 4px 3px 0 rgba(0, 0, 0, 0.01)',
        cursor: 'pointer',
        transition: '1.5s',
    },
    subtextSpan: {
        flexGrow: 0,
        textAlign: 'left',
        color: theme.palette.transparent['light-70']
    },
    subtextSpanActive: {
        color: theme.palette.accent['two']
    },
    ulHeader: {
        padding: '0px',
        margin: '0px',
        marginTop: theme.spacingsValues.s
    },
    liBox: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        marginTop: '-6px'
    }
}))

const UnlockTabsHeader = ({tabs, selectedID, defaultTabId}) => {
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
    const TabSubtext = ({text, id}) => {
        return <>
            {text.length > 0 &&
            <span className={selected === id ? classes.subtextSpanActive : classes.subtextSpan}>{text}</span>
            }
        </>
    }
    const TabButton = (props) => {
        return (
            <div className={selected === props.id ? classes.tabActive : classes.tabButton} key={props.id}
                 onClick={() => props.click(props.id)}>
                <Typography variant="type-12" component="p" sx={{
                    color: (theme) => selected === props.id ? theme.palette.text['high'] : theme.palette.pure['white'],
                    fontWeight: 'bold'
                }}>
                    {props.label} <TabSubtext text={props.subtext} id={props.id}/>
                </Typography>
            </div>
        )
    }
    return (<TabPanel>
        {tabs.map(tab => <TabButton id={tab.id} label={tab.label} subtext={tab.subtext} click={dispatchTab}/>)}
    </TabPanel>);
}

export const UiUnlockAccess = (props) => {

    const classes = useStyles()

    const [mockTabContent, setMockTabContent] = useState(1);

    const UnlockAccess = styled('div')(({theme}) => ({
        backgroundColor: theme.palette.accent['one'],
        borderRadius: '16px',
        padding: '20px',
    }));

    const InnerBlockStart = styled('div')(({theme}) => ({
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        gap: '8px',
    }));

    const InnerBlockEnd = styled('div')(({theme}) => ({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center',
        gap: '8px',
    }));

    const UnlockAccessHeader = styled('div')(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    }));
    const UnlockAccessDivider = styled('div')(({theme}) => ({
        width: '100%',
        height: 1,
        backgroundColor: theme.palette.transparent['light-40'],
        marginBottom: '9.4px',
        marginTop: '11.7px'
    }));
    const UnlockAccessBody = styled('div')(({theme}) => ({}));
    const UnlockAccessFooter = styled('div')(({theme}) => ({
        marginTop: '35px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        gap: '7px'
    }));


    return (
        <UnlockAccess>
            <UnlockAccessHeader>
                <InnerBlockStart>
                    {props.icon}
                    <Typography variant="type-20" component="p" sx={{color: (theme) => theme.palette.pure['white']}}>
                        {props.title}
                    </Typography>
                </InnerBlockStart>
                <InnerBlockEnd>
                    <UnlockTabsHeader
                        tabs={props.tabArray} defaultTabId={mockTabContent}
                        selectedID={(e) => setMockTabContent(e)}
                    />
                </InnerBlockEnd>
            </UnlockAccessHeader>
            <UnlockAccessDivider/>
            {props.tabArray.map((tab) =>
                <TableContainer value={mockTabContent} index={tab.id}>
                    <UnlockAccessBody>
                        <Typography variant="type-20" component="p" sx={{color: (theme) => theme.palette.pure['white']}}>
                            {tab.heroText}
                        </Typography>
                        <ul className={classes.ulHeader}>{tab.listText.map(list => <li className={classes.liBox}>
                            <Typography variant="type-24" component="span" sx={{color: (theme) => theme.palette.pure['white']}}>
                                ·
                            </Typography>
                            <Typography variant="type-14" component="p" sx={{color: (theme) => theme.palette.pure['white'], fontWeight: 'bold'}}>
                                {list}
                            </Typography>
                        </li>)}</ul>
                    </UnlockAccessBody>
                    <UnlockAccessFooter>
                        <div>
                            <UiBigButton text={tab.buttonText} variant={'inner'} onClick={() => props.onclick(tab.label)} />
                        </div>
                        <div>
                            <Typography variant="type-20" component="p" sx={{color: (theme) => theme.palette.pure['white'], fontWeight: 'bold'}}>
                                {tab.price}{tab.currency}
                            </Typography>
                            <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.transparent['light-70']}}>
                                {tab.textAfterPrice}
                            </Typography>
                        </div>
                    </UnlockAccessFooter>
                    <UnlockAccessDivider/>
                    <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.transparent['light-70']}}>
                        {tab.footerText}
                    </Typography>
                </TableContainer>
            )}
        </UnlockAccess>
    )
}
