import React from 'react';
import {styled} from "@mui/material/styles";
import {MenuIcon} from "../icons/menu";

const HorizontalMenu = styled('div')(({theme}) => ({
    position: 'relative',
    background: theme.palette.pure['white'],
    zIndex: '0',
}));
const DividerAfterMenu = styled('div')(({theme}) => ({
    position: 'absolute',
    height: 1,
    backgroundColor: '#e1e4e8',
    bottom: 0,
    width: '100%',
    zIndex: '-1',
}));
const Padding = styled('div')(({theme}) => ({
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
}));
const FixerElementor = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    gap: 20
}));

export const UiHorizontalMenu = ({children, button, onClickBurger}) => {



    return (
        <HorizontalMenu>
           <Padding>
               <div style={{width: 'auto'}}>
                   {children}
               </div>
               <FixerElementor style={{width: 'auto'}}>
                   {button}
                   <div onClick={onClickBurger}>
                       <MenuIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                   </div>
               </FixerElementor>
           </Padding>
            <DividerAfterMenu />
        </HorizontalMenu>
    )
}
