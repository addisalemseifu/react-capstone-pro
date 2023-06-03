import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getLocation = createAsyncThunk('location/getLocation', (searchval = 'London') => fetch(`http://api.weatherapi.com/v1/forecast.json?key=5175c5cfe42a44b88ef104519233105&q=${searchval}&days=10`)
  .then((res) => res.json())
  .catch((err) => err));

const initialState = {
  location: [],
  isLoading: true,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    makeReservation: (state, action) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      });
      return {
        ...state,
        dragons: newState,
      };
    },
    cancelReservation: (state, action) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      });
      return {
        ...state,
        dragons: newState,
      };
    },
  },
  extraReducers: {
    [getLocation.pending]: (state) => {
      state.isLoading = true;
    },
    [getLocation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.location = action.payload;
    },
    [getLocation.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserve, cancelReserve } = locationSlice.actions;
export default locationSlice.reducer;
