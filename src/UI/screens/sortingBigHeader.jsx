import React, {useState} from 'react'
import {styled} from "@mui/material/styles";
import {UiTinyButton} from "../components/tinyButton";
import {CrownIcon} from "../icons/crown";
import {UITabsHorizontal} from "../components/UITabsHorizontal";
import {UiHorizontalMenu} from "../components/horizontalMenu";
import {Images, tabArrayMock, tabArrayMockThree} from "../mock/mockData";
import {UiSubheader} from "../components/subheaders";
import {Typography} from "@mui/material";
import {UiTabsHeader} from "../components/UITabs";
import {UiProductHeader} from "../components/productHeader";



export const ScreenSortingBigHeader = () => {
    const [mockTabContent, setMockTabContent] = useState(2);

    const SortingPage = styled('div')(({theme}) => ({}));

    const SortingPageBody = styled('div')(({theme}) => ({
        paddingRight: '20px',
        paddingLeft: '20px'
    }));




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
                                      selectedID={(e) => setMockTabContent(e)} />
                    </div>
                </div>
            </UiProductHeader>
            <SortingPageBody>

            </SortingPageBody>
        </SortingPage>
    )
}
