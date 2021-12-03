import React, {useState} from 'react';
import {styled} from "@mui/material/styles";

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
        overflow: 'auto',
        padding: '2px'
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
                    sx={{boxShadow: (theme) => artboard.id === selectedArtboard && '0px 0px 0px 2px ' + theme.palette.accent['one'],
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
