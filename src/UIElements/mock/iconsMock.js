import React from "react";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";

import {ArrowIcon} from "../components/icons/arrow";
import {CatalogIcon} from "../components/icons/catalog";
import {CatalogViewIcon} from "../components/icons/catalogView";
import {CloseIcon} from "../components/icons/close";
import {ClosedEyeIcon} from "../components/icons/closedEye";
import {CopyIcon} from "../components/icons/copy";
import {CrownIcon} from "../components/icons/crown";
import {CursorIcon} from "../components/icons/cursor";
import {DistortIcon} from "../components/icons/distort";
import {ErrorIcon} from "../components/icons/error";
import {EyeIcon} from "../components/icons/eye";
import {HelpIcon} from "../components/icons/help";
import {HelpiIcon} from "../components/icons/helpi";
import {InfoIcon} from "../components/icons/info";
import {LoginIcon} from "../components/icons/login";
import {LogoutIcon} from "../components/icons/logout";
import {MenuIcon} from "../components/icons/menu";
import {NewWindowIcon} from "../components/icons/newWindow";
import {PlusIcon} from "../components/icons/plus";
import {PriceIcon} from "../components/icons/price";
import {RefreshIcon} from "../components/icons/refrash";
import {ResizeIcon} from "../components/icons/resize";
import {SearchIcon} from "../components/icons/search";
import {SizeIcon} from "../components/icons/size";
import {StarIcon} from "../components/icons/star";
import {StyleIcon} from "../components/icons/style";
import {SupportIcon} from "../components/icons/support";
import {UserIcon} from "../components/icons/user";
import {VariantIcon} from "../components/icons/variant";
import {GoogleIcon} from "../components/icons/ggl";
import {TwitterIcon} from "../components/icons/tw";
import {FacebookIcon} from "../components/icons/fb";

export const IconsMock = () => {

    const StackBlock = styled(Stack)(({theme}) => ({
        flexWrap: 'wrap',
        gap: theme.spacingsValues.xs,
    }));

    const sxMock = {
        width: 16
    }

    return (
        <StackBlock direction="row">
            <ArrowIcon sx={sxMock}/>
            <CatalogIcon sx={sxMock}/>
            <CatalogViewIcon sx={sxMock}/>
            <CloseIcon sx={sxMock}/>
            <ClosedEyeIcon sx={sxMock}/>
            <CopyIcon sx={sxMock}/>
            <CrownIcon sx={sxMock}/>
            <CursorIcon sx={sxMock}/>
            <DistortIcon sx={sxMock}/>
            <ErrorIcon sx={sxMock}/>
            <EyeIcon sx={sxMock}/>
            <HelpIcon sx={sxMock}/>
            <HelpiIcon sx={sxMock}/>
            <InfoIcon sx={sxMock}/>
            <LoginIcon sx={sxMock}/>
            <LogoutIcon sx={sxMock}/>
            <MenuIcon sx={sxMock}/>
            <NewWindowIcon sx={sxMock}/>
            <PlusIcon sx={sxMock}/>
            <PriceIcon sx={sxMock}/>
            <RefreshIcon sx={sxMock}/>
            <ResizeIcon sx={sxMock}/>
            <SearchIcon sx={sxMock}/>
            <SizeIcon sx={sxMock}/>
            <StarIcon sx={sxMock}/>
            <StyleIcon sx={sxMock}/>
            <SupportIcon sx={sxMock}/>
            <UserIcon sx={sxMock}/>
            <VariantIcon sx={sxMock}/>
            <GoogleIcon sx={sxMock} />
            <TwitterIcon sx={sxMock}/>
            <FacebookIcon sx={sxMock}/>
        </StackBlock>
    )
}
