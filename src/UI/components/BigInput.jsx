import React, {useState} from 'react';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: '30px',
        border: 'none',
        background: 'none',
        outline: 'none!important',
        /* 24 regular */
        fontFamily: theme.typography['type-24-regular'].fontFamily,
        fontWeight: theme.typography['type-24-regular'].fontWeight,
        fontSize: theme.typography['type-24-regular'].fontSize,
        // lineHeight: theme.typography['type-24-regular'].lineHeight,
        /* Text High */
        color: theme.palette.text['high'],
        '&::placeholder': {
            /* 24 regular */
            fontFamily: theme.typography['type-24-regular'].fontFamily,
            fontWeight: theme.typography['type-24-regular'].fontWeight,
            fontSize: theme.typography['type-24-regular'].fontSize,
            // lineHeight: theme.typography['type-24-regular'].lineHeight,
            /* Text High */
            color: theme.palette.text['low']
        }
    }
}));

export const UiBigInput = ({search, placeholder}) => {
    const [valueInput, setValueInput] = useState('');
    const classes = useStyles();

    const handleChange = (e) => {
        setValueInput(e.target.value)
        search(e.target.value)
    }


    return (
        <input type="search" className={classes.root} placeholder={placeholder} value={valueInput} onChange={handleChange}/>
    )
}
