

const initialState = {
	themeMode: 'light' as ThemeMode,
}

export const appReducer = (state: initialState = initialState, action: ActionsType): initialState => {
	switch (action.type) {
		case 'CHANGE_THEME': {
			return {
				...state,
				themeMode: action.payload.themeMode
			}
		}
		default:
			return state
	}
}

// Action creators
export const changeThemeAC = (themeMode: ThemeMode) => {
	return { type: 'CHANGE_THEME', payload: { themeMode } } as const
}

// Actions types
export type ChangeThemeActionType = ReturnType<typeof changeThemeAC>

type ActionsType = ChangeThemeActionType

export type ThemeMode = 'dark' | 'light'

type initialState = typeof initialState;