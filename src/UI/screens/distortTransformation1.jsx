import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/TinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/HorizontalMenu";
import {UiSubheader} from "../components/Subheaders";
import {tabArrayMockThree} from "../mock/mockData";
import {BigIconSvg} from "../components/BigIconSvg";
import {Typography} from "@mui/material";
import {UiDistortTransitionBoxState} from "../components/Dtsb";


export const DistortTransformations1 = () => {

    const Profile = styled('div')(({theme}) => ({}));

    const ProfileBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingBottom: '20px'
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
                    title="Distort Transformation"
                    type={'simple'}
                />
                {/*<UiVerticalMenuDivider/>*/}
                <UiDistortTransitionBoxState
                    background={'#F6F6F6'}
                    bigImage={
                        <BigIconSvg
                            variant={'one'}
                            width={'217px'}
                            height={'135px'}
                        />
                    }
                    title={
                        <Typography variant="type-14-Bold" component="p"
                                    sx={{color: (theme) => theme.palette.text['high']}}>
                            Select a screen
                        </Typography>
                    }
                    subText={
                        <Typography variant="type-14" component="p"
                                    sx={{color: (theme) => theme.palette.text['low'], textAlign: 'center'}}>
                            Click on any 4 point <br/> vector shape where you <br/>  want to paste your design
                        </Typography>
                    }
                />
            </ProfileBody>
        </Profile>
    )
}
