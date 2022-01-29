import { createSlice   } from "@reduxjs/toolkit"
// import { nanoid } from "nanoid"

const initialState = [

    {
        id: '-a0fpnfyNgXseFpMaXEZj',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: ['https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',],
        category: ["men"],
        favorite: false,

    },
    {
        id:  'TlxcnEzPcpj3pdeSoXccz',
        name: "Kids Chelsea Boot",
        desc: "The white boot offers a new take on the Chelsea boot in a couture variation suitable for young children. Crafted in calfskin, it has black contrasting stretch bands on the sides and tab detailing to easily slip it on. The streamlined design is completed by a thick notched rubber sole while a 'DIOR' signature enhances the rear. The elegant ankle boot can be worn with a skirt or pants for a modern look.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            // 'https://res.cloudinary.com/abasscodes/image/upload/v1638321471/landscape-dior_rehbta.webp',
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321420/1636132611_2SBS15SHOB_Y013_E05_GH_izkhm9.webp',
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321396/1636132611_2SBS15SHOB_Y013_E03_GH_obdbwr.webp',
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321370/1635875112_2SBS15SHOB_Y013_E09_GH_mhd5tm.webp'
        ],
        category: ["children"],
        favorite: false,
        // size: ['x','xs',]
        colors: ["purple", "black", "green"]

    },

    {
        id: 'IPtH9oPn-MxDMEXAAHy2v',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            ],
        category: ["men"],
        favorite: false
    },

    {
        id: 'IPtH93Pn-MxDMEXAAHy2v',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["men"],
        favorite: false
    },

    {
        id: 'IxtH9oPn-MxDMEXAAHy2v',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["women"],
        favorite: false
    },

    {
        id: 'IptH9oPn-MxDMEXAAHy2v',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["women"],
        favorite: false,
    },

    {
        id: 'sdfl;adkjfkasdfdfsdskaldfs',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["men"],
        favorite: false,
    },

    {
        id: 'IPtH9oPnMxDMEXAAHy2V',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["men"],
        favorite: false,
    },

    {
        id: 'IPtH9oPn-MxDMEXAAH2V',
        name: "Tiro 21 Track ",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["men"],
        favorite: false,
    },

    {
        id: 'IPtH9oPn-MxDMEXAAHy2',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
            'https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg',
        ],
        category: ["men"],
        favorite: false,
    },

    {
        id: 'IPtH9oPn-MxDMEXAAHy2V',
        name: "Tiro 21 Track Pant",
        desc: "Feel good. Look good. Rooted in soccer heritage, the Tiro 21 Track Pants perform on and off the pitch. Made to move, they keep you confident with moisture-absorbing AEROREADY. They also contain recycled materials, another small step in adidas' efforts to help end plastic waste.",
        price: 45,
        image: [
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321444/1636132611_2SBS15SHOB_Y013_E06_GH_zqy7nm.webp',
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321396/1636132611_2SBS15SHOB_Y013_E03_GH_obdbwr.webp',
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321370/1635875112_2SBS15SHOB_Y013_E09_GH_mhd5tm.webp',
            'https://res.cloudinary.com/abasscodes/image/upload/v1638321420/1636132611_2SBS15SHOB_Y013_E05_GH_izkhm9.webp'
        ],
        category: ["children"],
        favorite: false,
    },

]

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productFavorited: (state,action) => {
            // state.find()
        }
    }
})

// export const { } = productsSlice.action

export const selectAll = state => state.products

export default productsSlice.reducer