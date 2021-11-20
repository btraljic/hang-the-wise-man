import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState, User } from '../../app/types'

const slice = createSlice({
  name: 'user',
  initialState: { name: '' } as User,
  reducers: {
    setUser: (state, { payload: name }: PayloadAction<string>) => {
      state.name = name
    },
  },
})

export const { setUser } = slice.actions
export const selectUser = (state: RootState) => state.user.name

export default slice.reducer
