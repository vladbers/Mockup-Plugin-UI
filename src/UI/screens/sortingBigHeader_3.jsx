import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/TinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/HorizontalMenu";
import {Card, dropdownsImage, dropdownsRealistic, tabArrayMockThree} from "../mock/mockData";
import {UiSortingPreview} from "../components/SortingPreview";
import {Typography} from "@mui/material";
import {UiDropdown} from "../components/Dropdowns";
import {UiProductHeaderFilter} from "../components/ProductHeaderFilter";



export const ScreenSortingBigHeader3 = () => {

    const SortingPage = styled('div')(({theme}) => ({
        scroll: 'auto'
    }));

    const SortingPageBody = styled('div')(({theme}) => ({
        paddingTop: '20px',
        paddingRight: '19px',
        paddingLeft: '19px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '37px 12px',
        justifyContent: 'space-between'
    }));
    const SortingGridCol = styled('div')(({theme}) => ({}));




    return (
        <SortingPage>
            <UiHorizontalMenu
                button={<UiTinyButton
                    text={'Go Pro'}
                    icon={<CrownIcon sx={{width: 14}}/>}
                    variant={'accent'}
                    onClick={() => alert('Get pro page')}/>}
                onClickBurger={() => alert('Burger is clicked')}>
                <UITabsHorizontal tabs={tabArrayMockThree} defaultTabId={0} selectedID={(e) => console.log(e)}/>
            </UiHorizontalMenu>
            <UiProductHeaderFilter
                search={(search) => console.log('search', search)}
                placeholder={''}
            >
                {/* Search filter inner */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '10px',
                    width: '100%',
                }}>
                    <div style={{width: '170px'}}>
                        <Typography variant="type-12" component="p"
                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                            Style:
                        </Typography>
                        <UiDropdown variant={'image'} autoWidth={false} sx={{width: '170px'}} data={dropdownsImage} isDropdownSelect={() => {
                        }}/>
                    </div>
                    <div style={{width: '170px'}}>
                        <Typography variant="type-12" component="p"
                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                            Platform:
                        </Typography>
                        <UiDropdown variant={'usually'} autoWidth={false} sx={{width: '170px'}} data={dropdownsRealistic} isDropdownSelect={() => {
                        }}/>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '10px',
                    width: '100%',
                    marginTop: '10px'
                }}>
                    <div style={{width: '170px'}}>
                        <Typography variant="type-12" component="p"
                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                            Device
                        </Typography>
                        <UiDropdown variant={'usually'} autoWidth={false} sx={{width: '170px'}} data={dropdownsRealistic} isDropdownSelect={() => {
                        }}/>
                    </div>
                    <div style={{width: '170px'}}>
                        <Typography variant="type-12" component="p"
                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                            Angle
                        </Typography>
                        <UiDropdown variant={'usually'} autoWidth={false} sx={{width: '170px'}} data={dropdownsRealistic} isDropdownSelect={() => {
                        }}/>
                    </div>
                </div>
                {/* Search filter inner end */}
            </UiProductHeaderFilter>
            <SortingPageBody>
                <SortingGridCol>
                    <UiSortingPreview items={Card} onClick={() => alert('click')} />
                </SortingGridCol>
                <SortingGridCol>
                    <UiSortingPreview items={Card} onClick={() => alert('click')} />
                </SortingGridCol>
                <SortingGridCol>
                    <UiSortingPreview items={Card} onClick={() => alert('click')} />
                </SortingGridCol>
                <SortingGridCol>
                    <UiSortingPreview items={Card} onClick={() => alert('click')} />
                </SortingGridCol>
                <SortingGridCol>
                    <UiSortingPreview items={Card} onClick={() => alert('click')} />
                </SortingGridCol>
                <SortingGridCol>
                    <UiSortingPreview items={Card} onClick={() => alert('click')} />
                </SortingGridCol>
            </SortingPageBody>
        </SortingPage>
    )
}
