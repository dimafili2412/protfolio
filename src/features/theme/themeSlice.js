import { createSlice } from '@reduxjs/toolkit';

const storedTheme = window.localStorage.getItem('theme') || 'dark';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: storedTheme,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;
