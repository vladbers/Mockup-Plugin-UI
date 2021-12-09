import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {UiDropdown} from "./Dropdowns";
import {UiBigButton} from "./BigButton";
import {TurnLeftIcon} from "../icons/turnLeft";
import {TurnRightIcon} from "../icons/turnRight";


const TransformationFooterComponent = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: '10px'
}));
const FooterComponent = styled('div')(({theme}) => ({
    display: 'flex',
}));


export const UiTransformationFooterComponent = ({sizes, callbackOptions}) => {
    const [options, setOptions] = useState({selectedID: 0, turnHandler: null});


    const optionsHandler = () => {
        callbackOptions(options)
    }
    const leftHandler = () => {
        setOptions({selectedID: options.selectedID, turnHandler: 'left'})
        callbackOptions(options)
    }
    const rightHandler = () => {
        setOptions({selectedID: options.selectedID, turnHandler: 'right'})
        callbackOptions(options)
    }
    const selectHandler = (id) => {
        setOptions({selectedID: id, turnHandler: options.turnHandler})
    }

    return <>
        <TransformationFooterComponent>
            <FooterComponent sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                gap: '10px'
            }}>
                <UiDropdown variant={'usually'} data={sizes} isDropdownSelect={selectHandler}/>
                <FooterComponent sx={{display: 'flex', gap: '10px'}}>
                    <TurnLeftIcon sx={{width: '16px', cursor: 'pointer'}} onClick={leftHandler}/>
                    <TurnRightIcon sx={{width: '16px', cursor: 'pointer'}} onClick={rightHandler}/>
                </FooterComponent>
            </FooterComponent>
            <FooterComponent sx={{float: 'right'}}>
                <UiBigButton text={'Apply'} variant={'basic'} onClick={optionsHandler}/>
            </FooterComponent>
        </TransformationFooterComponent>
    </>
}
