import React from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/TinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/HorizontalMenu";
import {Card, Images, tabArrayMock, tabArrayMockThree} from "../mock/mockData";
import {UiSubheader} from "../components/Subheaders";
import {Typography} from "@mui/material";
import {UiTabsHeader} from "../components/UITabs";
import {UiProductHeader} from "../components/ProductHeader";
import {UiSortingPreview} from "../components/SortingPreview";



export const ScreenSortingBigHeader = () => {

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
                                      selectedID={1} />
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
