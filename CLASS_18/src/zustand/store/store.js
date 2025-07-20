import { create } from "zustand";
import { initialstate } from "../state/state";
import { cartReducer } from "../reducer/cart";

export const useCartStore = create((set) => ({
    ...initialstate,
    dispatch: (action) => set((state) => cartReducer(state, action))
}))