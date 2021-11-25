import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {Card, dropdownsRealistic, Images, tabArrayMockThree} from "../mock/mockData";
import {UiSubheader} from "../components/subheaders";
import {Typography} from "@mui/material";
import {UiProductHeader} from "../components/productHeader";
import {UiSortingPreview} from "../components/sortingPreview";
import {UiDropdown} from "../components/dropdowns";



export const ScreenSortingBigHeader2 = () => {

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
            <UiProductHeader
                background={'#FAFAFA'}
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
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '10px',
                    width: '100%',
                }}>
                    <div style={{width: '170px'}}>
                        <Typography variant="type-12" component="p"
                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                            Sort by items or scenes
                        </Typography>
                        <UiDropdown variant={'usually'} data={dropdownsRealistic} isDropdownSelect={() => {
                        }}/>
                    </div>
                    <div style={{width: '170px'}}>
                        <Typography variant="type-12" component="p"
                                    sx={{color: (theme) => theme.palette.transparent['dark-45'], marginBottom: '10px'}}>
                            Sort by items or scenes
                        </Typography>
                        <UiDropdown variant={'usually'} data={dropdownsRealistic} isDropdownSelect={() => {
                        }}/>
                    </div>
                </div>
            </UiProductHeader>
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
