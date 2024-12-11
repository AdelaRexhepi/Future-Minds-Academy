import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {name: "", email:""},
    reducers:{
        updateName:(state, action) => {
            state.name = action.payload
        },
        updateEmail: (state, action) =>{
            state.email = action.payload
        },
        resetForm: () => ({
            name: "",
            email: "",
        }),
    },
})
export const { updateName, updateEmail, resetForm} = formSlice.actions;
export default formSlice.reducer