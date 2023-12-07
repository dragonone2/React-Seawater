import { configureStore, createSlice } from '@reduxjs/toolkit';


let sea = createSlice({
  name: 'sea',
  initialState: [
    { id: 0, name: '동해', latitude: 37.5151, longitude: 129.1108 },
    { id: 1, name: '서해', latitude: 36.8770, longitude: 126.4500 },
    { id: 2, name: '남해', latitude: 34.7582, longitude: 128.7650 }
    // Add more sea areas with necessary attributes
  ]
});

export default configureStore({
  reducer: {
    sea: sea.reducer
  }
});
