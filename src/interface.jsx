import React from 'react'
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";


export const Interface = () => {

    const PreviewContainer = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacingsValues.xl * 2,
    }));
    const PreviewBlock = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(243,243,243,0.5)',
        marginBottom: theme.spacingsValues.xl,
        padding: theme.spacingsValues.xl,
        borderRadius: 6
    }));
    //
    // const GapContainer = styled('div')(({theme}) => ({
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     gap: theme.spacingsValues.xs,
    // }));
    // const GapContainerFullElements = styled('div')(({theme}) => ({
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     gap: theme.spacingsValues.xxl,
    // }));

    return (
        <PreviewContainer>
            <Typography variant="type-20" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                App Screens
            </Typography>

            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Colors
                </Typography>

            </PreviewBlock>
        </PreviewContainer>
    )
}
