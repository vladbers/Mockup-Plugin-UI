import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {ArrowIcon} from "../icons/arrow";
import {InfoIcon} from "../icons/info";

export const UiSubheader = ({title, type, onClickBack, onClickInfo, onClickColor, colors, defaultColorId}) => {
    const [selected, setSelected] = useState(defaultColorId ? defaultColorId : 1);

    const Subheader = styled('div')(({theme}) => ({
        background: theme.palette.pure['white'],
        padding: '13px 24px',
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

    const setupColor = (e) => {
        onClickColor(e);
        setSelected(e.id)
    }

    return (
        <>
            {type === 'simple' &&
            <Subheader>
               <StaticBlock>
                   <div onClick={onClickBack}>
                       <ArrowIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                   </div>
                   <Typography variant="type-16" component="p" sx={{color: (theme) => theme.palette.text['high']}}>
                       {title}
                   </Typography>
               </StaticBlock>
            </Subheader>
            }
            {type === 'info' &&
            <Subheader sx={{background: 'transparent'}}>
                <StaticBlock>
                    <div onClick={onClickBack}>
                        <ArrowIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                    </div>
                    <Typography variant="type-16" component="p" sx={{color: (theme) => theme.palette.text['high']}}>
                        {title}
                    </Typography>
                </StaticBlock>
                <StaticBlock>
                    <div onClick={onClickInfo}>
                        <InfoIcon sx={{width: 16, color: (theme) => theme.palette.text['high'], cursor: 'pointer'}} />
                    </div>
                </StaticBlock>
            </Subheader>
            }
            {type === 'colors' &&
            <Subheader>
                <StaticBlock>
                    <div onClick={onClickBack}>
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
