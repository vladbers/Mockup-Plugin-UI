import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {VariantIcon} from "../icons/variant";

const InvoicesBox = styled('div')(({theme}) => ({}));
const InvoicesInnerBox = styled('div')(({theme}) => ({
    borderRadius: '8px',
    border: '1px solid ' + theme.palette.transparent['dark-10'],
    padding: '10px'
}));
const InvoicesData = styled('div')(({theme}) => ({
    display: 'flex',
    gap: '7px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
}));
const InvoicesLine = styled('div')(({theme}) => ({
    width: '100%',
    backgroundColor: theme.palette.line,
    height: '1px',
    marginBottom: '10px',
    marginTop: '10px',
}));

export const UiInvoiceLine = ({data}) => {


    const InvoiceLink = ({data}) => {

        const TimeConv = ({time}) => {
            const options = {year: 'numeric', month: 'short', day: 'numeric'};
            return <Typography
                variant="type-12"
                component="p"
                sx={{
                    color: (theme) => theme.palette.text['low'],
                    cursor: 'pointer'
                }}>
                {new Date(time * 1000).toLocaleString('en-US', options)}
            </Typography>
        }

        return <>
            {
                data.map((item, index) =>
                    <>
                        <InvoicesData key={item.id}>
                            <VariantIcon sx={{fontSize: 16, color: (theme) => theme.palette.text['low']}}/>
                            <TimeConv time={item.data} />
                        </InvoicesData>
                        {data.length !== (index + 1) &&
                            <InvoicesLine />
                        }
                    </>
                )
            }
        </>
    }

    return (
        <InvoicesBox>
            <Typography
                variant="type-16"
                component="p"
                sx={{
                    color: '#353946',
                    cursor: 'pointer',
                    marginBottom: '9px'
                }}>
                Invoices
            </Typography>
            <InvoicesInnerBox>
                <InvoiceLink data={data.subscriptions[0].invoices}/>
            </InvoicesInnerBox>
        </InvoicesBox>
    )
}
