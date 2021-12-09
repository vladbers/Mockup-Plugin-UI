import React, {useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import Select from '@mui/material/Select';
import {MenuItem} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {MockSizeIcon} from "../icons/mocksize";


const useStyles = makeStyles(theme => ({
    rootUsually: {
        '& .MuiInputBase-input': {
            outline: 'none',
            borderRadius: 8,
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: theme.spacingsValues['xxs'],
            backgroundColor: theme.palette.pure['white'],
            color: theme.palette.text['high'],
            boxShadow: '0 0 0 1px #E1E4E8',
            padding: '7px 14px',
            transition: theme.transitions.create(['box-shadow']),
            '&:focus': {
                borderRadius: 8,
                boxShadow: '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: 'none'
        }
    },
    iconImage: {
        borderRadius: 4,
        width: 24,
        height: 24,
        marginRight: 4,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 2,
        borderRadius: 8,
        boxShadow: '6px 4px 17px 0 rgba(204, 206, 210, 0.5)',
        backgroundColor: theme.palette.pure['white'],
        marginTop: 2
    },
    list: {
        padding: 4,
        flexGrow: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 2,
        borderRadius: 8,
        boxShadow: '6px 4px 17px 0 rgba(204, 206, 210, 0.5)',
        background: theme.palette.pure['white'],
        "& li":{
            padding: '7px 14px',
        },
        "& li:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected":{
            textAlign: 'left',
            color: theme.palette.pure['white'],
            alignSelf: 'stretch',
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            borderRadius: 8,
            backgroundColor: theme.palette.accent['one']
        },
        "& li.Mui-selected:hover":{
            background: theme.palette.accent['one']
        }
    },
    rootIcons: {
        '& .MuiInputBase-input': {
            outline: 'none',
            borderRadius: 8,
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
            backgroundColor: theme.palette.pure['white'],
            boxShadow: '0 0 0 1px #E1E4E8',
            color: theme.palette.text['high'],
            padding: '5px 5.9px',
            transition: theme.transitions.create(['box-shadow']),
            '&:focus': {
                borderRadius: 8,
                boxShadow: '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: 'none'
        }
    },
    rootSize: {
        '& .MuiInputBase-input': {
            outline: 'none',
            borderRadius: 8,
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: theme.palette.pure['white'],
            boxShadow: '0 0 0 1px #E1E4E8',
            color: theme.palette.text['high'],
            padding: '5px 11px',
            transition: theme.transitions.create(['box-shadow']),
            '&:focus': {
                borderRadius: 8,
                boxShadow: '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: 'none'
        }
    },
    listSizeImage: {
        padding: 4,
        flexGrow: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 2,
        borderRadius: 8,
        boxShadow: '6px 4px 17px 0 rgba(204, 206, 210, 0.5)',
        background: theme.palette.pure['white'],
        "& li":{
            gap: 4,
            paddingLeft: 3,
            paddingRight: 0
        },
        "& li:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected":{
            textAlign: 'left',
            alignSelf: 'stretch',
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 4,
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        }
    },
    listImage: {
        padding: 4,
        flexGrow: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 2,
        borderRadius: 8,
        boxShadow: '6px 4px 17px 0 rgba(204, 206, 210, 0.5)',
        background: theme.palette.pure['white'],
        "& li":{
            gap: 4
        },
        "& li:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected":{
            textAlign: 'left',
            alignSelf: 'stretch',
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 4,
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        }
    },
    listSize: {
        padding: 4,
        flexGrow: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 2,
        borderRadius: 8,
        boxShadow: '6px 4px 17px 0 rgba(204, 206, 210, 0.5)',
        background: theme.palette.pure['white'],
        "& li":{
            gap: 4,
            paddingLeft: 7,
            paddingRight: 0
        },
        "& li:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected":{
            textAlign: 'left',
            alignSelf: 'stretch',
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 4,
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        },
        "& li.Mui-selected:hover":{
            textAlign: 'left',
            alignSelf: 'stretch',
            borderRadius: 8,
            backgroundColor: theme.palette.transparent['dark-5'],
        }
    },
    icon:{
        color: theme.palette.text['low'],
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none',
        fontSize: 22,
        right: 8,
    },
}))

export const UiDropdown = ({variant, data, isDropdownSelect, autoWidth, sx}) => {
    const [selected, setSelected] = React.useState(null);

    const classes = useStyles()

    const menuProps = {
        classes: {
            paper: classes.paper,
            list: classes.list,
        },
        getContentAnchorEl: null,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        }
    };
    const menuPropsImage = {
        classes: {
            paper: classes.paper,
            list: classes.listSizeImage,
        },
        getContentAnchorEl: null,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        }
    };
    const menuPropsSize = {
        classes: {
            paper: classes.paper,
            list: classes.listSize
        },
        getContentAnchorEl: null,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        }
    };


    const handleChange = (event) => {
        setSelected(event.target.value);
        isDropdownSelect(event.target.value)
    };

    useEffect(() => {
        !selected && setSelected(data[0].value);
    }, [data, selected])


    const iconComponent = (props) => {
        return (
            <KeyboardArrowDownIcon className={props.className + " " + classes.icon}/>
        )
    }

    switch (variant) {
        case 'size':
            return <Select className={classes.rootSize}  autoWidth={autoWidth} sx={sx} MenuProps={menuPropsSize} IconComponent={iconComponent}
                           onChange={handleChange} value={selected}>
                {data.map(item => <MenuItem value={item.value}><MockSizeIcon sx={{width: 16}}/>
                    {item.title}
                </MenuItem>)}
            </Select>
        case 'usually':
            return <Select className={classes.rootUsually} autoWidth={autoWidth} sx={sx} MenuProps={menuProps} IconComponent={iconComponent}
                           onChange={handleChange} value={selected}>
                {data.map(item => <MenuItem value={item.value}>
                    {item.title}
                </MenuItem>)}
            </Select>

        case 'image':
            return <Select className={classes.rootIcons} autoWidth={autoWidth} sx={sx} MenuProps={menuPropsImage} IconComponent={iconComponent}
                           onChange={handleChange} value={selected}>
                {data.map(item => <MenuItem value={item.value}>
                    <img src={item.img} alt={item.title} className={classes.iconImage}/>
                    {item.title}
                </MenuItem>)}
            </Select>

        default:
            return <></>;
    }
}


