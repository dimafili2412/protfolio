import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: { location: window.location.href, scroll: '' },
  reducers: {
    setAddress: (state, action) => {
      state.location = action.payload;
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export const { setAddress, setAddressParameter, setScroll } = addressSlice.actions;

export const selectAddress = (state) => state.address.address.location;
export const selectAddressParameter = (state) => state.address.location.split('#')[1] || '';
export const selectScroll = (state) => state.address.scroll;

export default addressSlice.reducer;
