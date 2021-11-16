import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {ArrowIcon} from "./icons/arrow";
import {styled} from "@mui/material/styles";

export const InfoBox = ({title, children, expanded}) => {

    const UiAccordion = styled(Accordion)(({theme}) => ({
        backgroundColor: theme.palette.background['default'],
        border: 'none',
        boxShadow: 'none',
        padding: 0,
        margin: 0
    }));

    return (
        <div>
            <UiAccordion defaultExpanded={expanded}>
                <AccordionSummary
                    expandIcon={<ArrowIcon
                        sx={{width: 16, transform: 'rotate(270deg)', color: (theme) => theme.palette.text['high']}}/>}
                    aria-controls="InfoBoxPanel"
                    id="InfoBoxPanel"
                >
                    <Typography variant="type-16" component="p">
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    {children}
                </AccordionDetails>
            </UiAccordion>
        </div>
    );
}
