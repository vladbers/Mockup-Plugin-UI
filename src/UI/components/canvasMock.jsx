import React from 'react';
import {styled} from "@mui/material/styles";
import canvasMock from '../../assets/canvas.svg'

export const UiCanvas = () => {

    const Canvas = styled('div')(({ theme }) => ({
            width: '100%',
            height: 288
    }));


    return (
        <Canvas>
            <img src={canvasMock} alt="Canvas" style={{width: '100%'}}/>
        </Canvas>
    )
}
