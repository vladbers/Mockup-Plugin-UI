import React, {useEffect, useRef, useState} from "react";
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component';
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";


const useStyles = makeStyles(() => ({
    container: {
        height: 130,
        // background: '#F9F9F9',
        // borderRadius: "10px",
    },
    textBlock: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '12px',
        gap: '6px',
        zIndex: 9,
        width: '170px',
        justifyContent: 'center'
    },
    main: {
        position: 'relative',
        height: 130,
        transition: 'all ease .5s',
        cursor: 'pointer',
        display: 'flex',
    },
    card: {
        top: 0,
        left: 0,
        position: "absolute",
        height: "130px",
        transform: 'rotate(5deg)',
        textAlign: "center",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box",
        transition: 'all ease .5s',
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.12)',
        background: '#F9F9F9',
    },
    cardInner: {
        height: "130px",
        textAlign: "center",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box",
        transition: 'all ease .5s',
        background: '#F9F9F9',
    },
    firstCard: {
        transform: 'translate(0px, 5.7px)',
    },
    secondCard: {
        transform: 'translate(0px, 1.9px)',
    },
    thirdCard: {
        transform: 'translate(0px, -1.9px)',
    },
    fourCard: {
        transform: 'translate(0px, 3.8px)',
    },
    fiveCard: {
        transform: 'translate(0px, 0px)',
    },

    hovered: {
        // transform: 'scale(0.6)',
    },

    // SWITCH CASE ITEMS
    firstItem: {
        transform: 'translate(0px, 5.7px)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    secondItem: {
        transform: 'translate(0px, 2px)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'

    },
    secondCardVarTwo: {
        transform: 'translate(14px, -24.9px) rotate(12deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    thirdItem: {
        transform: 'translate(30px, -54.9px) rotate(24deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    fourItem: {
        transform: 'translate(0px, 3.8px)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    fiveItem: {}

}))

export const UiSortingPreview = ({items, onClick}) => {

    const [isHovered, setIsHovered] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const imgRef = useRef(null)

    const classes = useStyles()

    useEffect(() => {
    }, [isHovered]);


    const positionDetect = (index) => {
        // eslint-disable-next-line default-case
        switch (index) {
            case 1: {
                return classes.firstItem
            }
            case 2: {
                if (arrToMap.length === 3) {
                    return classes.secondCardVarTwo
                } else {
                    return classes.secondItem
                }
            }
            case 3: {
                return classes.thirdItem
            }
            case 4: {
                return classes.fourItem
            }
            case 5: {
                return classes.fiveItem
            }
        }
    }
    const rotateDetect = (index) => {
        // eslint-disable-next-line default-case
        switch (index) {
            case 1: {
                return classes.firstCard
            }
            case 2: {
                return classes.secondCard
            }
            case 3: {
                return classes.thirdCard
            }
            case 4: {
                return classes.fourCard
            }
            case 5: {
                return classes.fiveCard
            }
        }
    }

    const arrToMap = [...items.items.filter((i, index) => index <= 2 && i)]

    return (
        <div className={classes.container}>
            <div className={classes.main} onClick={onClick} onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                {arrToMap.reverse().map((card, index) => index > 2 ? null : (
                    <div style={{maxWidth: 200}}
                         key={card.id}
                         className={`${classes.card} ${rotateDetect(index + 1)} ${isHovered && `${classes.hovered} ${positionDetect(index + 1)}`}`}>
                        <LazyLoadImage
                            effect="opacity"
                            style={{maxWidth: 200}}
                            className={`${classes.cardInner}`}
                            src={card.pngFile}
                            alt="preview"/>
                    </div>
                ))
                }
            </div>
            <div className={classes.textBlock}>
                <Typography variant="type-12" component="p"
                            sx={{color: (theme) => theme.palette.text['high']}}>
                    {items.name}
                    <Typography variant="type-10" component="span" sx={{color: (theme) => theme.palette.text['low'], paddingLeft: '6px'}}>
                    {items.items.length}
                </Typography>
                </Typography>

            </div>
        </div>
    )
}


export default trackWindowScroll(UiSortingPreview);
