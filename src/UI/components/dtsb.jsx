import React from 'react';
import {styled} from "@mui/material/styles";

export const UiDistortTransitionBoxState = (props) => {

    const BoxDTSB = styled('div')(({theme}) => ({
        background: props.background,
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
