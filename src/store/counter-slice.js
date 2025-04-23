import { createSlice } from "@reduxjs/toolkit";



const inititalState = {
    counter:0,
    showcounter:true
}

export const counterSlice = createSlice({
    name : "counter",
    initialState : inititalState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter+ action.payload
        },
        toggleCounter(state){
            state.showcounter = !state.showcounter;
        }
    }
})