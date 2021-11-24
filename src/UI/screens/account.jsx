import React, {useState} from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {UiSubheader} from "../components/subheaders";
import {tabArrayMockThree, userAccount} from "../mock/mockData";
import {Typography} from "@mui/material";
import {UiVerticalMenuDivider} from "../components/verticalMenuDevider";
import {UiToggleButton} from "../components/toggleButton";
import {UiInput} from "../components/input";
import {UiBigButton} from "../components/bigButton";
import {UiAccountLine} from "../components/accountLine";
import {UiInvoiceLine} from "../components/invoice";

export const ScreenAccount = () => {

    const Profile = styled('div')(({theme}) => ({}));

    const ProfileBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px'
    }));
    const NewsletterBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const AccountBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const invoiceBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const ChangePasswordBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const ChangeEmailBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const SendyBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: '12px'
    }));
    const PasswordBody = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    }));


    const SendyChecker = ({click, toggleDefaultState}) => {
        const [status, setStatus] = useState(toggleDefaultState ? toggleDefaultState : false)

        const returnState = () => {
            status ? setStatus(false) : setStatus(true)
            click(!status)
        }

        return (
            <NewsletterBody>
                <Typography variant="type-16" component="p" sx={{
                    color: (theme) => theme.palette.text['high'],
                    marginTop: '10px',
                    marginBottom: '14px'
                }}>
                    Newsletter
                </Typography>
                <SendyBody>
                    <UiToggleButton checked={status} handleChange={returnState}/>
                    <Typography variant="type-12" component="p" sx={{
                        color: (theme) => theme.palette.text['low']
                    }}>
                        Receive email notifications, updates and new <br/> products
                    </Typography>
                </SendyBody>
            </NewsletterBody>
        )
    }
    const ChangePasswordContainer = ({newPassword}) => {
        const [fitstInput, setFitstInput] = useState('')
        const [secondInput, setSecondInput] = useState('')
        const [error, setError] = useState(false)

        const SaveHandler = () => {
            if (fitstInput === secondInput) {
                setError(false)
                newPassword(secondInput)
            } else {
                setError(true)
            }
        }

        return (
            <ChangePasswordBody>
                <Typography variant="type-16" component="p" sx={{
                    color: (theme) => theme.palette.text['high'],
                    marginBottom: '10px'
                }}>
                    Change password
                </Typography>
                <PasswordBody>
                    <div>
                        <Typography variant="type-12" component="p" sx={{
                            color: (theme) => theme.palette.text['low'],
                            marginBottom: '6px'
                        }}>
                            New password
                        </Typography>
                        <UiInput placeholder={''} error={error} type={'password'} dispatchValue={setFitstInput}/>
                    </div>
                    <div>
                        <Typography variant="type-12" component="p" sx={{
                            color: (theme) => theme.palette.text['low'],
                            marginBottom: '6px'
                        }}>
                            Repeat password
                        </Typography>
                        <UiInput placeholder={''} error={error} errorText={'Your passwords do not match'} type={'password'} dispatchValue={setSecondInput}/>
                    </div>
                </PasswordBody>
                <PasswordBody sx={{marginTop: '9px'}}>
                    <UiBigButton text={'Save password'} fullWidth={true} variant={'basic'}
                                 onClick={SaveHandler}/>
                </PasswordBody>
            </ChangePasswordBody>
        )
    }
    const ChangeEmailContainer = ({newEmail}) => {
        const [fitstInput, setFitstInput] = useState('')

        const SaveHandler = () => {
            newEmail(fitstInput)
        }

        return (
            <ChangePasswordBody>
                <Typography variant="type-16" component="p" sx={{
                    color: (theme) => theme.palette.text['high'],
                    marginBottom: '10px'
                }}>
                    Change email
                </Typography>
                <PasswordBody>
                    <div style={{width: '100%'}}>
                        <Typography variant="type-12" component="p" sx={{
                            color: (theme) => theme.palette.text['low'],
                            marginBottom: '6px'
                        }}>
                            New email
                        </Typography>
                        <UiInput placeholder={''} fullWidth={true} type={'text'} dispatchValue={setFitstInput}/>
                    </div>
                </PasswordBody>
                <PasswordBody sx={{marginTop: '9px'}}>
                    <UiBigButton text={'Change email'} fullWidth={true} variant={'basic'}
                                 onClick={SaveHandler}/>
                </PasswordBody>
            </ChangePasswordBody>
        )
    }

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
            <UiSubheader
                onClickBack={() => alert('Back btn clicked')}
                title="Profile"
                type={'simple'}
            />
            <ProfileBody>
                <UiVerticalMenuDivider/>
                <AccountBody>
                    <UiAccountLine data={userAccount} clickToCancel={() => alert('Cancel subscription')}/>
                </AccountBody>
                <UiVerticalMenuDivider margin={'10px 0px 10px 0px'}/>
                <invoiceBody>
                    <UiInvoiceLine data={userAccount} />
                </invoiceBody>
                <UiVerticalMenuDivider margin={'10px 0px 10px 0px'}/>
                <NewsletterBody>
                    <SendyChecker toggleDefaultState={true} click={(e) => alert('subscribe: ' + e)}/>
                </NewsletterBody>
                <UiVerticalMenuDivider margin={'10px 0px 10px 0px'}/>
                <ChangePasswordBody>
                    <ChangePasswordContainer newPassword={(e) => alert('New password: ' + e)}/>
                </ChangePasswordBody>
                <UiVerticalMenuDivider margin={'14px 0px 10px 0px'}/>
                <ChangeEmailBody>
                    <ChangeEmailContainer newEmail={(e) => alert('New email: ' + e)}/>
                </ChangeEmailBody>
            </ProfileBody>
        </Profile>
    )
}
