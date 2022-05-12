import { createSlice, current, nanoid } from '@reduxjs/toolkit'

const createFave = (fave, name) => ({
	id: nanoid(),
	rating: 5,
	name,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
			const name = action.payload.name ? action.payload.name : action.payload.title ? action.payload.title : 'no name'
			const fave = createFave(action.payload, name)
      const checkForDuplicate = state.find(fave => fave.name === name);
			return checkForDuplicate ? state : [...state, fave ];
		},
		updateFave: (state, action) => {
			// find fave
			// update fave with array of ids if none exists,
			// or add related id if doesn't exist in array already
			// return state
		},
		rateFave: (state, action) => {
			// find fave
			// update new on that fave
			// return state
		},
		removeFave: (state, action) => {
      const id = action.payload
			// console.log('faves', current(state))
      const arr = state.filter(fave => fave.id !== id)
			return state = arr;
		},
	},
})

export const { addFave, removeFave, rateFave } = favesSlice.actions
export const selectFaveState = state => state.faves
