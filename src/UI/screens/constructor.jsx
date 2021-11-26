import React, {useState} from 'react'
import {styled} from "@mui/material/styles";
import {ArrayMockColors, dropdownsImage, tabArrayMockThree} from "../mock/mockData";
import {UiSubheader} from "../components/subheaders";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {UiCanvas} from "../components/canvasMock";
import {UiPasteBlockContainer} from "../components/pasteblockcontainer";
import {UiDropdown} from "../components/dropdowns";
import {UiBigButton} from "../components/bigButton";
import {UiInfoBar} from "../components/info";
import {SizeIcon} from "../icons/size";
import {ResizeIcon} from "../icons/resize";
import {StyleIcon} from "../icons/style";
import {InfoBox} from "../components/infoBox";
import {WalkthrougThemeComponent} from "../components/walkthrougThemeComponent";
import {Walkthroug} from "../components/walkthroug";


export const ScreenConstructor = (props) => {
    const Constructor = styled('div')(({theme}) => ({}));
    const ConstructorBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px',
    }));
    const [showState, setShowState] = useState(props.showPromotion);

    return (
        <Constructor>
            {/*  Header  */}
            <UiHorizontalMenu
                button={<UiTinyButton
                    text={'Go Pro'}
                    icon={<CrownIcon sx={{width: 14}}/>}
                    variant={'accent'}
                    onClick={() => alert('Get pro page')}/>}
                onClickBurger={() => alert('Burger is clicked')}
            >
                <UITabsHorizontal tabs={tabArrayMockThree} defaultTabId={0}
                                  selectedID={(e) => alert(e)}/>
            </UiHorizontalMenu>
            <ConstructorBody sx={{backgroundColor: (theme) => theme.palette.pure['white']}}>
            {/* Subheader */}
            <UiSubheader
                onClickBack={() => alert('Back btn clicked')}
                title="iMac 24 Inch"
                colors={ArrayMockColors}
                defaultColorId={0}
                onClickColor={(e) => alert('Color is selected ' + e.hex + ' where id is ' + e.id)}
                type={'colors'}/>
            </ConstructorBody>
            {/*   Canvas (mock)  */}
            <UiCanvas/>
            {/*  Past block container  */}
            <UiPasteBlockContainer>
                <Walkthroug open={showState} title={
                    <WalkthrougThemeComponent onChange={() => setShowState(!showState)}>
                        Great! Now select a size<br/> and add it to your canvas
                    </WalkthrougThemeComponent>
                } placement={'top'}>
                    <div>
                        <UiDropdown variant={'image'} data={dropdownsImage} isDropdownSelect={() => {}}/>
                    </div>
                </Walkthroug>
                <UiBigButton text={'Paste in canvas'} variant={'basic'} onClick={() => alert('Paste in canvas')}/>
            </UiPasteBlockContainer>
            {/*  info sector   */}
            <InfoBox title={'Info'} expanded={true}>
                <UiInfoBar
                    iconElement={<SizeIcon
                        sx={{width: 14, color: (theme) => theme.palette.text['low']}}/>}
                    titleText={'Max Resolution'}
                    type={'size'}
                    resolutionText={'6000 x 4500 px'}/>
                <UiInfoBar
                    iconElement={<ResizeIcon
                        sx={{width: 14, color: (theme) => theme.palette.text['low']}}/>}
                    titleText={'Screen Proportions'}
                    type={'size'}
                    resolutionText={'2000 x 1500 px'}/>
                <UiInfoBar
                    iconElement={<StyleIcon
                        sx={{width: 14, color: (theme) => theme.palette.text['low']}}/>}
                    titleText={'Style'}
                    type={'link'}
                    href={'https://longscroll-mockups.com'}
                />
            </InfoBox>
        </Constructor>
    )
}
