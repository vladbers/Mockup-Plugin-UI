import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {border, padding} from "@mui/system";

export const UiSelectArtboardComponent = ({artboardsArray, toSelectId, fromSelectId}) => {
    const [selectedArtboard, setSelectedArtboard] = useState(toSelectId ? toSelectId : 0);


    const artboardHandler = (id) => {
        setSelectedArtboard(id);
        fromSelectId(id)
    }

    const ArtboardComponent = styled('div')(({theme}) => ({
        width: '100%',
        height: '438px',
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '11px 10px',
        overflow: 'auto'
    }));
    const ArtboardSelect = styled('div')(({theme}) => ({
        width: '109px',
        height: '109px',
        borderRadius: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        background: theme.palette.transparent['dark-5'],
        border: '2px solid transparent',
        cursor: 'pointer',
        padding: '4px'
    }));
    const ArtboardImage = styled('img')(({theme}) => ({
        width: '100%',
        objectFit: 'contain',
        background: theme.palette.transparent['dark-5'],
        borderRadius: '3px',
    }));


    return <>
        <ArtboardComponent>
            {artboardsArray.map(artboard =>
                <ArtboardSelect
                    onClick={() => artboardHandler(artboard.id)}
                    sx={{border: (theme) => artboard.id === selectedArtboard && '2px solid ' + theme.palette.accent['one'],
                        background: (theme) => artboard.id === selectedArtboard && theme.palette.transparent['color-20']}}>
                    <ArtboardImage
                        src={artboard.img}
                        alt={artboard.id}
                        key={artboard.id} />
                </ArtboardSelect>
            )}
        </ArtboardComponent>
    </>
}
