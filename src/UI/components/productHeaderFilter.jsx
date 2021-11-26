import React from 'react';
import {styled} from "@mui/material/styles";
import {SearchIcon} from "../icons/search";
import {UiBigInput} from "../icons/bigInput";


export const UiProductHeaderFilter = ({search, placeholder, children}) => {

    const ProductHeaderFilter = styled('div')(({theme}) => ({
        width: '90%',
        padding: '20px',
        borderBottom: '1px solid ' + theme.palette.line,
        marginBottom: '20px'
    }));
    const InnerBlock = styled('div')(({theme}) => ({
        marginTop: '10px'
    }));
    const SearchBlock = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: theme.palette.pure['white'],
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 3px -2px rgba(0, 0, 0, 0.09)',
        borderRadius: '8px',
        gap: '18px',
        padding: '12px 20px',
        justifyContent: 'space-between',
    }));

    return (
        <ProductHeaderFilter>
            <SearchBlock>
                <SearchIcon sx={{width: '20px'}}/>
                <UiBigInput search={search} placeholder={placeholder}/>
            </SearchBlock>
            <InnerBlock>
                {children}
            </InnerBlock>
        </ProductHeaderFilter>
    )
}
