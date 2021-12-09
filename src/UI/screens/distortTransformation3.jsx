import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/TinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/HorizontalMenu";
import {UiSubheader} from "../components/Subheaders";
import {Artbords, dropdownsSizeOldPlugin, tabArrayMockThree} from "../mock/mockData";
import {UiVerticalMenuDivider} from "../components/VerticalMenuDevider";
import {NewWindowIcon} from "../icons/newWindow";
import {UiBigButton} from "../components/BigButton";
import {Typography} from "@mui/material";
import {UiSelectArtboardComponent} from "../components/SelectArtbordComponent";
import {UiTransformationFooterComponent} from "../components/TranformationFooterComponent";


export const DistortTransformations3 = () => {

    const Profile = styled('div')(({theme}) => ({}));

    const ProfileBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingBottom: '10px'
    }));
    const RowF = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '7px',
        marginBottom: '10px',
        gap: '10px'
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
                <UiVerticalMenuDivider/>
                <RowF>
                    <UiBigButton text={'Select on canvas'} icon={<NewWindowIcon sx={{width: 16}}/>} variant={'ghost'}
                                 onClick={() => alert('Select on canvas')}/>
                    <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.text['low']}}>
                        Choose any frame or use select<br/> on canvas button
                    </Typography>
                </RowF>
                <UiSelectArtboardComponent
                    artboardsArray={Artbords}
                    toSelectId={0}
                    fromSelectId={(e) => console.log('selected id: ',e)}
                />
                <UiTransformationFooterComponent
                    sizes={dropdownsSizeOldPlugin}
                    callbackOptions={(e) => console.log('options', e)}/>
            </ProfileBody>
        </Profile>
    )
}
