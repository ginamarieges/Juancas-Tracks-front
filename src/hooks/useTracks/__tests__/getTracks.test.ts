import { renderHook } from "@testing-library/react";
import useTracks from "../useTracks";
import { tracksMock } from "../../../mocks/tracksMocks";

describe("Given a getTracks function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of two tracks, Abbey Road and The Dark Side of The Moon", async () => {
      const expectedTracks = tracksMock;
      const {
        result: {
          current: { getTracks },
        },
      } = renderHook(() => useTracks());

      const tracks = await getTracks();

      expect(tracks).toStrictEqual({ tracks: expectedTracks });
    });
  });
});
