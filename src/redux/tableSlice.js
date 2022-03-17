import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        strings: ['some string']
    },
    reducers: {
        addNewString: (state, action) => {
            state.strings = state.strings.concat(action.payload)
        },
    }
})

export const tableState = (state) => state.table.strings
export const { addNewString } = tableSlice.actions

export default tableSlice.reducer