import React from 'react';import {Button, Typography} from "@mui/material";import {styled} from "@mui/material/styles";const BasicButton = styled(Button)(({theme}) => ({    // width: 141,    // height: 38,    padding: '9px 24px',    borderRadius: "8px",    backgroundColor: theme.palette.accent['one'],    color: theme.palette.pure['white'],    boxShadow: 'none',    '&:hover': {        backgroundColor: theme.palette.accent['two'],        boxShadow: 'none'    },    '& .MuiButton-startIcon': {        marginLeft: 0    }}));const InnerButton = styled(Button)(({theme}) => ({    // width: 141,    // height: 38,    padding: '9px 24px',    borderRadius: "8px",    backgroundColor: theme.palette.accent['two'],    color: theme.palette.pure['white'],    boxShadow: 'none',    '&:hover': {        backgroundColor: theme.palette.transparent['dark-5'],        boxShadow: 'none'    },    '& .MuiButton-startIcon': {        marginLeft: 0    }}));const GhostButton = styled(Button)(({theme}) => ({    // width: 141,    // height: 38,    padding: '9px 24px',    borderRadius: "8px",    borderStyle: "solid",    borderWidth: 1,    borderColor: theme.palette.line,    color: theme.palette.text['high'],    backgroundColor: theme.palette.pure['white'],    boxShadow: 'none',    '&:hover': {        color: theme.palette.text['low'],        backgroundColor: theme.palette.pure['white'],        boxShadow: 'none'    },    '& .MuiButton-startIcon': {        marginLeft: 0    }}));const DefaultButton = styled(Button)(({theme}) => ({    // width: 141,    // height: 38,    padding: '9px 24px',    borderRadius: "8px",    opacity: 0.3,    color: theme.palette.pure['white'],    backgroundColor: theme.palette.text['low'],    boxShadow: 'none',    '&:hover': {        color: theme.palette.pure['white'],        backgroundColor: theme.palette.text['low'],        boxShadow: 'none'    },    '& .MuiButton-startIcon': {        marginLeft: 0    }}));export const UiBigButton = ({text, variant, icon, fullWidth, onClick}) => {    return (<>            {variant === 'basic' && !icon &&                 <BasicButton variant="contained" fullWidth={fullWidth} onClick={onClick}>                     <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px' }}>                         {text}                     </Typography>                 </BasicButton>            }            {variant === 'ghost' && !icon &&                 <GhostButton variant="contained" fullWidth={fullWidth} onClick={onClick}>                     <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                         {text}                     </Typography>                 </GhostButton>            }            {variant === 'inner' && !icon &&            <InnerButton variant="contained" fullWidth={fullWidth} onClick={onClick}>                <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                    {text}                </Typography>            </InnerButton>            }            {!variant  && !icon &&                 <DefaultButton variant="contained" fullWidth={fullWidth} onClick={onClick}>                     <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                         {text}                     </Typography>                 </DefaultButton>            }            {variant === 'basic' && icon &&            <BasicButton variant="contained" fullWidth={fullWidth} endIcon={icon} onClick={onClick}>                <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                    {text}                </Typography>            </BasicButton>            }            {variant === 'ghost' && icon &&            <GhostButton variant="contained" fullWidth={fullWidth} endIcon={icon} onClick={onClick}>                <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                    {text}                </Typography>            </GhostButton>            }            {variant === 'inner' && icon &&            <InnerButton variant="contained" fullWidth={fullWidth} endIcon={icon} onClick={onClick}>                <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                    {text}                </Typography>            </InnerButton>            }            {!variant  && icon &&            <DefaultButton variant="contained" fullWidth={fullWidth} endIcon={icon} onClick={onClick}>                <Typography variant="type-14" sx={{ textTransform: 'none', padding: '0px', margin: '0px'  }}>                    {text}                </Typography>            </DefaultButton>            }        </>    )}