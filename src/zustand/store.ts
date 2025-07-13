import { create } from 'zustand';

type Store = {
  user: any;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<string | null>;
  logout: () => void;
};

export const useStore = create<Store>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  login: async (username, password) => {
    set({ isLoading: true, error: null });

    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const data = await res.json();

      console.log('Login success:', data);

      set({ user: data, token: data.accessToken, isLoading: false }); 
      return data.accessToken;


    } catch (error: any) {
      console.error(error);
      set({ error: error.message, isLoading: false });
      return null;
    }
  },

  logout: () => set({ user: null, token: null }),
}));