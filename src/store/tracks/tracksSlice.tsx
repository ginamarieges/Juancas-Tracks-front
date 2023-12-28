import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TrackStructure, TracksStateStructure } from "./types";

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
    addTrack: (
      currentState: TracksStateStructure,
      action: PayloadAction<TrackStructure>
    ): TracksStateStructure => ({
      ...currentState,
      tracks: [...currentState.tracks, action.payload],
    }),
  },
});

export const {
  loadTracks: loadTracksActionCreator,
  addTrack: addTrackActionCreator,
} = tracksSlice.actions;

export const tracksReducer = tracksSlice.reducer;

export default tracksSlice;
