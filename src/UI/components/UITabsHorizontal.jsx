import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";

export const UITabsHorizontal = ({tabs, defaultTabId, selectedID}) => {
    const [value, setValue] = React.useState(defaultTabId ? defaultTabId : 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        selectedID(newValue);
    };

    const StyledTabs = styled((props) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    ))(({ theme }) => ({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 53,
            width: '100%',
            backgroundColor: theme.palette.accent['one'],
        },
    }));

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
            padding: 0,
            minWidth: 0,
            marginRight: 11,
            textTransform: 'none',
            fontFamily: theme.typography['type-14'].fontFamily,
            fontSize: theme.typography['type-14'].fontSize,
            fontWeight: theme.typography['type-14'].fontWeight,
            fontStyle: "normal",
            lineHeight: theme.typography['type-14'].lineHeight,
            letterSpacing: 0,
            color: theme.palette.text['high'],
            '&.Mui-selected': {
                color: theme.palette.accent['one'],
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        }),
    );


    return (
        <Box sx={{ width: '100%' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="ls_TabsHorizontal"
            >
                {tabs.map(tab => <StyledTab key={tab.id} value={tab.id} label={tab.label} />)}
            </StyledTabs>
        </Box>
    );
}
