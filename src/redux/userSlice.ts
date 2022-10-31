import {createSlice } from '@reduxjs/toolkit'
import { UserStructure } from '../interface/user.interface'

const UserState:UserStructure[] = []

export const userSlice = createSlice({
  name:'users',
  initialState:UserState,
  reducers:{
    addUser: (state, action) => {
      const newUser = {
        username:"",
        email:"",
        password:"",
        role:"admin",
      };

      state.push(newUser);
  },
  }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer