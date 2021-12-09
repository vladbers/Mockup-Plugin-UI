import React from 'react';
import {styled} from "@mui/material/styles";

const BoxDTSB = styled('div')(({theme}) => ({
    background: '#F6F6F6',
    width: '100%',
    height: '535px',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
}));
const BoxDTSBImage = styled('div')(({theme}) => ({
    paddingTop: '146px' //108px
}));
const BoxDTSBTitle = styled('div')(({theme}) => ({
    paddingTop: '46.75px'
}));
const BoxDTSBSubText = styled('div')(({theme}) => ({
    paddingTop: '5px'
}));
const BoxDTSBButton = styled('div')(({theme}) => ({
    paddingTop: '10px'
}));
const BoxDTSBflex = styled('div')(({theme}) => ({
    paddingBottom: '129px'
}));

export const UiDistortTransitionBoxState = (props) => {



    return <>
        <BoxDTSB>
            {props.button &&
            <>
                <BoxDTSBImage sx={{paddingTop: '108px'}}>
                    {props.bigImage}
                </BoxDTSBImage>
            </>
            }
            {!props.button &&
            <>
                <BoxDTSBImage>
                    {props.bigImage}
                </BoxDTSBImage>
            </>
            }

            <BoxDTSBTitle>
                {props.title}
            </BoxDTSBTitle>
            <BoxDTSBSubText>
                {props.subText}
            </BoxDTSBSubText>
            {props.button &&
                <>
                    <BoxDTSBButton>
                        {props.button}
                    </BoxDTSBButton>
                    <BoxDTSBflex sx={{paddingBottom: '119px'}}/>
                </>
            }
            {!props.button &&
            <>
                <BoxDTSBflex />
            </>
            }
        </BoxDTSB>
    </>
}
