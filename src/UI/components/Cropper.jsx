import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import {makeStyles} from "@mui/styles";
import {UiBigButton} from "./BigButton";

const useStyles = makeStyles(theme => ({
    home: {
        background: '#1C1C1C',
        width: '100%',
    },
    root: {
        position: 'relative',
        width: '100%',
        height: '647px',
        background: '#1C1C1C',
    },
    buttonBox: {
        position: 'absolute',
        bottom: '42px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center'
    }
}));

export const CropperImages = ({image, aspectRatio, defaultZoom, callbackData}) => {
    const [cropZone, setCropZone] = useState(null);
    const classes = useStyles();
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(defaultZoom ? defaultZoom : 1)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCropZone(croppedAreaPixels)
    }, [])

    const sendHandler = () => {
        callbackData(cropZone)
    }

    return <>
        <div className={classes.home}>
            <div className={classes.root}>
                <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    showGrid={true}
                    aspect={aspectRatio}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    style={{ containerStyle: {}, mediaStyle: {}, cropAreaStyle: {
                    }}}
                />
                <div className={classes.buttonBox}>
                    <UiBigButton text={'Crop'} variant={'basic'} onClick={sendHandler}/>
                </div>
            </div>

        </div>
    </>
}


