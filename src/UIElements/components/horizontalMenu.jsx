import React from 'react';
import {styled} from "@mui/material/styles";
import {UiHorizontalMenuDivider} from "./horizontalMenuDevider";
import {Typography} from "@mui/material";

export const UiHorizontalMenu = ({children, type, icon, heroTitle, heroSubtext}) => {

    const HorizontalMenu = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 16,
        padding: 10,
        background: theme.palette.transparent['light-90'],
        justifyContent: 'space-between',
        gap: 2
    }));
    const HorizontalMenuHeroBox = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 10px 4px',
        alignItems: 'center',
        alignContent: 'center',
    }));


    return (
        <>
            {type && type === 'hero' &&
                <HorizontalMenu>
                    <HorizontalMenuHeroBox>
                        {icon && icon}
                        <Typography variant="type-24" component="p" sx={{color: (theme) => theme.palette.text['high'], marginLeft: '10px', marginRight: '12px'}}>
                            {heroTitle}
                        </Typography>
                        <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.text['low'], width: 30}}>
                            {heroSubtext}
                        </Typography>
                    </HorizontalMenuHeroBox>
                    <UiHorizontalMenuDivider />
                    {children}
                </HorizontalMenu>
            }
            {/* eslint-disable-next-line no-mixed-operators */}
            {!type && type !== 'hero' &&
            <HorizontalMenu>
                {children}
            </HorizontalMenu>
            }
        </>
    )
}
