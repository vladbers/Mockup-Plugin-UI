import React from 'react'
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {ArrowIcon} from "./UI/icons/arrow";
import {UiRoundButton} from "./UI/components/roundButton";
import {useNavigate} from "react-router-dom";
import {ScreenProfile} from "./UI/screens/profile";


export const Interface = () => {

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate(path);
    };
    const PreviewContainer = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacingsValues.xl * 2,
    }));
    const PreviewBlock = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: 'rgba(243,243,243,0.5)',
        marginBottom: theme.spacingsValues.xl,
        padding: theme.spacingsValues.xl,
        borderRadius: 6
    }));
    const ScreenBlock = styled('div')(({theme}) => ({
        background: theme.palette.pure['white'],
    }));


    return (<div>
            <div style={{marginTop:8, marginLeft: 8}}>
                <UiRoundButton icon={<ArrowIcon sx={{width: 16}}/>} onClick={() => goTo('/')}/>
            </div>
            <PreviewContainer>
                <Typography variant="type-20" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    App Screens
                </Typography>

                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Profile
                </Typography>
                <PreviewBlock>
                    <ScreenBlock sx={{width: 400, height: 700}}>
                        <ScreenProfile />
                    </ScreenBlock>
                </PreviewBlock>
            </PreviewContainer>
        </div>
    )
}
