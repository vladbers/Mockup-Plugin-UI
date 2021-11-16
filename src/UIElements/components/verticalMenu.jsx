import React from 'react';
import {styled} from "@mui/material/styles";
import {UiVerticalMenuDivider} from "./verticalMenuDevider";
import {Typography} from "@mui/material";

export const UiVerticalMenu = ({children, type, icon, heroTitle, heroSubtext}) => {

    const VerticalMenu = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 16,
        padding: 10,
        background: theme.palette.transparent['light-90'],
        justifyContent: 'space-between',
        gap: 2
    }));
    const VerticalMenuHeroBox = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 10px 4px',
        alignItems: 'center',
        alignContent: 'center',
    }));


    return (
        <>
            {type && type === 'hero' &&
                <VerticalMenu>
                    <VerticalMenuHeroBox>
                        {icon && icon}
                        <Typography variant="type-24" component="p" sx={{color: (theme) => theme.palette.text['high'], marginLeft: '10px', marginRight: '12px'}}>
                            {heroTitle}
                        </Typography>
                        <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.text['low'], width: 30}}>
                            {heroSubtext}
                        </Typography>
                    </VerticalMenuHeroBox>
                    <UiVerticalMenuDivider />
                    {children}
                </VerticalMenu>
            }
            {/* eslint-disable-next-line no-mixed-operators */}
            {!type && type !== 'hero' &&
            <VerticalMenu>
                {children}
            </VerticalMenu>
            }
        </>
    )
}
