import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 5,
    width: 20,
    height: 20,
    border: `solid 1px ${theme.palette.line}`,
    backgroundColor: theme.palette.pure['white'],
    'input:hover ~ &': {
        borderRadius: 8,
        boxShadow: `0 0 0 2px ${theme.palette.line}`,
        border: `solid 1px ${theme.palette.accent['one']}`,
        backgroundColor: theme.palette.pure['white'],
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: theme.palette['divider'],
        opacity: 0.4
    },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
    borderRadius: 5,
    backgroundColor: theme.palette.pure['white'],
    border: `solid 1px ${theme.palette.line}`,
    '&:before': {
        display: 'flex',
        backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04Ljc0OTc0IDBDOS4wNjk0IDAgOS4zODkxMSAwLjEyMTgyNyA5LjYzMzQ2IDAuMzY2MTg1QzEwLjEyMjIgMC44NTQ5MDEgMTAuMTIyMiAxLjY0NDkyIDkuNjMzNDYgMi4xMzM2NEw0LjYzMzgyIDcuMTMzMjlDNC4zOTAwOCA3LjM3NzAyIDQuMDcwMDcgNy40OTk0NyAzLjc1MDA5IDcuNDk5NDdDMy40MzAxMSA3LjQ5OTQ3IDMuMTEwMDkgNy4zNzcwMiAyLjg2NjM2IDcuMTMzMjlMMC4zNjY1MzcgNC42MzM0NkMtMC4xMjIxNzkgNC4xNDQ3NSAtMC4xMjIxNzkgMy4zNTQ3MiAwLjM2NjUzNyAyLjg2NjAxQzAuODU1MjUyIDIuMzc3MjkgMS42NDUyNyAyLjM3NzI5IDIuMTMzOTkgMi44NjYwMUwzLjc1MDA5IDQuNDgyMTFMNy44NjYwMSAwLjM2NjE4NUM4LjExMDM3IDAuMTIxODI3IDguNDMwMDcgMCA4Ljc0OTc0IDBaIiBmaWxsPSIjMTU4Q0ZEIi8+Cjwvc3ZnPgo=\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        content: '" "'
    },
    'input:hover ~ &': {
        borderRadius: 8,
        boxShadow: `0 0 0 2px ${theme.palette.line}`,
        border: `solid 1px ${theme.palette.accent['one']}`,
        backgroundColor: theme.palette.pure['white'],
    },
}));

// Inspired by blueprintjs
const BpCheckbox = (props) => {
    return (
        <Checkbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}

export const UiChekBox = (props) => {
    return (
        <div>
            <BpCheckbox {...props} />
        </div>
    );
}
