import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import {Ui} from "./ui";
import {Interface} from "./interface";
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import logo from './assets/logo.png'
import {NewWindowIcon} from "./UI/icons/newWindow";
import {UiBigButton} from "./UI/components/bigButton";

const Home = () => {
    const navigate = useNavigate()

    const HomeOnboard = styled('div')(({theme}) => ({
        backgroundColor: theme.palette.pure['white'],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        alignContent: 'center',
    }));
    const Logotype = styled('img')(({theme}) => ({
        width: 192,
    }));
    const ButtonsRow = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacingsValues.xxs
    }));



    const goTo = (path) => {
        navigate(path);
    };

    return <>
        <HomeOnboard>
            <Logotype src={logo} sx={{marginBottom: (theme) => theme.spacings.unit}}/>
            <Typography variant="type-24" component="p">
                Welcome to UI
            </Typography>
            <Typography variant="type-12" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs, textAlign: 'center'}}>
                A set of UI components for<br/> the Figma / Sketch plugin mockup
            </Typography>
            <ButtonsRow>
                <UiBigButton text={'Screens'} icon={<NewWindowIcon sx={{width: 16}}/>} variant={'basic'}
                             onClick={() => goTo('/interface')}/>
                <UiBigButton text={'UI components'} icon={<NewWindowIcon sx={{width: 16}}/>} variant={'basic'}
                             onClick={() => goTo('/ui')}/>
            </ButtonsRow>
        </HomeOnboard>
    </>
}

export const Onboard = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/ui" element={<Ui />}/>
            <Route exact path="/interface" element={<Interface/>}/>
        </Routes>
    );
}

