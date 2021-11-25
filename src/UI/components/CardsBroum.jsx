import React, {useEffect, useRef, useState} from "react";
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component';
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(() => ({
    container: {
        height: 175,
        // background: '#F9F9F9',
        // borderRadius: "10px",

    },
    main: {
        position: 'relative',
        height: 175,
        transition: 'all ease .5s',
        cursor: 'pointer',
        display: 'flex',
    },
    card: {
        top: 0,
        left: 0,
        position: "absolute",
        height: "175px",
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
        height: "175px",
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
        transform: 'rotate(3deg)',
    },
    secondCard: {
        transform: 'rotate(-2deg)',
    },
    thirdCard: {
        transform: 'rotate(2deg)',
    },
    fourCard: {
        transform: 'rotate(-1deg)',
    },
    fiveCard: {
        transform: 'rotate(1deg)',
    },

    hovered: {
        transform: 'scale(0.6)',
    },

    // SWITCH CASE ITEMS
    firstItem: {
        transform: 'scale(0.6) translate(75px, 50px) rotate(5deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    secondItem: {
        transform: 'scale(0.6) translate(-75px, -50px) rotate(-5deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'

    },
    secondCardVarTwo: {
        transform: 'scale(0.6) translate(15px, -50px) rotate(-5deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    thirdItem: {
        transform: 'scale(0.6) translate(-75px, 50px) rotate(5deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    fourItem: {
        transform: 'scale(0.6) translate(75px, -50px) rotate(-5deg)',
        boxShadow: '1px 1px 1px  rgba(0, 0, 0, 0.12)'
    },
    fiveItem: {}

}))

const CardsBroum = ({items, onClick}) => {

    const [isHovered, setIsHovered] = useState(false);
    const imgRef = useRef(null)

    const classes = useStyles()

    useEffect(() => {
    }, [isHovered]);


    const positionDetect = (index) => {
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

    const arrToMap = [...items.items.filter((i, index) => index <= 4 && i)]

    return (
        <div className={classes.container}>
            <div className={classes.main} onClick={onClick} onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                {arrToMap.reverse().map((card, index) => index > 4 ? null : (
                    <div style={{maxWidth: 300}}
                         key={card.id}
                         className={`${classes.card} ${rotateDetect(index + 1)} ${isHovered && `${classes.hovered} ${positionDetect(index + 1)}`}`}>
                        <LazyLoadImage
                            effect="opacity"
                            style={{maxWidth: 300}}
                            className={`${classes.cardInner}`}
                            src={card.pngFile}
                            alt="preview"/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


export default trackWindowScroll(CardsBroum);
