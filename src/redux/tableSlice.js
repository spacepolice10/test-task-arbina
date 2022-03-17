import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        strings: ['some string']
    },
    reducers: {
        addNewString: (state, action) => {
            console.log(state.strings)
            console.log(action)
            state.strings.push(action.payload)
        },
    }
})

export const tableState = (state) => state.table.strings
export const { addNewString } = tableSlice.actions

export default tableSlice.reducer