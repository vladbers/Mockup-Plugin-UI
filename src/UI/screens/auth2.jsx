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
import {UiChangeEmail} from "../components/chengeEmail";
import {UiInput} from "../components/input";
import {UiBigButton} from "../components/bigButton";
import {UiChekBox} from "../components/checkBox";


export const ScreenAuth2 = () => {
    const [mockOpenAuth, setMockOpenAuth] = useState(true);

    const Profile = styled('div')(({theme}) => ({}));

    const ProfileBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px'
    }));
    const ChengeEmail = styled('div')(({theme}) => ({
        marginTop: '20px',
        marginBottom: '12px',
    }));
    const FormBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    }));
    const CheckboxBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
                    Create an account
                </Typography>
                <ChengeEmail>
                    <UiChangeEmail email={'stasgalanin@yandex.ru'} handlerChange={() => alert('Email changed')}/>
                </ChengeEmail>
                <FormBody>
                    <Typography variant="type-14" component="p"
                                sx={{color: (theme) => theme.palette.text['high']}}>
                        First name
                    </Typography>
                    <UiInput fullWidth={true} placeholder={''} type={'text'} dispatchValue={(e) => console.log(e)} />
                    <Typography variant="type-14" component="p"
                                sx={{color: (theme) => theme.palette.text['high']}}>
                        Second name
                    </Typography>
                    <UiInput fullWidth={true} placeholder={''} type={'text'} dispatchValue={(e) => console.log(e)} />
                    <Typography variant="type-14" component="p"
                                sx={{color: (theme) => theme.palette.text['high']}}>
                        Password
                    </Typography>
                    <UiInput fullWidth={true} placeholder={''} type={'password'} dispatchValue={(e) => console.log(e)} />
                    <Typography variant="type-14" component="p"
                                sx={{color: (theme) => theme.palette.text['high']}}>
                        Repeat password
                    </Typography>
                    <UiInput fullWidth={true} placeholder={''} type={'password'} dispatchValue={(e) => console.log(e)} />
                    <CheckboxBody>
                        <UiChekBox defaultChecked={true}/>
                        <Typography variant="type-14" component="p"
                                    sx={{color: (theme) => theme.palette.text['low']}}>
                            Agree to receive newsletter
                        </Typography>
                    </CheckboxBody>
                    <UiBigButton fullWidth={true} text={'Create'} variant={'basic'} />
                </FormBody>
            </UiLightBox>
        </Profile>
    )
}
