import React from 'react';
import {styled} from "@mui/material/styles";


const MenuPoint = styled('div')(({theme}) => ({
    minWidth: 168,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    padding: '6px 12px 6px 10px',
    gap: 6.4,
    borderRadius: 8,
    transition: '0.5s',
    cursor: 'pointer',
    '&:hover': {
        transition: '0.3s',
        backgroundColor: theme.palette.line
    }
}));
const PointEntery = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: theme.typography['type-14'].fontSize,
    fontWeight: theme.typography['type-14'].fontWeight,
    fontFamily: theme.typography['type-14'].fontFamily,
    lineHeight: theme.typography['type-14'].lineHeight,
    color: theme.palette.text['high']
}));

export const UiMenuPoint = ({icon, text, onClick, type}) => {

    return (
        <>
            {type === 'selected' &&
                <MenuPoint onClick={onClick} sx={{backgroundColor:(theme) => theme.palette.transparent['color-40'] ,'&:hover': {backgroundColor: (theme) => theme.palette.transparent['color-20']}}}>
                    {icon && <PointEntery>{icon}</PointEntery>} <PointEntery sx={{color: (theme) =>  theme.palette.accent['one']}}>{text}</PointEntery>
                </MenuPoint>
            }
            {type === 'icon' &&
                <MenuPoint onClick={onClick}>
                    {icon && <PointEntery>{icon}</PointEntery>} <PointEntery>{text}</PointEntery>
                </MenuPoint>
            }
            {type === 'small' &&
                <MenuPoint onClick={onClick} sx={{
                    '&:hover': {
                        transition: '0.3s',
                        backgroundColor: 'transparent!important'
                    }
                }}>
                    <PointEntery sx={{
                        fontSize: (theme) => theme.typography['type-12'].fontSize,
                        fontWeight: (theme) => theme.typography['type-12'].fontWeight,
                        fontFamily: (theme) => theme.typography['type-12'].fontFamily,
                        lineHeight: (theme) => theme.typography['type-12'].lineHeight,
                        color: (theme) => theme.palette.text['low']
                    }}>{text}</PointEntery>
                </MenuPoint>
            }
        </>
    )
}
