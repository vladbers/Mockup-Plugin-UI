import React, {useState} from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {UiSubheader} from "../components/subheaders";
import {tabArrayMockThree} from "../mock/mockData";
import {UiLightBox} from "../components/lightbox";
import {Typography} from "@mui/material";
import {UiAuthButton} from "../components/authBtn";
import {UiInput} from "../components/input";
import {UiBigButton} from "../components/bigButton";

export const ScreenAuth = () => {
    const [mockOpenAuth, setMockOpenAuth] = useState(true);

    const Profile = styled('div')(({theme}) => ({}));

    const ProfileBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px'
    }));
    const AuthButtons = styled('div')(({theme}) => ({
        marginTop: '20px',
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    }));
    const InputAndButtonBox = styled('div')(({theme}) => ({
        marginTop: '12px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    }));




    return (
        <Profile>
            <UiHorizontalMenu
                button={<UiTinyButton
                    text={'Go Pro'}
                    icon={<CrownIcon sx={{width: 14}}/>}
                    variant={'accent'}
                    onClick={() => alert('Get pro page')}/>}
                onClickBurger={() => alert('Burger is clicked')}>
                <UITabsHorizontal tabs={tabArrayMockThree} defaultTabId={0} selectedID={(e) => console.log(e)}/>
            </UiHorizontalMenu>
            <ProfileBody>
                <UiSubheader
                    onClickBack={() => alert('Back btn clicked')}
                    title="Auth"
                    type={'simple'}
                />
            </ProfileBody>
            <UiLightBox handleOpen={mockOpenAuth} handleClose={() => setMockOpenAuth(false)}>
                <Typography variant="type-24" component="p"
                            sx={{color: (theme) => theme.palette.text['high']}}>
                    Create an account or sign in
                </Typography>
                <AuthButtons>
                    <UiAuthButton fullWidth={true} text={'Continue with Google'} type={'google'}
                                  onClick={() => alert('Auth by google')}/>
                    <UiAuthButton fullWidth={true} text={'Continue with Facebook'} type={'facebook'}
                                  onClick={() => alert('Auth by facebook')}/>
                    <UiAuthButton fullWidth={true} text={'Continue with Twitter'} type={'twitter'}
                                  onClick={() => alert('Auth by twitter')}/>
                </AuthButtons>
                <Typography variant="type-12" component="p"
                            sx={{color: (theme) => theme.palette.text['low'], textAlign: 'center'}}>
                   or
                </Typography>
                <InputAndButtonBox>
                    <UiInput fullWidth={true} placeholder={'Enter email'} type={'text'} dispatchValue={(e) => console.log(e)} />
                    <UiBigButton fullWidth={true} text={'Continue'} variant={'basic'} />
                </InputAndButtonBox>
                <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.text['low'], textAlign: 'center'}}>
                    By continuing, you acknowledge that you have read <br/>and understood, and agree to <Typography variant="type-10" component="span" sx={{color: (theme) => theme.palette.text['high'], cursor: 'pointer'}}>Terms & Conditions</Typography> <br/>and <Typography variant="type-10" component="span" sx={{color: (theme) => theme.palette.text['high'], cursor: 'pointer'}}>Privacy Policy</Typography>.
                </Typography>
            </UiLightBox>
        </Profile>
    )
}
