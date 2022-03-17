import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        value: ['some string']
    },
    reducers: {
        addNewString: (state, action) => {
            state.value.concat(action.payload)
        },
    }
})

export const { addNewString } = tableSlice.actions

export default tableSlice.reducer