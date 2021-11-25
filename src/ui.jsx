import React, {useState} from 'react'
import {styled} from '@mui/material/styles';
import {Collapse, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

// Mock data
import {NewWindowIcon} from "./UI/icons/newWindow";
import {RefreshIcon} from "./UI/icons/refrash";
import {CloseIcon} from "./UI/icons/close";
import {ArrowIcon} from "./UI/icons/arrow";
import {DistortIcon} from "./UI/icons/distort";
import {CrownIcon} from "./UI/icons/crown";
import {ErrorIcon} from "./UI/icons/error";
import {PriceIcon} from "./UI/icons/price";
import {StyleIcon} from "./UI/icons/style";
import {ResizeIcon} from "./UI/icons/resize";
import {SizeIcon} from "./UI/icons/size";
import {CatalogIcon} from "./UI/icons/catalog";
import {UserIcon} from "./UI/icons/user";
import {PlusIcon} from "./UI/icons/plus";
// Mock
import {ColorsMock} from "./UI/mock/colorPalette";
import {TextMock} from "./UI/mock/textTeampleate";
import {SpacingMock} from "./UI/mock/spacingMock";
import {StarIcon} from "./UI/icons/star";
import {IconsMock} from "./UI/mock/iconsMock";

// components
import {UiBigButton} from "./UI/components/bigButton";
import {UiTinyButton} from "./UI/components/tinyButton";
import {UiRoundButton} from "./UI/components/roundButton";
import {UiToggleButton} from "./UI/components/toggleButton";
import {UiDropdown} from "./UI/components/dropdowns";
import {UiInput} from "./UI/components/input";
import {UiBanner} from "./UI/components/banner";
import {UiTabsHeader} from "./UI/components/UITabs";
import {TableContainer} from "./UI/components/tabsContainer";
import {UiAuthButton} from "./UI/components/authBtn";
import {UiChekBox} from "./UI/components/checkBox";
import {UITabsHorizontal} from "./UI/components/UITabsHorizontal";
import {UiInfoBar} from "./UI/components/info";
import {UiMenuPoint} from "./UI/components/menuPoint";
import {UiVerticalMenu} from "./UI/components/verticalMenu";
import {UiVerticalMenuDivider} from "./UI/components/verticalMenuDevider";
import {UiHorizontalMenu} from "./UI/components/horizontalMenu";
import {UiVerticalMenuBox} from "./UI/components/verticalMenuBox";
import {InfoBox} from "./UI/components/infoBox";
import {UiSubheader} from "./UI/components/subheaders";
import {Walkthroug} from "./UI/components/walkthroug";
import {WalkthrougThemeComponent} from "./UI/components/walkthrougThemeComponent";
import {UiUnlockAccess} from "./UI/components/unlockAccess";
import {UiAccountLine} from "./UI/components/accountLine";
import {UiPasteBlockContainer} from "./UI/components/pasteblockcontainer";
import {UiPopupInfo} from "./UI/components/popupinfo";
import {UiInvoiceLine} from "./UI/components/invoice";
import {UiProductHeader} from "./UI/components/productHeader";
import {UiSortingPreview} from "./UI/components/sortingPreview";
import CardsBroum from "./UI/components/CardsBroum";

// mock data
import {
    ArrayMockColors, Card,
    dropdownsImage,
    dropdownsRealistic,
    dropdownsSize, Images,
    tabArrayMock, tabArrayMockFour,
    tabArrayMockThree,
    tabArrayMockTwo, userAccount
} from "./UI/mock/mockData";




// Preview styles
const PreviewContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacingsValues.xl * 2,
}));
const PreviewBlock = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(243,243,243,0.5)',
    marginBottom: theme.spacingsValues.xl,
    padding: theme.spacingsValues.xl,
    borderRadius: 6
}));
const GapContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacingsValues.xs,
}));
const GapContainerFullElements = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacingsValues.xxl,
}));


export const Ui = () => {
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate(path);
    };
    // Mock state
    const [mockOpen, setMockOpen] = useState(true);
    const [mockTabContent, setMockTabContent] = useState(2);
    const [mockTabContentTwo, setMockTabContentTwo] = useState(0);

    return (
        <div>
            <div style={{marginTop: 8, marginLeft: 8}}>
                <UiRoundButton icon={<ArrowIcon sx={{width: 16}}/>} onClick={() => goTo('/')}/>
            </div>
            <PreviewContainer>
                <Typography variant="type-20" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    UI Kit
                </Typography>

                {/*{ Preview Colors }*/}

                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Colors
                    </Typography>
                    <div>
                        <ColorsMock/>
                    </div>
                </PreviewBlock>

                {/*{ Preview Fonts }*/}

                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Fonts
                    </Typography>
                    <div>
                        <TextMock/>
                    </div>
                </PreviewBlock>

                {/*{ Preview Spacing }*/}

                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Spacing
                    </Typography>
                    <div>
                        <SpacingMock/>
                    </div>
                </PreviewBlock>

                {/*{ Preview Buttons }*/}

                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Big Button
                    </Typography>
                    <GapContainer>
                        {/*variant: basic / ghost / inner*/}
                        {/*icon: element*/}
                        {/*text: some name btn*/}
                        {/*fullWidth: true / false*/}
                        {/*onclick: return callback*/}
                        <UiBigButton text={'Realistic'} variant={'basic'} onClick={() => alert('Realistic')}/>
                        <UiBigButton text={'Realistic'} variant={'ghost'} onClick={() => alert('Realistic')}/>
                        <UiBigButton text={'Realistic'} onClick={() => alert('Realistic')}/>
                    </GapContainer>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Big Button Icon
                    </Typography>
                    <GapContainer>
                        <UiBigButton text={'Realistic'} icon={<NewWindowIcon sx={{width: 16}}/>} variant={'basic'}
                                     onClick={() => alert('Realistic')}/>
                        <UiBigButton text={'Realistic'} icon={<NewWindowIcon sx={{width: 16}}/>} variant={'ghost'}
                                     onClick={() => alert('Realistic')}/>
                        <UiBigButton text={'Realistic'} icon={<NewWindowIcon sx={{width: 16}}/>}
                                     onClick={() => alert('Realistic')}/>
                    </GapContainer>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Tiny Button
                    </Typography>
                    <GapContainer>
                        {/*variant: accent / grey*/}
                        {/*icon: element*/}
                        {/*text: some name btn*/}
                        {/*onclick: return callback*/}
                        <UiTinyButton text={'Featured'} icon={<StarIcon sx={{width: 14}}/>} variant={'accent'}
                                      onClick={() => alert('Featured')}/>
                        <UiTinyButton text={'Refresh'} icon={<RefreshIcon sx={{width: 14}}/>} variant={'grey'}
                                      onClick={() => alert('Refresh')}/>
                    </GapContainer>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Icons
                    </Typography>
                    <div>
                        <IconsMock/>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Round Button
                    </Typography>
                    <div>
                        <GapContainer>
                            {/*variant: null / ignore*/}
                            {/*icon: element*/}
                            {/*onclick: return callback*/}
                            <UiRoundButton
                                icon={<CloseIcon sx={{width: 16, color: (theme) => theme.palette.text['high']}}/>}
                                onClick={() => alert('Simple')}/>
                            <UiRoundButton icon={<ArrowIcon sx={{width: 16}}/>} onClick={() => alert('Simple')}/>
                            <UiRoundButton variant={'ignore'} icon={<CloseIcon sx={{width: 16}}/>}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Toggle
                    </Typography>
                    <div>
                        <GapContainer>
                            {/*variant: null / ignore*/}
                            {/*checked: true / false / null*/}
                            {/*handleChange: return callback*/}
                            <UiToggleButton checked={true}/>
                            <UiToggleButton checked={false}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Dropdowns
                    </Typography>
                    <div>
                        <GapContainer>
                            {/*variant: size / usually / image*/}
                            {/*data: array according to type (see mock)*/}
                            {/*isDropdownSelect: return callback*/}
                            <UiDropdown variant={'size'} data={dropdownsSize} isDropdownSelect={() => {
                            }}/>
                            <UiDropdown variant={'usually'} data={dropdownsRealistic} isDropdownSelect={() => {
                            }}/>
                            <UiDropdown variant={'image'} data={dropdownsImage} isDropdownSelect={() => {
                            }}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Inputs
                    </Typography>
                    <div>
                        <GapContainer>
                            {/*placeholder: text*/}
                            {/*type: text / password*/}
                            {/*dispatchValue: return callback value*/}
                            {/*error: true / false*/}
                            {/*errorText: text*/}
                            <UiInput placeholder={'Placeholder'} type={'text'} dispatchValue={(e) => console.log(e)}/>
                            <UiInput placeholder={'Password'} type={'password'} dispatchValue={(e) => console.log(e)}/>
                            <UiInput placeholder={'Error'} error={true} errorText={'Please use real password'}
                                     type={'password'}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Banner
                    </Typography>
                    <div>
                        <GapContainerFullElements>
                            {/*close: return callback form close (state)*/}
                            {/*icon: element and bg hex*/}
                            {/*fullWidth: true / false*/}
                            {/*title: text*/}
                            {/*subtext: text*/}
                            <Collapse in={mockOpen}>
                                <UiBanner close={(e) => setMockOpen(e)}
                                          icon={{
                                              element: <DistortIcon
                                                  sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                              background: '#1184ef'
                                          }}
                                          title={'Perspective Transformation'}
                                          subtext={'A collection of highly detailed'}
                                />
                            </Collapse>
                            <Collapse in={mockOpen}>
                                <UiBanner close={(e) => setMockOpen(e)}
                                          icon={{
                                              element: <CrownIcon
                                                  sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                              background: '#11c7ef'
                                          }}
                                          title={'Go Pro'}
                                          subtext={'A collection of highly detailed'}/>
                            </Collapse>
                            <Collapse in={mockOpen}>
                                <UiBanner close={(e) => setMockOpen(e)}
                                          icon={{
                                              element: <ErrorIcon
                                                  sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                              background: '#e7290f'
                                          }}
                                          title={'Something went wrong'}
                                          subtext={'Please check your connection'}/>
                            </Collapse>
                            <Collapse in={mockOpen}>
                                <UiBanner close={(e) => setMockOpen(e)}
                                          icon={{
                                              element: <PriceIcon
                                                  sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                              background: '#76cc09'
                                          }}
                                          title={'Pro account 30% Discount'}
                                          subtext={'Two weeks only. Code: 352dc4'}/>
                            </Collapse>

                        </GapContainerFullElements>
                        <br/>
                        <Collapse in={mockOpen}>
                            <UiBanner close={(e) => setMockOpen(e)}
                                      icon={{
                                          element: <PriceIcon
                                              sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                          background: '#76cc09'
                                      }}
                                      title={'Pro account 30% Discount'}
                                      subtext={'Two weeks only. Code: 352dc4'}/>
                        </Collapse>
                        <br/>
                        <UiBigButton text={'Re-open all'} variant={mockOpen ? '' : 'basic'}
                                     onClick={() => setMockOpen(true)}/>

                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Tabs
                    </Typography>
                    <div>
                        <GapContainer>
                            {/*tabs: array (id, label, subtext)*/}
                            {/*selectedID: return selected id)*/}
                            {/*defaultTabId: chenge default tab is opened / first tab)*/}
                            <div>
                                <UiTabsHeader tabs={tabArrayMock} defaultTabId={2}
                                              selectedID={(e) => setMockTabContent(e)}/>
                                {/*value: selected id state*/}
                                {/*index: index key*/}
                                {/*children: node*/}
                                <div style={{marginTop: '20px'}}>
                                    <TableContainer value={mockTabContent} index={0}>
                                        Scenes content
                                    </TableContainer>
                                    <TableContainer value={mockTabContent} index={1}>
                                        Front content
                                    </TableContainer>
                                    <TableContainer value={mockTabContent} index={2}>
                                        Top content
                                    </TableContainer>
                                    <TableContainer value={mockTabContent} index={3}>
                                        Iso content
                                    </TableContainer>
                                </div>
                            </div>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Login buttons
                    </Typography>
                    <div>
                        {/*text: some text*/}
                        {/*type: google / facebook / twitter (lowercase)*/}
                        {/*onclick: return callback*/}
                        <GapContainer>
                            <UiAuthButton text={'Continue with Google'} type={'google'}
                                          onClick={() => alert('Auth by google')}/>
                            <UiAuthButton text={'Continue with Facebook'} type={'facebook'}
                                          onClick={() => alert('Auth by facebook')}/>
                            <UiAuthButton text={'Continue with Twitter'} type={'twitter'}
                                          onClick={() => alert('Auth by twitter')}/>
                            <UiAuthButton text={'Continue with other auth'}
                                          onClick={() => alert('Auth by other auth')}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Check Box
                    </Typography>
                    <div>
                        {/* defaultChecked: true / false */}
                        {/* disabled: true / false */}
                        {/* checked: true / false */}
                        <GapContainer>
                            <UiChekBox defaultChecked={true}/>
                            <UiChekBox/>
                            <UiChekBox checked={true} disabled={true}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Tabs Horizontal
                    </Typography>
                    <div>
                        {/*tabs: array (id, label, subtext)*/}
                        {/*selectedID: return selected id)*/}
                        {/*defaultTabId: chenge default tab is opened / first tab)*/}
                        <GapContainer>
                            <div>
                                <UITabsHorizontal tabs={tabArrayMockTwo} defaultTabId={0}
                                                  selectedID={(e) => setMockTabContentTwo(e)}/>
                                <div style={{marginTop: '20px'}}>
                                    <TableContainer value={mockTabContentTwo} index={0}>
                                        One content
                                    </TableContainer>
                                    <TableContainer value={mockTabContentTwo} index={1}>
                                        Two content
                                    </TableContainer>
                                </div>
                            </div>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Info Points
                    </Typography>
                    <div>
                        {/*iconElement: icon component */}
                        {/*titleText: text*/}
                        {/*type: size / link */}
                        {/*href: url */}
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <UiInfoBar
                                iconElement={<SizeIcon sx={{width: 14, color: (theme) => theme.palette.text['low']}}/>}
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
                                iconElement={<StyleIcon sx={{width: 14, color: (theme) => theme.palette.text['low']}}/>}
                                titleText={'Style'}
                                type={'link'}
                                href={'https://longscroll-mockups.com'}
                            />
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Info Box
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <InfoBox title={'Info'}>
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
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Menu Points
                    </Typography>
                    <div>
                        {/*icon: icon component */}
                        {/*text: text*/}
                        {/*type: selected / icon /  small */}
                        {/*onClick: return click callback */}
                        <GapContainer sx={{flexDirection: 'row'}}>
                            <UiMenuPoint
                                icon={<CatalogIcon sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                text={'Go Pro'}
                                type={'icon'}
                            />
                            <UiMenuPoint
                                icon={<CrownIcon sx={{width: 12, color: (theme) => theme.palette.accent['one']}}/>}
                                text={'Go Pro'}
                                type={'selected'}
                            />
                            <UiMenuPoint
                                icon={<CatalogIcon sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                text={'Go Pro'}
                                type={'small'}
                            />
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Menu vertical
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'row'}}>
                            <UiVerticalMenu>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Mockups'}
                                        type={'icon'}
                                    />
                                    <UiMenuPoint
                                        icon={<DistortIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Distort'}
                                        type={'icon'}
                                    />
                                </UiVerticalMenuBox>
                                <UiVerticalMenuDivider/>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CrownIcon
                                            sx={{width: 12, color: (theme) => theme.palette.accent['one']}}/>}
                                        text={'Go Pro'}
                                        type={'selected'}
                                    />
                                    <UiMenuPoint
                                        icon={<UserIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Log in'}
                                        type={'icon'}
                                    />
                                    <UiMenuPoint
                                        icon={<PlusIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Create an account'}
                                        type={'icon'}
                                    />
                                </UiVerticalMenuBox>
                                <UiVerticalMenuDivider/>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'How to'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Support'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'License'}
                                        type={'small'}
                                    />
                                </UiVerticalMenuBox>
                            </UiVerticalMenu>
                            <UiVerticalMenu>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Mockups'}
                                        type={'icon'}
                                    />
                                    <UiMenuPoint
                                        icon={<DistortIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Distort'}
                                        type={'icon'}
                                    />
                                </UiVerticalMenuBox>
                                <UiVerticalMenuDivider/>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CrownIcon
                                            sx={{width: 12, color: (theme) => theme.palette.accent['one']}}/>}
                                        text={'Go Pro'}
                                        type={'selected'}
                                    />
                                    <UiMenuPoint
                                        icon={<UserIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Profile'}
                                        type={'icon'}
                                    />
                                </UiVerticalMenuBox>
                                <UiVerticalMenuDivider/>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'How to'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Support'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'License'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Logout'}
                                        type={'small'}
                                    />
                                </UiVerticalMenuBox>
                            </UiVerticalMenu>
                            <UiVerticalMenu
                                type={'hero'}
                                icon={<CrownIcon sx={{width: 24, color: (theme) => theme.palette.text['high']}}/>}
                                heroTitle={'Pro'}
                                heroSubtext={'Thank you!'}
                            >
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Mockups'}
                                        type={'icon'}
                                    />
                                    <UiMenuPoint
                                        icon={<DistortIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Distort'}
                                        type={'icon'}
                                    />
                                </UiVerticalMenuBox>
                                <UiVerticalMenuDivider/>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<UserIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Profile'}
                                        type={'icon'}
                                    />
                                </UiVerticalMenuBox>
                                <UiVerticalMenuDivider/>
                                <UiVerticalMenuBox>
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'How to'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Support'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'License'}
                                        type={'small'}
                                    />
                                    <UiMenuPoint
                                        icon={<CatalogIcon
                                            sx={{width: 12, color: (theme) => theme.palette.text['high']}}/>}
                                        text={'Logout'}
                                        type={'small'}
                                    />
                                </UiVerticalMenuBox>
                            </UiVerticalMenu>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Menu horizontal
                    </Typography>
                    <div style={{width: 400}}>
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
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Subheaders
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <UiSubheader
                                onClickBack={() => alert('Back btn clicked')}
                                title="iMac 24 Inch"
                                type={'simple'}
                            />
                            <UiSubheader
                                onClickBack={() => alert('Back btn clicked')}
                                title="iMac 24 Inch"
                                onClickInfo={() => alert('Info btn clicked')}
                                type={'info'}
                            />
                            <UiSubheader
                                onClickBack={() => alert('Back btn clicked')}
                                title="iMac 24 Inch"
                                colors={ArrayMockColors}
                                defaultColorId={0}
                                onClickColor={(e) => alert('Color is selected ' + e.hex + ' where id is ' + e.id)}
                                type={'colors'}
                            />
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Walkthroug
                    </Typography>
                    <div>
                        <GapContainer sx={{margin: 5, width: 400}}>
                            <Walkthroug title={
                                <WalkthrougThemeComponent onChange={() => alert('Walkthroug')} defaultChecked={true}>
                                    Click here to add your<br/> design and select a frame<br/> in popup window
                                </WalkthrougThemeComponent>
                            }>
                                <p>Opened state</p>
                            </Walkthroug>
                            <Walkthroug open={true} title={
                                <WalkthrougThemeComponent onChange={() => alert('Walkthroug')}>
                                    Great! Now select a size<br/> and add it to your canvas
                                </WalkthrougThemeComponent>
                            } placement={'top'}>
                                <p>Opened up</p>
                            </Walkthroug>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Unlock access block
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <UiUnlockAccess
                                icon={<CrownIcon sx={{width: 16, color: (theme) => theme.palette.pure['white']}}/>}
                                title={'Pro'}
                                tabArray={tabArrayMockFour}
                                onclick={(e) => alert('subscribe: ' + e)}
                            />
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Paste block container
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <UiPasteBlockContainer>
                                <UiDropdown variant={'image'} data={dropdownsImage} isDropdownSelect={() => {
                                }}/>
                                <UiBigButton text={'Paste in canvas'} variant={'basic'}
                                             onClick={() => alert('Paste in canvas')}/>
                            </UiPasteBlockContainer>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Popup Info
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <Collapse in={mockOpen}>
                                <UiPopupInfo
                                    open={mockOpen}
                                    close={(e) => setMockOpen(e)}
                                    title={<div>Unlock high <br/> resolution mockups<br/> for free</div>}
                                    subtext={<div>Just create an account or login if<br/> already have it. And you will
                                        be<br/> able to access free high resolution<br/> version of this mockup</div>}
                                    button={
                                        <UiBigButton text={'Go Pro'} fullWidth={false} variant={'basic'}
                                                     onClick={() => alert('go to pro page')}/>
                                    }
                                />
                            </Collapse>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Account line
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <UiAccountLine data={userAccount} clickToCancel={() => alert('Cancel subscription')}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Invoices Block
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'column', width: 400}}>
                            <UiInvoiceLine data={userAccount}/>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Product Header
                    </Typography>
                    <div>
                        <GapContainer>
                            <div style={{width: 400}}>
                                <UiProductHeader
                                    backgroundColor={'#D8E2EB'}
                                    image={Images[2].img}
                                    headerElement={
                                        <UiSubheader
                                            onClickBack={() => alert('Back btn clicked')}
                                            title="iMac 24 Inch"
                                            onClickInfo={() => alert('Info btn clicked')}
                                            type={'info'}
                                        />
                                    }>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center'
                                    }}>
                                        <Typography variant="type-12" component="p"
                                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                                            Sort by items or scenes
                                        </Typography>
                                        <div style={{marginBottom: '19px'}}>
                                            <UiTabsHeader tabs={tabArrayMock} defaultTabId={2}
                                                          selectedID={(e) => setMockTabContent(e)}/>
                                        </div>
                                    </div>
                                </UiProductHeader>
                            </div>
                            <div style={{width: 400}}>
                                <UiProductHeader
                                    image={Images[1].img}
                                    headerElement={
                                        <UiSubheader
                                            onClickBack={() => alert('Back btn clicked')}
                                            title="iMac 24 Inch"
                                            onClickInfo={() => alert('Info btn clicked')}
                                            type={'info'}
                                        />
                                    }>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center'
                                    }}>
                                        <Typography variant="type-12" component="p"
                                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                                            Sort by items or scenes
                                        </Typography>
                                        <div style={{marginBottom: '19px'}}>
                                            <UiTabsHeader tabs={tabArrayMock} defaultTabId={2}
                                                          selectedID={(e) => setMockTabContent(e)} />
                                        </div>
                                    </div>
                                </UiProductHeader>
                            </div>
                            <div style={{width: 400}}>
                                <UiProductHeader
                                    backgroundColor={'#F1F2F4'}
                                    image={Images[0].img}
                                    headerElement={
                                        <UiSubheader
                                            onClickBack={() => alert('Back btn clicked')}
                                            title="iMac 24 Inch"
                                            onClickInfo={() => alert('Info btn clicked')}
                                            type={'info'}
                                        />
                                    }>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center'
                                    }}>
                                        <Typography variant="type-12" component="p"
                                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                                            Sort by items or scenes
                                        </Typography>
                                        <div style={{marginBottom: '19px'}}>
                                            <UiTabsHeader tabs={tabArrayMock} defaultTabId={2}
                                                          selectedID={(e) => setMockTabContent(e)}/>
                                        </div>
                                    </div>
                                </UiProductHeader>
                            </div>
                        </GapContainer>
                    </div>
                </PreviewBlock>
                <PreviewBlock>
                    <Typography variant="type-16" component="p"
                                sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                        Sorting Preview
                    </Typography>
                    <div>
                        <GapContainer sx={{flexDirection: 'row', gap: '15px', marginBottom: '25px'}}>
                            <UiSortingPreview items={Card} onClick={() => alert('click')} />
                        </GapContainer>
                    </div>
                </PreviewBlock>
            </PreviewContainer>
        </div>
    )
}
