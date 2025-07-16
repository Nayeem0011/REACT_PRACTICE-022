import { create } from "zustand";
import { counterReducer, initialState } from "../reducer/counter";

const useStore = create((set, get)=>({
    ...initialState,
    dispatch:(action)=>set((state)=>counterReducer(state, action))
}))

export default useStore