import React from 'react';
import {styled} from "@mui/material/styles";
import {UiVerticalMenuDivider} from "./VerticalMenuDevider";
import {Typography} from "@mui/material";


const VerticalMenu = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16,
    background: theme.palette.transparent['light-90'],
    justifyContent: 'space-between',
    gap: 2
}));
const VerticalMenuHeroBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '20px 20px 14px',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
}));


export const UiVerticalMenu = ({children, type, icon, heroTitle, heroSubtext, onClick}) => {

    return (
        <>
            {type && type === 'hero' &&
                <VerticalMenu>
                    <VerticalMenuHeroBox onClick={onClick}>
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
