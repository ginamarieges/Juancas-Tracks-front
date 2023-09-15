import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TracksStateStructure } from "./types";

const initialState: TracksStateStructure = {
  tracks: [],
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    loadTracks: (
      currentState: TracksStateStructure,
      action: PayloadAction<TracksStateStructure>
    ): TracksStateStructure => ({
      ...currentState,
      tracks: action.payload.tracks,
    }),
  },
});

export const { loadTracks: loadTracksActionCreator } = tracksSlice.actions;

export const tracksReducer = tracksSlice.reducer;

export default tracksSlice;
