import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        strings: ['hello', 'my dear'],
        filteredStrings: [''],
        searchInput: ''
    },
    reducers: {
        addNewString: (state, action) => {
            state.strings = state.strings.concat(action.payload)
        },
        changeInputState: (state, action) => {
            state.searchInput = action.payload
        },
        filterTable: (state, action) => {
            state.filteredStrings = state.strings.filter(e => e.toLowerCase().includes(action.payload.toLowerCase()))
        },
        clearTable: (state) => {
            state.strings = []
        }
    }
})

export const tableState = (state) => state.table.strings
export const filteredTableState = (state) => state.table.filteredStrings
export const searchInputState = (state) => state.table.searchInput
export const { addNewString, filterTable, changeInputState, clearTable } = tableSlice.actions

export default tableSlice.reducer