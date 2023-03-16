import { configureStore , createSlice } from "@reduxjs/toolkit";

//create an interface for the state value
interface UserStateValue {
    username: string;
}
//create an interface for the state value
interface UserState {
    value : UserStateValue
}
const initialState =  { 
    value :  { username:"" } 
} as UserState; //as UserState is a type assertion

//createSlice is a function that takes in an object with a name, initialState, and reducers

const userSlice = createSlice(
    {
        name: "user",
        initialState, 
        reducers: {
            login: (state:UserState, action:PayloadAction<UserStateValue>) => {
                state.value = action.payload;
            },
            logout: (state:UserState) => {
                state.value = initialState.value;
            },
        },      
});
export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer : {
        user: userSlice.reducer,
    }
}); //takes in an object with reducers
//Reducers are functions that take in the current state and an action and return a new