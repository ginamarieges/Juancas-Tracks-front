import { tracksMock } from "../../mocks/tracksMocks";
import { TrackStructure, TracksStateStructure } from "./types";
import {
  addTrackActionCreator,
  loadTracksActionCreator,
  tracksReducer,
} from "./tracksSlice";

describe("Given a loadTracks reducer", () => {
  describe("When it receives an empty list of tracks and a list of two tracks", () => {
    test("Then it should return the list of these two tracks", () => {
      const tracks = tracksMock;
      const currentState: TracksStateStructure = {
        tracks: [],
      };
      const expectedState: TracksStateStructure = {
        tracks,
      };
      const payload = {
        tracks: tracks,
      };

      const action = loadTracksActionCreator(payload);

      const newTracksState = tracksReducer(currentState, action);

      expect(newTracksState).toStrictEqual(expectedState);
    });
  });
});

describe("Given a addTrack reducer", () => {
  describe("When it receives Billy Joel track and a list of two tracks", () => {
    test("Then it should return a list of three tracks with Billy Joel in it", () => {
      const tracks = tracksMock;
      const currentState = {
        tracks,
      };
      const BillyJoelTrack: TrackStructure = {
        album: "Billy Joel",
        id: "64ff3e13b19fj9d15016ec314",
        image: "billyJoelImage",
        musicType: "Rock",
        singer: "Billy",
        repeat: false,
        notes: "",
        user: "64de57fc213a48254c8734e6",
        songs: [],
      };
      const expectedState = {
        tracks: [...tracks, BillyJoelTrack],
      };
      const action = addTrackActionCreator(BillyJoelTrack);

      const newTracksState = tracksReducer(currentState, action);

      expect(newTracksState).toStrictEqual(expectedState);
    });
  });
});
