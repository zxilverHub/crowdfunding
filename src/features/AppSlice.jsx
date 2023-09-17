import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: "app",
    initialState: {
        stats: {
            backed: 89914,
            backers: 5000,
            daysleft: 56
        },

        app: {
            isMenuExapnd: false,
            mainAppModal: false,
            isBacked: false
        },

        products: {
            bamboo: {
                pledge: 25,
                left: 101
            },

            black: {
                pledge: 75,
                left: 64
            },
            
            mahogany: {
                pledge: 200,
                left: 0
            }
        }
    },

    reducers: {
        checkPercent: (state) => {
            state.stats.backed = 0
        },

        menuExpand: (state, action) => {
            state.app.isMenuExapnd = action.payload
        },

        toggleSelect: (state, action) => {
            state.app.mainAppModal = action.payload
        },

        addbacked: (state, action) => {
            state.stats.backed += Number(action.payload.amount)
            state.stats.backers += 1
            if(action.payload.product!=="no")
                state.products[action.payload.product].left -= 1;
        },

        thankyouModal: (state, action) => {
            state.app.isBacked = action.payload
        }
    }

})

export const { checkPercent, menuExpand, toggleSelect, addbacked, thankyouModal } = appSlice.actions
export default appSlice.reducer