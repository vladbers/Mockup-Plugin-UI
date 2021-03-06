import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {ArrowIcon} from "../icons/arrow";
import {InfoIcon} from "../icons/info";


const Subheader = styled('div')(({theme}) => ({
    background: 'transparent',
    paddingTop: '13px',
    paddingBottom: '13px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between'
}));

const StaticBlock = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    gap: 10
}));

const ColorBtn = styled('div')(({theme}) => ({
    width: 16,
    height: 16,
    borderRadius: 20,
    transition: '0.4s',
    cursor: 'pointer',
    '&:hover': {
        opacity: 0.9,
        transition: '0.4ms',
    }
}));


export const UiSubheader = ({title, type, onClickBack, onClickInfo, onClickColor, colors, defaultColorId, sx}) => {
    const [selected, setSelected] = useState(defaultColorId ? defaultColorId : 1);

    const setupColor = (e) => {
        onClickColor(e);
        setSelected(e.id)
    }

    return (
        <>
            {type === 'simple' &&
            <Subheader sx={sx}>
               <StaticBlock>
                   <div onClick={onClickBack} style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                       <ArrowIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                   </div>
                   <Typography variant="type-16" component="p" sx={{color: (theme) => theme.palette.text['high']}}>
                       {title}
                   </Typography>
               </StaticBlock>
            </Subheader>
            }
            {type === 'info' &&
            <Subheader sx={sx}>
                <StaticBlock>
                    <div onClick={onClickBack} style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ArrowIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                    </div>
                    <Typography variant="type-16" component="p" sx={{color: (theme) => theme.palette.text['high']}}>
                        {title}
                    </Typography>
                </StaticBlock>
                <StaticBlock>
                    <div onClick={onClickInfo} style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <InfoIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                    </div>
                </StaticBlock>
            </Subheader>
            }
            {type === 'colors' &&
            <Subheader sx={sx}>
                <StaticBlock>
                    <div onClick={onClickBack} style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ArrowIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                    </div>
                    <Typography variant="type-16" component="p" sx={{color: (theme) => theme.palette.text['high']}}>
                        {title}
                    </Typography>
                </StaticBlock>
                <StaticBlock sx={{gap: '6px'}}>
                    {colors.map(color => <ColorBtn onClick={() => setupColor(color)} key={color.id} sx={{
                        background: color.hex,
                        border: (theme) => selected === color.id ? 'solid 4px rgba(255, 255, 255, 0.8)' : 'solid 2px ' + theme.palette.transparent['dark-10']
                    }}><div /></ColorBtn>)}
                </StaticBlock>
            </Subheader>
            }
        </>
    )
}
