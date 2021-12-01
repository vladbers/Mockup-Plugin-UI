import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {UiSubheader} from "../components/subheaders";
import {tabArrayMockThree} from "../mock/mockData";
import {BigIconSVG} from "../components/bigIconSvg";
import {Typography} from "@mui/material";
import {UiDistortTransitionBoxState} from "../components/dtsb";
import {UiBigButton} from "../components/bigButton";
// import {UiVerticalMenuDivider} from "../components/verticalMenuDevider";


export const DistortTransformations2 = () => {

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
                        <BigIconSVG
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
                    button={
                        <UiBigButton text={'Flatten'} variant={'basic'} onClick={() => alert('Flatten')} />
                    }
                />
            </ProfileBody>
        </Profile>
    )
}