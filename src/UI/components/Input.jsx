import React, {useState} from 'react';
import {InputBase, Typography} from "@mui/material";
import {ErrorIcon} from "../icons/error";
import {EyeIcon} from "../icons/eye";
import {ClosedEyeIcon} from "../icons/closedEye";


export const UiInput = ({placeholder, fullWidth, errorText, error, disabled, type, dispatchValue}) => {
    const [valueInput, setValueInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const SetupText = (e) => {
        setValueInput(e.target.value)
        dispatchValue(e.target.value)
    }

    const OpenPass = () => {
        return <>
            {showPassword &&
                 <ClosedEyeIcon onClick={() => setShowPassword(false)} sx={{ cursor: 'pointer', position: 'absolute', right: 12, fontSize: 14, color: (theme) => theme.palette.text['low']}} />
            }
            {!showPassword &&
                 <EyeIcon onClick={() => setShowPassword(true)} sx={{ cursor: 'pointer', position: 'absolute', right: 12, fontSize: 14, color: (theme) => theme.palette.text['low']}} />
            }
        </>
    }

    return <>
        {!error && type !== 'password' && <div>
        <InputBase
            sx={{
                '& .MuiInputBase-input': {
                    borderRadius: 2,
                    backgroundColor: (theme) => theme.palette.background['paper'],
                    boxShadow: (theme) => '0 0 0 1px ' + theme.palette.line,
                    padding: '7px',
                    fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                    fontSize: (theme) => theme.typography['type-14'].fontSize,
                    fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                    lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                    '&:focus': {
                        boxShadow: (theme) => '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
                    },
                    '&:active': {
                        boxShadow: (theme) => '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
                    },
                    '&:placeholder': {
                        fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                        fontSize: (theme) => theme.typography['type-14'].fontSize,
                        fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                        lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                    },
                },
            }}
            type={type && type}
            disabled={disabled && disabled}
            fullWidth={fullWidth && fullWidth}
            placeholder={placeholder && placeholder}
            value={valueInput}
            onChange={SetupText}/>
        </div>
        }
        {error && type === 'password' && <div>
            <InputBase
            sx={{
                '& .MuiInputBase-input': {
                    borderRadius: 2,
                    backgroundColor: (theme) => theme.palette.background['paper'],
                    color: (theme) => theme.palette.error['main'],
                    boxShadow: (theme) => '0 0 0 1px ' + theme.palette.error['main'],
                    padding: '7px',
                    fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                    fontSize: (theme) => theme.typography['type-14'].fontSize,
                    fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                    lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                    '&:focus': {
                        boxShadow: (theme) => '0 0 0 2px ' + theme.palette.error['main'] + ',0 0 0 4px #F35A201F',
                    },
                    '&:active': {
                        boxShadow: (theme) => '0 0 0 2px ' + theme.palette.error['main'] + ',0 0 0 4px #F35A201F',
                    },
                    '&:placeholder': {
                        fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                        fontSize: (theme) => theme.typography['type-14'].fontSize,
                        fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                        lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                    },
                },
            }}
            type={type && type}
            error
            helperText={errorText && errorText}
            disabled={disabled && disabled}
            endAdornment={<ErrorIcon sx={{ position: 'absolute', right: 12, fontSize: 14, color: (theme) => theme.palette.error['main']}} />}
            fullWidth={fullWidth && fullWidth}
            value={'Error'}
            />
            <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.error['main'], marginTop: '10px'}}>
                {errorText}
            </Typography>
        </div>
        }
        {type === 'password' && !error && <div>
            <InputBase
                sx={{
                    '& .MuiInputBase-input': {
                        borderRadius: 2,
                        backgroundColor: (theme) => theme.palette.background['paper'],
                        boxShadow: (theme) => '0 0 0 1px ' + theme.palette.line,
                        padding: '7px',
                        fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                        fontSize: (theme) => theme.typography['type-14'].fontSize,
                        fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                        lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                        '&:focus': {
                            boxShadow: (theme) => '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
                        },
                        '&:active': {
                            boxShadow: (theme) => '0 0 0 2px ' + theme.palette.accent['one'] + ',0 0 0 4px #e1ecfc',
                        },
                        '&:placeholder': {
                            fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                            fontSize: (theme) => theme.typography['type-14'].fontSize,
                            fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                            lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                        },
                    },
                }}
                type={showPassword ? 'text' : 'password'}
                error
                autoComplete={'none'}
                helperText={errorText && errorText}
                disabled={disabled && disabled}
                endAdornment={<OpenPass />}
                fullWidth={fullWidth && fullWidth}
                placeholder={placeholder && placeholder}
                value={valueInput}
                onChange={SetupText}/>
        </div>
        }
    </>
}
