import React from "react";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";

import {ArrowIcon} from "../icons/arrow";
import {CatalogIcon} from "../icons/catalog";
import {CatalogViewIcon} from "../icons/catalogView";
import {CloseIcon} from "../icons/close";
import {ClosedEyeIcon} from "../icons/closedEye";
import {CopyIcon} from "../icons/copy";
import {CrownIcon} from "../icons/crown";
import {CursorIcon} from "../icons/cursor";
import {DistortIcon} from "../icons/distort";
import {ErrorIcon} from "../icons/error";
import {EyeIcon} from "../icons/eye";
import {HelpIcon} from "../icons/help";
import {HelpiIcon} from "../icons/helpi";
import {InfoIcon} from "../icons/info";
import {LoginIcon} from "../icons/login";
import {LogoutIcon} from "../icons/logout";
import {MenuIcon} from "../icons/menu";
import {NewWindowIcon} from "../icons/newWindow";
import {PlusIcon} from "../icons/plus";
import {PriceIcon} from "../icons/price";
import {RefreshIcon} from "../icons/refrash";
import {ResizeIcon} from "../icons/resize";
import {SearchIcon} from "../icons/search";
import {SizeIcon} from "../icons/size";
import {StarIcon} from "../icons/star";
import {StyleIcon} from "../icons/style";
import {SupportIcon} from "../icons/support";
import {UserIcon} from "../icons/user";
import {VariantIcon} from "../icons/variant";
import {GoogleIcon} from "../icons/ggl";
import {TwitterIcon} from "../icons/tw";
import {FacebookIcon} from "../icons/fb";
import {TurnRightIcon} from "../icons/turnRight";
import {TurnLeftIcon} from "../icons/turnLeft";

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
            <TurnRightIcon sx={sxMock}/>
            <TurnLeftIcon sx={sxMock}/>
        </StackBlock>
    )
}
