import React, {useState} from 'react'
import {styled} from '@mui/material/styles';
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

// Mock data
import dropdownsIcon from './assets/dropdownsIcon.png'
import {NewWindowIcon} from "./UIElements/components/icons/newWindow";
import {RefreshIcon} from "./UIElements/components/icons/refrash";
import {CloseIcon} from "./UIElements/components/icons/close";
import {ArrowIcon} from "./UIElements/components/icons/arrow";
import {MockSizeIcon} from "./UIElements/components/icons/mocksize";
import {DistortIcon} from "./UIElements/components/icons/distort";
import {CrownIcon} from "./UIElements/components/icons/crown";
import {ErrorIcon} from "./UIElements/components/icons/error";
import {PriceIcon} from "./UIElements/components/icons/price";
import {StyleIcon} from "./UIElements/components/icons/style";
import {ResizeIcon} from "./UIElements/components/icons/resize";
import {SizeIcon} from "./UIElements/components/icons/size";
import {CatalogIcon} from "./UIElements/components/icons/catalog";

// Mock
import {ColorsMock} from "./UIElements/mock/colorPalette";
import {TextMock} from "./UIElements/mock/textTeampleate";
import {SpacingMock} from "./UIElements/mock/spacingMock";
import {StarIcon} from "./UIElements/components/icons/star";
import {IconsMock} from "./UIElements/mock/iconsMock";

// components
import {UiBigButton} from "./UIElements/components/bigButton";
import {UiTinyButton} from "./UIElements/components/tinyButton";
import {UiRoundButton} from "./UIElements/components/roundButton";
import {UiToggleButton} from "./UIElements/components/toggleButton";
import {UiDropdown} from "./UIElements/components/dropdowns";
import {UiInput} from "./UIElements/components/input";
import {UiBanner} from "./UIElements/components/banner";
import {UiTabsHeader} from "./UIElements/components/UITabs";
import {TableContainer} from "./UIElements/components/tabsContainer";
import {UiAuthButton} from "./UIElements/components/authBtn";
import {UiChekBox} from "./UIElements/components/checkBox";
import {UITabsHorizontal} from "./UIElements/components/UITabsHorizontal";
import {UiInfoBar} from "./UIElements/components/info";
import {UiMenuPoint} from "./UIElements/components/menuPoint";




// Mock data Dropdowns
const dropdownsSize = [
    {
        id: 0,
        title: '1500',
        value: '1500',
        icon: <MockSizeIcon sx={{width: 16}}/>
    },
    {
        id: 1,
        title: '3000',
        value: '3000',
        icon: <MockSizeIcon sx={{width: 16}}/>
    },
    {
        id: 2,
        title: '6000',
        value: '6000',
        icon: <MockSizeIcon sx={{width: 16}}/>
    }
]

const dropdownsImage = [
    {
        id: 0,
        title: '1500',
        value: '1500',
        img: dropdownsIcon
    },
    {
        id: 1,
        title: '3000',
        value: '3000',
        img: dropdownsIcon
    },
    {
        id: 2,
        title: '6000',
        value: '6000',
        img: dropdownsIcon
    }
]

const dropdownsRealistic = [
    {
        id: 0,
        title: 'Realistic',
        value: 'Realistic'
    },
    {
        id: 1,
        title: 'Simple dimples popit',
        value: 'Simple'
    },
    {
        id: 2,
        title: 'Selected',
        value: 'Selected'
    }
]
// id: 0 in first element is required
const tabArrayMock = [
    {
        id: 0,
        label: 'Scenes',
        subtext: ''
    },
    {
        id: 1,
        label: 'Front',
        subtext: ''
    },
    {
        id: 2,
        label: 'Top',
        subtext: '-12%'
    },
    {
        id: 3,
        label: 'Iso',
        subtext: ''
    }
]

const tabArrayMockTwo = [
    {
        id: 0,
        label: 'Catalog',
    },
    {
        id: 1,
        label: 'Catalog',
    }
]

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
            <div style={{marginTop:8, marginLeft: 8}}>
                <UiRoundButton icon={<ArrowIcon sx={{width: 16}}/>} onClick={() => goTo('/')}/>
            </div>
        <PreviewContainer>
            <Typography variant="type-20" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                UI Kit
            </Typography>

            {/*{ Preview Colors }*/}

            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Colors
                </Typography>
                <div>
                    <ColorsMock/>
                </div>
            </PreviewBlock>

            {/*{ Preview Fonts }*/}

            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Fonts
                </Typography>
                <div>
                    <TextMock/>
                </div>
            </PreviewBlock>

            {/*{ Preview Spacing }*/}

            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Spacing
                </Typography>
                <div>
                    <SpacingMock/>
                </div>
            </PreviewBlock>

            {/*{ Preview Buttons }*/}

            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Big Button
                </Typography>
                <GapContainer>
                    {/*variant: basic / ghost*/}
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
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Icons
                </Typography>
                <div>
                    <IconsMock/>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Round Button
                </Typography>
                <div>
                    <GapContainer>
                        {/*variant: null / ignore*/}
                        {/*icon: element*/}
                        {/*onclick: return callback*/}
                        <UiRoundButton icon={<CloseIcon sx={{width: 16}}/>} onClick={() => alert('Simple')}/>
                        <UiRoundButton icon={<ArrowIcon sx={{width: 16}}/>} onClick={() => alert('Simple')}/>
                        <UiRoundButton variant={'ignore'} icon={<CloseIcon sx={{width: 16}}/>}/>
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                        <UiInput placeholder={'Error'} error={true} errorText={'Please use real email'} type={'text'}
                                 dispatchValue={(e) => console.log(e)}/>
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Banner
                </Typography>
                <div>
                    <GapContainerFullElements>
                        {/*open: open state*/}
                        {/*close: return callback form close (state)*/}
                        {/*icon: element and bg hex*/}
                        {/*fullWidth: true / false*/}
                        {/*title: text*/}
                        {/*subtext: text*/}
                        <UiBanner open={mockOpen} close={(e) => setMockOpen(e)}
                                  icon={{
                                      element: <DistortIcon
                                          sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                      background: '#1184ef'
                                  }}
                                  title={'Perspective Transformation'}
                                  subtext={'A collection of highly detailed'}
                        />
                        <UiBanner open={mockOpen} close={(e) => setMockOpen(e)}
                                  icon={{
                                      element: <CrownIcon
                                          sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                      background: '#11c7ef'
                                  }}
                                  title={'Go Pro'}
                                  subtext={'A collection of highly detailed'}/>
                        <UiBanner open={mockOpen} close={(e) => setMockOpen(e)}
                                  icon={{
                                      element: <ErrorIcon
                                          sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                      background: '#e7290f'
                                  }}
                                  title={'Something went wrong'}
                                  subtext={'Please check your connection'}/>
                        <UiBanner open={mockOpen} close={(e) => setMockOpen(e)}
                                  icon={{
                                      element: <PriceIcon
                                          sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                      background: '#76cc09'
                                  }}
                                  title={'Pro account 30% Discount'}
                                  subtext={'Two weeks only. Code: 352dc4'}/>
                    </GapContainerFullElements>
                    <br/>
                    <UiBanner open={mockOpen} close={(e) => setMockOpen(e)}
                              icon={{
                                  element: <PriceIcon
                                      sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                  background: '#76cc09'
                              }}
                              title={'Pro account 30% Discount'}
                              subtext={'Two weeks only. Code: 352dc4'}/>
                    <br/>
                    <UiBigButton text={'Re-open all'} variant={mockOpen ? '' : 'basic'}
                                 onClick={() => setMockOpen(true)}/>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                        <UiAuthButton text={'Continue with other auth'} onClick={() => alert('Auth by other auth')}/>
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
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
                            <TableContainer value={mockTabContentTwo} index={0}>
                                One content
                            </TableContainer>
                            <TableContainer value={mockTabContentTwo} index={1}>
                                Two content
                            </TableContainer>
                        </div>
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Info
                </Typography>
                <div>
                    {/*iconElement: icon component */}
                    {/*titleText: text*/}
                    {/*type: size / link */}
                    {/*href: url */}
                    <GapContainer sx={{flexDirection: 'column'}}>
                        <UiInfoBar
                            iconElement={<SizeIcon sx={{width: 14, color: (theme) => theme.palette.text['low']}} />}
                            titleText={'Max Resolution'}
                            type={'size'}
                            resolutionText={'6000 x 4500 px'} />
                        <UiInfoBar
                            iconElement={<ResizeIcon sx={{width: 14, color: (theme) => theme.palette.text['low']}} />}
                            titleText={'Screen Proportions'}
                            type={'size'}
                            resolutionText={'2000 x 1500 px'} />
                        <UiInfoBar
                            iconElement={<StyleIcon sx={{width: 14, color: (theme) => theme.palette.text['low']}} />}
                            titleText={'Style'}
                            type={'link'}
                            href={'https://longscroll-mockups.com'}
                        />
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Menu Points
                </Typography>
                <div>
                    {/*icon: icon component */}
                    {/*text: text*/}
                    {/*type: selected / icon /  small */}
                    {/*onClick: return click callback */}
                    <GapContainer sx={{flexDirection: 'row'}}>
                        <UiMenuPoint
                            icon={<CatalogIcon sx={{width: 12, color: (theme) => theme.palette.text['high']}} />}
                            text={'Go Pro'}
                            type={'icon'}
                        />
                        <UiMenuPoint
                            icon={<CrownIcon sx={{width: 12, color: (theme) => theme.palette.accent['one']}} />}
                            text={'Go Pro'}
                            type={'selected'}
                        />
                        <UiMenuPoint
                            icon={<CatalogIcon sx={{width: 12, color: (theme) => theme.palette.text['high']}} />}
                            text={'Go Pro'}
                            type={'small'}
                        />
                    </GapContainer>
                </div>
            </PreviewBlock>
            <PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Menu horizontal
                </Typography>
                <div>
                    {/*icon: icon component */}
                    {/*text: text*/}
                    {/*type: selected / icon /  small */}
                    {/*onClick: return click callback */}
                    <GapContainer sx={{flexDirection: 'row'}}>

                    </GapContainer>
                </div>
            </PreviewBlock>
        </PreviewContainer>
        </div>
    )
}
