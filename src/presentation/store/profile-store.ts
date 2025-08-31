import { create } from "zustand";


export interface ProfileState {
    name: string;
    email: string;
}

export const useProfileStore = create<ProfileState>()( (set, get) => ({
    name: 'Dua Lipa',
    email: 'dua@mail.com'
}))