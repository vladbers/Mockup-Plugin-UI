import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {UiSubheader} from "../components/subheaders";
import {tabArrayMockFour, tabArrayMockThree} from "../mock/mockData";
import {UiUnlockAccess} from "../components/unlockAccess";

export const ScreenProfile = () => {

    const Profile = styled('div')(({theme}) => ({}));

    const ProfileBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px'
    }));


    return (<>
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
                <UiUnlockAccess
                    icon={<CrownIcon sx={{width: 16, color: (theme) => theme.palette.pure['white']}}/>}
                    title={'Pro'}
                    tabArray={tabArrayMockFour}
                    onclick={(e) => alert('subscribe: ' + e)}
                />
            </ProfileBody>
        </Profile>
    </>)
}
