import React from 'react';
import {styled} from "@mui/material/styles";

const InfoBar = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    minWidth: 284,
    borderBottom: `solid 1px ${theme.palette.line}`,
}));
const InfoIntoBlock = styled('div')(({theme}) => ({
    display: 'flex',
    gap: 6,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    fontSize: theme.typography['type-14'].fontSize,
    fontWeight: theme.typography['type-14'].fontWeight,
    fontFamily: theme.typography['type-14'].fontFamily,
    lineHeight: theme.typography['type-14'].lineHeight,
}));


export const UiInfoBar = ({iconElement, titleText, resolutionText, type, href}) => {

    return (
        <>
            {type === 'size' &&
                <InfoBar>
                    <InfoIntoBlock sx={{color: (theme) => theme.palette.text['low']}}>
                        {iconElement}
                        {titleText}
                    </InfoIntoBlock>
                    <InfoIntoBlock sx={{color: (theme) => theme.palette.text['high']}}>
                        {resolutionText}
                    </InfoIntoBlock>
                </InfoBar>
            }
            {type === 'link' &&
            <InfoBar>
                <InfoIntoBlock sx={{color: (theme) => theme.palette.text['low']}}>
                    {iconElement}
                    {titleText}
                </InfoIntoBlock>
                <InfoIntoBlock onClick={() => window.open(href)} sx={{color: (theme) => theme.palette.accent['one'], cursor: 'pointer'}}>
                    Presentation Kit
                </InfoIntoBlock>
            </InfoBar>
            }
        </>
    )
}
