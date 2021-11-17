import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {UiSubheader} from "../components/subheaders";

export const ScreenProfile = () => {

    const Profile = styled('div')(({theme}) => ({

    }));

    const tabArrayMockThree = [
        {
            id: 0,
            label: 'Featured',
        },
        {
            id: 1,
            label: 'Find',
        },
        {
            id: 2,
            label: 'Distort',
        }
    ]


    return (<>
        <Profile>
            <UiHorizontalMenu
                button={<UiTinyButton
                    text={'Go Pro'}
                    icon={<CrownIcon sx={{width: 14}}/>}
                    variant={'accent'}
                    onClick={() => alert('Get pro page')}/>}
                onClickBurger={() => alert('Burger is clicked')}
            >
                <UITabsHorizontal tabs={tabArrayMockThree} defaultTabId={0} selectedID={(e) => console.log(e)} />
            </UiHorizontalMenu>
            <UiSubheader
                onClickBack={() => alert('Back btn clicked')}
                title="Profile"
                type={'simple'}
            />
        </Profile>
    </>)
}
