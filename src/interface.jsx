import React, {useState} from 'react'
import {styled} from "@mui/material/styles";
import {Collapse, Typography} from "@mui/material";
import {ArrowIcon} from "./UI/icons/arrow";
import {UiRoundButton} from "./UI/components/RoundButton";
import {useNavigate} from "react-router-dom";
import {ScreenProfile} from "./UI/screens/profile";
import {ScreenAccount} from "./UI/screens/account";
import {ScreenConstructor} from "./UI/screens/constructor";
import {PriceIcon} from "./UI/icons/price";
import {UiBanner} from "./UI/components/Banner";
import {UiBigButton} from "./UI/components/BigButton";
import {UiPopupInfo} from "./UI/components/PopupInfo";
import {ScreenSortingBigHeader} from "./UI/screens/sortingBigHeader";
import {ScreenSortingBigHeader2} from "./UI/screens/sortingBigHeader_2";
import {ScreenSortingBigHeader3} from "./UI/screens/sortingBigHeader_3";
import {DistortTransformations1} from "./UI/screens/distortTransformation1";
import {DistortTransformations2} from "./UI/screens/distortTransformation2";
import {DistortTransformations3} from "./UI/screens/distortTransformation3";
import {ScreenAuth} from "./UI/screens/auth1";
import {ScreenAuth2} from "./UI/screens/auth2";


export const Interface = () => {

    const [showState, setShowState] = useState(true);
    const [mockOpen, setMockOpen] = useState(true);

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate(path);
    };
    const PreviewContainer = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacingsValues.xl * 2,
    }));
    const PreviewBlock = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: 'rgba(243,243,243,0.5)',
        marginBottom: theme.spacingsValues.xl,
        padding: theme.spacingsValues.xl,
        borderRadius: 6
    }));
    const ScreenBlock = styled('div')(({theme}) => ({
        background: theme.palette.pure['white'],
    }));
    const BannerBox = styled('div')(({theme}) => ({
        position: 'absolute',
        bottom: '18px',
        width: '100%'
    }));


    return (<div>
            <div style={{marginTop:8, marginLeft: 8}}>
                <UiRoundButton icon={<ArrowIcon sx={{width: 16}}/>} onClick={() => goTo('/')}/>
            </div>
            <PreviewContainer>
                <Typography variant="type-20" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    App Screens
                </Typography>

                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Profile
                </Typography>
                <PreviewBlock>
                    <ScreenBlock sx={{width: 400, height: 956}}>
                        <ScreenProfile />
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: 956}}>
                        <ScreenAccount />
                    </ScreenBlock>
                </PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Distort Transformation
                </Typography>
                <PreviewBlock>
                    <ScreenBlock sx={{width: 400, height: '692px', background: (theme) => theme.palette.background['default']}}>
                        <ScreenConstructor showPromotion={true}/>
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: '692px', position: 'relative', background: (theme) => theme.palette.background['default']}}>
                        <ScreenConstructor showPromotion={false} />
                        {/*  children props special for notification  */}
                        <BannerBox>
                            <div style={{marginLeft: '16px', marginRight: '16px'}}>
                                <Collapse in={showState}>
                                <UiBanner close={(e) => setShowState(e)}
                                          icon={{
                                              element: <PriceIcon
                                                  sx={{width: 48, color: (theme) => theme.palette.background.paper}}/>,
                                              background: '#76cc09'
                                          }}
                                          positionProps={'fixed'}
                                          title={'Pro account 30% Discount'}
                                          subtext={'Two weeks only. Code: 352dc4'} />
                                </Collapse>
                            </div>
                        </BannerBox>
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: '692px', position: 'relative', background: (theme) => theme.palette.background['default']}}>
                        <ScreenConstructor showPromotion={false} />
                        {/*  children props special for notification  */}
                        <BannerBox sx={{bottom: '145px'}}>
                            <div style={{marginLeft: '16px', marginRight: '16px'}}>
                                <Collapse in={mockOpen}>
                                    <UiPopupInfo
                                        close={(e) => setMockOpen(e)}
                                        title={<div>Unlock high <br/> resolution mockups<br/> for free</div>}
                                        subtext={<div>Just create an account or login if<br/> already have it. And you will be<br/> able to access free high resolution<br/> version of this mockup</div>}
                                        button={
                                            <UiBigButton text={'Go Pro'} fullWidth={false} variant={'basic'} onClick={() => alert('go to pro page')}/>
                                        }
                                    />
                                </Collapse>
                            </div>
                        </BannerBox>
                    </ScreenBlock>
                </PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Sorting
                </Typography>
                <PreviewBlock>
                    <ScreenBlock sx={{width: 400, height: 900, overflow: 'hidden'}}>
                        <ScreenSortingBigHeader />
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: 900, overflow: 'hidden', background: (theme) => theme.palette.background['default']}}>
                        <ScreenSortingBigHeader2 />
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: 900, overflow: 'hidden', background: (theme) => theme.palette.background['default']}}>
                        <ScreenSortingBigHeader3 />
                    </ScreenBlock>
                </PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Distort Transformation (Old Plugin mode)
                </Typography>
                <PreviewBlock>
                    <ScreenBlock sx={{width: 400, height: 'auto', overflow: 'hidden'}}>
                        <DistortTransformations1 />
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: 'auto', overflow: 'hidden'}}>
                        <DistortTransformations2 />
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 411, height: 'auto', overflow: 'hidden'}}>
                        <DistortTransformations3 />
                    </ScreenBlock>
                </PreviewBlock>
                <Typography variant="type-16" component="p" sx={{marginBottom: (theme) => theme.spacingsValues.xxs}}>
                    Auth
                </Typography>
                <PreviewBlock>
                    <ScreenBlock sx={{width: 400, height: 647, position: 'relative'}}>
                        <ScreenAuth />
                    </ScreenBlock>
                    <ScreenBlock sx={{width: 400, height: 648, position: 'relative'}}>
                        <ScreenAuth2 />
                    </ScreenBlock>
                </PreviewBlock>
            </PreviewContainer>
        </div>
    )
}
