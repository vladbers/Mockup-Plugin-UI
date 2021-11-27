import React from "react";
// Mock data Dropdowns
import {MockSizeIcon} from "../icons/mocksize";
import dropdownsIcon from "../../assets/dropdownsIcon.png";
import Clay from "../../assets/ProductHeader/Clay.png";
import PresentationKit from "../../assets/ProductHeader/PresentationKit.png";
import Vector from "../../assets/ProductHeader/Vector.png";
import CropImg from "../../assets/cropImg.png";


export const bigImagesForCrop =  {
    id: 0,
    title: 'test for crop',
    img:  CropImg,
}

export const Artbords = [
    {
        id: 0,
        img: Clay
    },
    {
        id: 1,
        img: PresentationKit
    },
    {
        id: 2,
        img: Vector
    },
    {
        id: 3,
        img: Clay
    },
    {
        id: 4,
        img: PresentationKit
    },
    {
        id: 5,
        img: Vector
    },
    {
        id: 6,
        img: Clay
    },
    {
        id: 7,
        img: PresentationKit
    },
    {
        id: 8,
        img: Vector
    },
    {
        id: 9,
        img: Clay
    },
    {
        id: 10,
        img: PresentationKit
    },
    {
        id: 11,
        img: Vector
    },
    {
        id: 12,
        img: Clay
    },
    {
        id: 13,
        img: PresentationKit
    },
    {
        id: 14,
        img: Vector
    },
    {
        id: 15,
        img: Vector
    },
    {
        id: 16,
        img: Clay
    },
    {
        id: 17,
        img: PresentationKit
    },
    {
        id: 18,
        img: Vector
    }
]

export const Images = [
    {
        id: 0,
        img: Clay
    },
    {
        id: 1,
        img: PresentationKit
    },
    {
        id: 2,
        img: Vector
    }
]

export const Card = {
    name: 'iPhone 12',
    items: [
        {
            id: 0,
            pngFile: Clay,
        },
        {
            id: 1,
            pngFile: Vector,
        },
        {
            id: 2,
            pngFile: PresentationKit,
        }
    ]
}

export const dropdownsSizeOldPlugin = [
    {
        id: 0,
        title: '1x',
        value:  1,
    },
    {
        id: 1,
        title: '2x',
        value: 2,
    },
    {
        id: 2,
        title: '3x',
        value: 3,
    }
]

export const dropdownsSize = [
    {
        id: 0,
        title: '1500',
        value: '1500',
        icon: <MockSizeIcon sx={{width: 16}}/>
    },
    {
        id: 1,
        title: '3000',
        value: '3000',
        icon: <MockSizeIcon sx={{width: 16}}/>
    },
    {
        id: 2,
        title: '6000',
        value: '6000',
        icon: <MockSizeIcon sx={{width: 16}}/>
    }
]

export const dropdownsImage = [
    {
        id: 0,
        title: '1500',
        value: '1500',
        img: dropdownsIcon
    },
    {
        id: 1,
        title: '3000',
        value: '3000',
        img: dropdownsIcon
    },
    {
        id: 2,
        title: '6000',
        value: '6000',
        img: dropdownsIcon
    }
]

export const dropdownsRealistic = [
    {
        id: 0,
        title: 'Realistic',
        value: 'Realistic'
    },
    {
        id: 1,
        title: 'Simple dimples popit',
        value: 'Simple'
    },
    {
        id: 2,
        title: 'Selected',
        value: 'Selected'
    }
]
// id: 0 in first element is required
export const tabArrayMock = [
    {
        id: 0,
        label: 'Scenes',
        subtext: ''
    },
    {
        id: 1,
        label: 'Front',
        subtext: ''
    },
    {
        id: 2,
        label: 'Top',
        subtext: '-12%'
    },
    {
        id: 3,
        label: 'Iso',
        subtext: ''
    }
]

export const tabArrayMockTwo = [
    {
        id: 0,
        label: 'Catalog',
    },
    {
        id: 1,
        label: 'Catalog',
    }
]

export const tabArrayMockThree = [
    {
        id: 0,
        label: 'Featured',
    },
    {
        id: 1,
        label: 'Find',
    },
    {
        id: 2,
        label: 'Distort',
    }
]

export const tabArrayMockFour = [
    {
        id: 0,
        label: 'Month',
        subtext: '',
        heroText: 'Unlock access to whole mockup library',
        listText: ['Unlimited downloads', 'High resolution', 'Huge library'],
        price: '8',
        currency: '$',
        buttonText: 'Subscribe',
        textAfterPrice: 'Per month, billed quarterly',
        footerText: 'The standard VAT rate may be charged, following the law of your country'
    },
    {
        id: 1,
        label: 'Quarter',
        subtext: '-25%',
        heroText: 'Unlock access to whole mockup library',
        listText: ['Unlimited downloads', 'High resolution', 'Huge library'],
        price: '20',
        currency: '$',
        buttonText: 'Subscribe',
        textAfterPrice: 'Per month, billed quarterly',
        footerText: 'The standard VAT rate may be charged, following the law of your country'
    },
    {
        id: 2,
        label: 'Year',
        subtext: '-45%',
        heroText: 'Unlock access to whole mockup library',
        listText: ['Unlimited downloads', 'High resolution', 'Huge library'],
        price: '54',
        currency: '$',
        buttonText: 'Subscribe',
        textAfterPrice: 'Per month, billed quarterly',
        footerText: 'The standard VAT rate may be charged, following the law of your country'
    },
]

export const ArrayMockColors = [
    {
        id: 0,
        hex: '#C4C4C4',
    },
    {
        id: 1,
        hex: '#ffacac',
    },
    {
        id: 2,
        hex: '#acc8ff',
    },
    {
        id: 3,
        hex: '#ffbd81',
    },
    {
        id: 4,
        hex: '#a09cca',
    }
]

export const userAccount = {
    id: 0,
    email: 'stasgalanin@ya.ru',
    subscriptions: [
        {
            id: 0,
            daysLeft: '1668771341',
            eventTime: '1637307401',
            subscriptionTitle: 'Year',
            autoReNew: {
                id: 0,
                data: '1637307401', //timestamp
                status: 'enabled', // status (enabled / disabled)
            },
            invoices: [
                {
                    id: 0,
                    data: '1637307401', //timestamp
                    link: 'https://' // link to get invoice from paddle online
                },
                {
                    id: 1,
                    data: '1637234733',
                    link: 'https://'
                }
            ]
        }
    ]
}


