import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {UiChekBox} from "./checkBox";

export const WalkthrougThemeComponent = ({children, defaultChecked, onChange}) => {

    const ThemeComponent = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start'
    }));


    return (
        <>
            <Typography color="inherit">
                {children}
            </Typography>
            <ThemeComponent sx={{marginTop: '20px'}}>
                <ThemeComponent>
                    <UiChekBox defaultChecked={defaultChecked} onChange={onChange} style={{padding: '0px', marginRight: '10px'}}/>
                </ThemeComponent>
                <ThemeComponent>
                    <Typography variant="type-12" component="p" sx={{color: (theme) => theme.palette.text['low']}}>
                        Don’t show again
                    </Typography>
                </ThemeComponent>
            </ThemeComponent>
        </>
    )
}


