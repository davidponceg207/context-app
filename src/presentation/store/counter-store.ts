import { create } from "zustand";

export interface CounterState {
    count: number;

    incrementBy: (value: number) => void;
    decreaseBy: (value: number) => void;
}

// useCounterStore

export const useCounterStore = create<CounterState>()( (set, get) => ({
    count: 0,

    incrementBy: (count: number) => {
        console.log(get())
        set({count: count + 1});
    },
    decreaseBy: (count: number) => {
        console.log(get())
        set({count: count - 1});
    }
}))