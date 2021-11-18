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
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: (theme) => theme.palette.line,
                    padding: (theme) => `${theme.spacingsValues.s}px ${theme.spacingsValues.l}px`,
                    fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                    fontSize: (theme) => theme.typography['type-14'].fontSize,
                    fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                    lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                    '&:focus': {
                        boxShadow: '0 0 0 2px #e1ecfc',
                        border: (theme) => `solid 1px ${theme.palette.accent['one']}`
                    },
                    '&:active': {
                        boxShadow: '0 0 0 2px #e1ecfc',
                        border: (theme) => `solid 1px ${theme.palette.accent['one']}`
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
                    borderStyle: "solid",
                    borderWidth: 1,
                    color: (theme) => theme.palette.error['main'],
                    borderColor: (theme) => theme.palette.error['main'],
                    padding: (theme) => `${theme.spacingsValues.s}px ${theme.spacingsValues.l}px`,
                    fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                    fontSize: (theme) => theme.typography['type-14'].fontSize,
                    fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                    lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                    '&:focus': {
                        boxShadow: '0 0 0 2px #e1ecfc',
                        border: (theme) => `solid 1px ${theme.palette.error['main']}`
                    },
                    '&:active': {
                        boxShadow: '0 0 0 2px #e1ecfc',
                        border: (theme) => `solid 1px ${theme.palette.error['main']}`
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
            placeholder={placeholder && placeholder}
            value={'Error'}
            onChange={SetupText}/>
            <Typography variant="type-10" component="p" sx={{color: (theme) => theme.palette.error['main']}}>
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
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: (theme) => theme.palette.line,
                        padding: (theme) => `${theme.spacingsValues.s}px ${theme.spacingsValues.l}px`,
                        fontFamily: (theme) => theme.typography['type-14'].fontFamily,
                        fontSize: (theme) => theme.typography['type-14'].fontSize,
                        fontWeight: (theme) => theme.typography['type-14'].fontWeight,
                        lineHeight: (theme) => theme.typography['type-14'].lineHeight,
                        '&:focus': {
                            boxShadow: '0 0 0 2px #e1ecfc',
                            border: (theme) => `solid 1px ${theme.palette.accent['one']}`
                        },
                        '&:active': {
                            boxShadow: '0 0 0 2px #e1ecfc',
                            border: (theme) => `solid 1px ${theme.palette.accent['one']}`
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
